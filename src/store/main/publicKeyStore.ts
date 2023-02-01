import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const server = "https://bot.tmychain.org/api/Wallet/getPublicKey";

const instance = axios.create({
  baseURL: `${server}`,
});

async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const publicKeyEffect = createEffect(async () => {
  const answer = await request({
    method: "GET",
  });
  console.log("answer", answer);
  return answer;
});

const publicKeyEvent = createEvent();

const $publicKey = createStore<any>("").on(
  publicKeyEffect.doneData,
  (_, answer) => answer
);
const $loader = publicKeyEffect.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

sample({
  clock: publicKeyEvent,
  filter: canRequest,
  target: publicKeyEffect,
});

export const publicKey = () => {
  return {
    store: $publicKey,
    event: publicKeyEvent,
    loader: $loader,
  };
};
