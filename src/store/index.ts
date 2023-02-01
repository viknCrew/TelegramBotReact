import Wallet from "../pages/Wallet"
import { balance } from "./main/coinStore"
import { publicKey } from "./main/publicKeyStore"
import { TransationList } from "./main/TansationList"
import { Transaction } from "./main/tramsayionStore"

export const GlobalStore = () => {
  return {
    balance,
    publicKey,
    TransationList,
    Transaction,
    Wallet
  }
}