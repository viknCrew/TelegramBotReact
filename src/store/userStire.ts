import axios from "axios";
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
import { IUserWalet } from "../types/wallet";

const { tg } = useTelegram();
const WalletID = "0x0786e7225fE1aaf37e1a5359544CBC8755E1c6aB";
const Web3 = require("web3");
const web3 = new Web3("https://node1.tmyblockchain.org/rpc");
export const WalletEvent = createEvent<number>();
export const $WalletStore = createStore(0).on(WalletEvent, (state, msg) => msg);
export const UserEffect = createEffect({
  handler: async () => {
    const res = await axios.post(
      `http://localhost:5000/api/Wallet/getWallet`,

      {
        headers: { userId: 701469067 },
      }
    );

    return res;
  },
});
export const $UsertStore = createStore<IUserWalet>({
  telegramId: 0,
  username: "",
  mnemonic: "",
  address: "",
  password: "",
}).on(UserEffect, (state, msg) => msg);

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
export const $trancsationStore = createStore<ITransation[]>([]).on(
  trancsationEffect.doneData,
  (_, answer) => answer
);

export const pageLoaded = createEvent();

export const $loading = combine(
  [trancsationEffect.pending, UserEffect.pending],
  ([с1, с2]) => с1 || с2
);

sample({ clock: pageLoaded, target: [UserEffect, trancsationEffect] });
