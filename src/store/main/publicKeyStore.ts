import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";

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
  return answer;
});

const publicKeyEvent = createEvent();

const $publicKey = createStore<string|unknown>("").on(
  publicKeyEffect.doneData,
  (_, answer) => answer
);
const $loader = publicKeyEffect.pending;

sample({
  clock: publicKeyEvent,
  target: publicKeyEffect,
});

export const publicKey = {
  store: $publicKey,
  event: publicKeyEvent,
  loader: $loader,
};
