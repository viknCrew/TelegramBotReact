import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";
import { web3 } from "../../service/getWeb3";
import {
  ITransation,
  statusTransation,
  statusType,
} from "../../types/transaction";

const WalletID = "0x0786e7225fE1aaf37e1a5359544CBC8755E1c6aB";

const trancsationEffect = createEffect({
  handler: async () => {
    const res = await axios.get(
      `https://2.tmyscan.com/api?module=account&action=txlist&address=${WalletID}`,
      {
        params: {
          offset: 10,
        },
      }
    );

    const Transations = res.data.result.map((tran: any) => {
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

      return {
        blockHash: tran.blockHash,
        Hash: tran.hash,
        blockNumber: tran.blockNumber,
        gas: tran.gas,
        from: tran.from,
        to: tran.to,
        timeStamp: date,
        value: web3.utils.fromWei(tran.value),
        status: tStatus,
      };
    });

    return Transations;
  },
});

const $trancsationStore = createStore<ITransation[]>([]).on(
  trancsationEffect.doneData,
  (_, answer) => answer
);

const pageLoaded = createEvent();

const $loading = trancsationEffect.pending;

sample({ clock: pageLoaded, target: [trancsationEffect] });

export const TransationList = () => {
  return {
    store: $trancsationStore,
    event: pageLoaded,
    loader: $loading,
  };
};
