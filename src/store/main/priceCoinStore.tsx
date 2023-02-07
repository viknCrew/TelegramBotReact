import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const server = "https://bot.tmychain.org/api/Wallet/getPrice";

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const getPrice = createEffect(async () => {
  const answer = await request({
    method: "get",
  });

  return answer;
});

const WritePrice = createEvent();

export const $price = createStore<any>("").on(getPrice, (_, answer) => answer);

const $loader = getPrice.pending;

sample({
  clock: getPrice,
  target: WritePrice,
});

export const PriseStore = {
  store: $price,
  event: WritePrice,
  loader: $loader,
};
