import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";
import { web3 } from "../../service/getWeb3";

const service = "/getAddress";

const { tg } = useTelegram();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SEVER}${service} `,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const data = JSON.stringify(tg.initData);
const id = tg.initDataUnsafe.user.id;


const walletEffect = createEffect(async () => {
  const answer = await request({
    method: "post",
    headers: {
      userId: id,
      "Content-Type": "application/json",
    },
    data: data,
  });

  return web3.utils.toChecksumAddress(answer);
});

export const walletEvent = createEvent();

export const $wallet = createStore<string | unknown>("").on(
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
