import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { web3 } from "../../service/getWeb3";

const getBalance = createEffect(async () => {
  let balance: any;
  const Transaction = web3.eth.sendTransaction({
    from: "0xc6D3720f6286C5173C94523b8b02d549c9933662",
  });

  try {
    web3.eth
      .getBalance("0xc6D3720f6286C5173C94523b8b02d549c9933662")
      .then((balanceInWei: any) => {
        balance = web3.utils.fromWei(balanceInWei);
        WriteBalance(balance);
      });
  } catch (error) {
    balance = error;
  }
});

const WriteBalance = createEvent<any>();

const $balanceStore = createStore<any>("").on(
  WriteBalance,
  (_, answer) => answer
);

const $loader = getBalance.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

export const balance = () => {
  return {
    store: $balanceStore,
    event: getBalance,
    loader: $loader,
  };
};
