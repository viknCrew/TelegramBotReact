import { createEvent, createStore } from "effector";

const CallModal = createEvent<boolean>();

 const $Modal = createStore<boolean>(false).on(CallModal, (_, answer) => answer);

export const Modal = {
  store: $Modal,
  event:  CallModal,
  loader: false,
};