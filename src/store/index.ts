import { AddressStore } from "./main/addressStore";
import { balance } from "./main/coinStore";
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
  };
};
