import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { useTelegram } from "../hooks/useTelegram";
import { IUserWalet } from "../types/wallet";

const { tg } = useTelegram();

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

export const pageLoaded = createEvent();
