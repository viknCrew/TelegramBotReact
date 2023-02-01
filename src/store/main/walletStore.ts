import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const server = "http://node1.tmychain.org/rpc/api/Wallet/getWallet";

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const walletEffect = createEffect(async (id: number, publicKey: string) => {
  const answer = await request({
    method: "POST",
    headers: {
      userID: id,
    },
    params: "",
  });
  return answer;
});

export const walletEvent = createEvent<number>();

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

export const Wallet = () => {
  return {
    store: $wallet,
    event: walletEvent,
    loader: $loaderWallet,
  };
};
