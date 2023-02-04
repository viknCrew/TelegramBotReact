import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import getAddress from "../../hooks/useAddress";
import { web3 } from "../../service/getWeb3";
import { statusTransation, statusType } from "../../types/transaction";

const WalletID = "0xc6D3720f6286C5173C94523b8b02d549c9933662";

export const TranEffect = createEffect({
  handler: async (id: any) => {
    const res = await axios.get(
      `https://2.tmyscan.com/api?module=transaction&action=gettxinfo&txhash=${id}`
    );
    console.log("res", res);
    const tran = res.data.result;
    console.log("tran", tran);
    let tStatus: statusType;

    if (web3.utils.toChecksumAddress(tran.to) === WalletID) {
      tStatus = statusTransation.receiving;
    } else {
      tStatus = statusTransation.send;
    }

    let options: any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    options.timeZone = "UTC";
    options.timeZoneName = "short";

    const date = new Date(Number(tran.timeStamp + "000")).toLocaleDateString(
      "en-US",
      options
    );

    const Transations = {
      blockHash: tran.blockHash,
      Hash: tran.hash,
      blockNumber: tran.blockNumber,
      gas: web3.utils.fromWei(tran.gasLimit),
      from: tran.from,
      to: tran.to,
      timeStamp: date,
      value: web3.utils.fromWei(tran.value),
      status: tStatus,
    };
    console.log("Transations", Transations);
    return Transations;
  },
});

export const TranEvent = createEvent<any>();

export const $Tran = createStore<any>(0).on(
  TranEffect.doneData,
  (_, answer) => answer
);

const $loader = TranEffect.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

sample({
  clock: TranEvent,
  filter: canRequest,
  target: TranEffect,
});

export const Transaction = {
  store: $Tran,
  event: TranEvent,
  loader: $loader,
};
