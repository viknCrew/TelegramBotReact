import { balance } from "./main/coinStore";
import { privateKey } from "./main/privateKeyStore";
import { publicKey } from "./main/publicKeyStore";
import { TransationList } from "./main/TansationList";
import { Transaction } from "./main/tramsayionStore";
import { translationAddress } from "./main/translationAddressStore";
import { WalletStore } from "./main/walletStore";

export const GlobalStore = () => {
  return {
    balance,
    publicKey,
    TransationList,
    Transaction,
    WalletStore,
    privateKey,
    translationAddress,
  };
};
