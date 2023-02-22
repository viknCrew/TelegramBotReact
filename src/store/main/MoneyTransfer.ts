import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const service = "/sendTransaction";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SEVER}${service} `,
});

interface IExecuteFundsTransfer {
  senderId: number;
  address: string;
  amount: number;
  data: string;
}

async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const executeFundsTransfer = createEffect(
  async (dataTransaction: IExecuteFundsTransfer) => {
    const answer = await request({
      method: "post",
      headers: {
        senderId: dataTransaction.senderId,
        address: dataTransaction.address,
        amount: dataTransaction.amount,
        "Content-Type": "application/json",
      },
      data: dataTransaction.data,
    });
    return answer;
  }
);

executeFundsTransfer.failData.watch((error) => {
  console.error(`Вызов завершился с ошибкой ${error}`);
});
const callTransfer = createEvent<IExecuteFundsTransfer>();

const $hashTrancsation = createStore<string | unknown>("").on(
  executeFundsTransfer.doneData,
  (_, answer) => answer
);

export const $loaderWallet = executeFundsTransfer.pending;

sample({
  clock: executeFundsTransfer,
  target: callTransfer,
});

export const Transfer = {
  store: $hashTrancsation,
  event: executeFundsTransfer,
  loader: $loaderWallet,
};
