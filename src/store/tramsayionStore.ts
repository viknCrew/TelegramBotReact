import axios from "axios";
import { Console } from "console";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../hooks/useTelegram";
import {
  ITransation,
  statusTransation,
  statusType,
} from "../types/transaction";
import { web3 } from "./coinStore";

const WalletID = "0x0786e7225fE1aaf37e1a5359544CBC8755E1c6aB";

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

sample({ clock: TranEvent, target: [TranEvent, TranEffect] });

export const $Tran = createStore<any>(0).on(
  TranEffect.doneData,
  (_, answer) => answer
);
