import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const server = "https://bot.tmychain.org/api/Wallet/sendTransaction";

const instance = axios.create({
  baseURL: `${server}`,
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
    console.log("dataTransaction", dataTransaction);
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
  console.log(`Вызов завершился с ошибкой ${error}`);
});
const callTransfer = createEvent<IExecuteFundsTransfer>();

const $hashTrancsation = createStore<string | unknown>("").on(
  executeFundsTransfer.doneData,
  (_, answer) => answer
);

sample({
  clock: executeFundsTransfer,
  target: callTransfer,
});

export const Transfer = {
  store: $hashTrancsation,
  event: executeFundsTransfer,
  loader: false,
};
