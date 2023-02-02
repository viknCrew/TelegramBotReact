import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";
const { tg } = useTelegram();
const server = "https://bot.tmychain.org/api/Wallet/encryptInitDara";

const instance = axios.create({
  baseURL: `${server}`,
});

async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const privateKeyEffect = createEffect(async (publicKey: string ) => {


  const answer: any = await request({
    method: "POST",
    headers: {
      rsaPemKey: publicKey,
    },
    body: {
      initData: tg.initData,
    },
  });
  console.log("answer", answer);
  return answer;
});

const privateKeyEvent = createEvent<string>();

const $privateKey = createStore<string>("").on(
  privateKeyEffect.doneData,
  (_, answer) => answer
);
const $loader = privateKeyEffect.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

sample({
  clock: privateKeyEvent,
  filter: canRequest,
  target: privateKeyEffect,
});

export const privateKey = {
  store: $privateKey,
  event: privateKeyEvent,
  loader: $loader,
};
