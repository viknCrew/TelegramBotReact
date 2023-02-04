import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";

const server = "https://bot.tmychain.org/api/Wallet/getWallet";

const { tg } = useTelegram();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const data = JSON.stringify(tg.initData);

const walletEffect = createEffect(async () => {
  const answer: any = await request({
    method: "post",
    headers: {
      userId: tg.initDataUnsafe.user.id,
      "Content-Type": "application/json",
    },
    data: data,
  });
  console.log("answer", answer);

  return answer.address;
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

export const WalletStore = {
  store: $wallet,
  event: walletEvent,
  loader: $loaderWallet,
};
