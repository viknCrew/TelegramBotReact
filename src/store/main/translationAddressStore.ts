import { createEvent, createStore } from "effector";

const TranslationAddressEvent = createEvent<string>();

const $Address = createStore<string>("").on(
  TranslationAddressEvent,
  (_, answer) => answer
);
export const translationAddress = {
  store: $Address,
  event: TranslationAddressEvent,
  loader: false,
};
