import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";

const server = "https://bot.tmychain.org/api/Wallet/getAddress";

const { tg } = useTelegram();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const data = JSON.stringify(tg.initData);

const id = tg.initDataUnsafe.user.id;

const walletEffect = createEffect(async () => {
  const answer: any = await request({
    method: "post",
    headers: {
      userId: id,
      "Content-Type": "application/json",
    },
    data: data,
  });

  return answer;
});

export const walletEvent = createEvent();

export const $wallet = createStore<any>({}).on(
  walletEffect.doneData,
  (_, answer) => answer
);
export const $loaderWallet = walletEffect.pending;

export const canRequest = combine([$loaderWallet], ([loading]) => !loading);

sample({
  clock: walletEvent,
  filter: canRequest,
  target: walletEffect,
});

export const AddressStore = {
  store: $wallet,
  event: walletEvent,
  loader: $loaderWallet,
};
