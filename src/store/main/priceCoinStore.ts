import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const service = "/getPrice";

const instance = axios.create({
  baseURL: `${process.env.SEVER}${service} `,
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

export const $price = createStore<number | unknown>(1).on(
  getPrice.doneData,
  (_, answer) => answer
);

const $loader = getPrice.pending;

sample({
  clock: getPrice,
  target: WritePrice,
});

export const PriseStore = {
  store: $price,
  event: getPrice,
  loader: $loader,
};
