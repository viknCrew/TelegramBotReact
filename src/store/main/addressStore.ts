import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../../hooks/useTelegram";

const server = "https://bot.tmychain.org/api/Wallet/getAddress";

const { tg } = useTelegram();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const walletEffect = createEffect(async () => {
  // const data = JSON.stringify(tg.initData);
  // const id = tg.initDataUnsafe.user.id;

  const data = JSON.stringify(
    "query_id=AAGLkc8pAAAAAIuRzynTSmJe&user=%7B%22id%22%3A701469067%2C%22first_name%22%3A%22%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B0%22%2C%22last_name%22%3A%22%D0%A6%D0%B8%D0%B3%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%22%2C%22username%22%3A%22TsigulskyNikita%22%2C%22language_code%22%3A%22en%22%7D&auth_date=1675511921&hash=0da52979f4ead09ff39f53d411abb9b80e91aa5fab73d60ff27239d8571bbd17"
  );

  // const id = tg.initDataUnsafe.user.id;
  const id = 701469067;

  console.log("tg", tg);
  console.log("data", data);
  console.log("id", id);

  const answer: any = await request({
    method: "post",
    headers: {
      userId: id,
      "Content-Type": "application/json",
    },
    data: data,
  });

  console.log("answer", answer);
  return answer;
});

export const walletEvent = createEvent();

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

export const AddressStore = {
  store: $wallet,
  event: walletEvent,
  loader: $loaderWallet,
};
