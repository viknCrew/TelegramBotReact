import axios from "axios";
import {
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";

const instance = axios.create({
  baseURL: `https://bot.tmychain.org/api/UserSettings/getUserLanguage`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const getLanguage = createEffect(async (id: number) => {
  const answer = await request({
    method: "get",
    headers: {
      userId: id,
    },
  });

  let code: string = "en";

  if (answer === "Russian") {
    code = "ru";
  } else if (answer === "English") {
    code = "en";
  }

  console.log("language", code);
  return code;
});

const WriteLanguage = createEvent<number>();

export const $price = createStore<string | unknown>(1).on(
  getLanguage.doneData,
  (_, answer) => answer
);

const $loader = getLanguage.pending;

sample({
  clock: getLanguage,
  target: WriteLanguage,
});

export const languageStore = {
  store: $price,
  event: getLanguage,
  loader: $loader,
};
