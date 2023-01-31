import axios, { Axios } from "axios";
import { combine, createEffect, createEvent, createStore, sample } from "effector";
import { useEncryption } from "../hooks/useEncryption";

const server = "http://node1.tmychain.org/rpc/api/Wallet/getWallet";

const publicKey = useEncryption();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const walletEffect = createEffect(async (id: any) => {
  const answer: Axios = await request({
    method: "Post",
    headers: {
      userID: id,
    },
    params: publicKey,
  });
  return answer;
});

export const walletEvent = createEvent<number>();

export const $wallet = createStore<any>({}).on(
  walletEffect.doneData,
  (_, answer) => answer
);
export const $loaderWallet = walletEffect.pending;

export const canRequest = combine(
  [$loaderWallet],
  ([loading]) => !loading
);

sample({
  clock: walletEvent,
  filter: canRequest,
  target: walletEffect,
});
