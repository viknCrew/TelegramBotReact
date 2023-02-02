import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";

const server = "http://node1.tmychain.org/rpc/api/Wallet/getWallet";

const { tg } = useTelegram();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const walletEffect = createEffect(async () => {
  const answer = await request({
    method: "POST",
    headers: {
      userID: tg.initDataUnsafe.user.id,
      initData: tg.initData,
    },
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

export const WalletStore = {
  store: $wallet,
  event: walletEvent,
  loader: $loaderWallet,
};
