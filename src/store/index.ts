import { AddressStore } from "./main/addressStore";
import { balance } from "./main/coinStore";
import { CurrencyStore } from "./main/currencyStore";
import { AddressByNiknameStore } from "./main/getAddressByNikname";
import { languageStore } from "./main/languageStore";
import { Modal } from "./main/modalStore";
import { Transfer } from "./main/MoneyTransfer";
import { PriseStore } from "./main/priceCoinStore";
import { TransationList } from "./main/TansationList";
import { Transaction } from "./main/tramsayionStore";
import { translationAddress } from "./main/translationAddressStore";

export const GlobalStore = () => {
  return {
    balance,
    TransationList,
    Transaction,
    AddressStore,
    translationAddress,
    Modal,
    Transfer,
    PriseStore,
    AddressByNiknameStore,
    languageStore,
    CurrencyStore
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
