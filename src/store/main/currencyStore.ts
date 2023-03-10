import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";

const instance = axios.create({
  baseURL: `https://bot.tmychain.org/api/UserSettings/getUserCurrency`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const getCurrency = createEffect(async (id: number) => {
  const answer = await request({
    method: "get",
    headers: {
      userId: id,
    },
  });
  return answer;
});

const WriteCurrency = createEvent<number>();

export const $currency = createStore<string | unknown>("").on(
  getCurrency.doneData,
  (_, answer) => answer
);

const $loader = getCurrency.pending;

sample({
  clock: getCurrency,
  target: WriteCurrency,
});

export const CurrencyStore = {
  store: $currency,
  event: getCurrency,
  loader: $loader,
};
