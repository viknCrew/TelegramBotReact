import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";
import { web3 } from "../../service/getWeb3";
import {
  ITransation,
  statusTransation,
  statusType,
} from "../../types/transaction";

const instance = axios.create({
  baseURL: `https://2.tmyscan.com/api`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const trancsationEffect = createEffect(async (address: string) => {
  const WalletID = web3.utils.toChecksumAddress(address);

  console.log("WalletID", WalletID);

  const answer: any = await request({
    method: "GET",
    params: {
      module: "account",
      action: "txlist",
      offset: 10,
      address: WalletID,
    },
  });

  const promises: any[] = answer.result;

  const transform = (tran: any) => {
    const Web3 = require("web3");
    const web3 = new Web3("https://node1.tmyblockchain.org/rpc");
    let tStatus: statusType;

    try {
      if (web3.utils.toChecksumAddress(tran.to) === WalletID) {
        tStatus = statusTransation.receiving;
      } else {
        tStatus = statusTransation.send;
      }
    } catch {
      tStatus = statusTransation.undefined;
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
  };

  const Transations: ITransation[] = await Promise.all(promises);

  return Transations.map(transform);
});

const $trancsationStore = createStore<ITransation[]>([]).on(
  trancsationEffect.doneData,
  (_, answer) => answer
);

const pageLoaded = createEvent<any>();

const $loading = trancsationEffect.pending;

sample({ clock: pageLoaded, target: [trancsationEffect] });

export const TransationList = {
  store: $trancsationStore,
  event: pageLoaded,
  loader: $loading,
};
