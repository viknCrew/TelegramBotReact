
import { AddressStore } from "./main/addressStore";
import { balance } from "./main/coinStore";
import { Modal } from "./main/modalStore";
import { Transfer } from "./main/MoneyTransfer";
import { privateKey } from "./main/privateKeyStore";
import { publicKey } from "./main/publicKeyStore";
import { TransationList } from "./main/TansationList";
import { Transaction } from "./main/tramsayionStore";
import { translationAddress } from "./main/translationAddressStore";

export const GlobalStore = () => {
  return {
    balance,
    publicKey,
    TransationList,
    Transaction,
    AddressStore,
    privateKey,
    translationAddress,
    Modal,
    Transfer,
  };
};

export const GlobalLoader = (store: boolean[]) => {
  let loader: boolean = false;
  for (var i = 0; i < store.length; i++) {
    loader = loader || store[i];
    console.log(store[i]);
  }
  console.log(loader);
  return loader;
};