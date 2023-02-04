import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { web3 } from "../../service/getWeb3";

const getBalance = createEffect(async (address: string) => {
  const WalletID = web3.utils.toChecksumAddress(address);
  let balance: any;

  try {
    web3.eth.getBalance(WalletID).then((balanceInWei: any) => {
      balance = web3.utils.fromWei(balanceInWei);
      WriteBalance(balance);
    });
  } catch (error) {
    balance = error;
  }
});

const WriteBalance = createEvent<any>();

export const $balanceStore = createStore<any>("").on(
  WriteBalance,
  (_, answer) => answer
);

const $loader = getBalance.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

export const balance = {
  store: $balanceStore,
  event: getBalance,
  loader: $loader,
};
