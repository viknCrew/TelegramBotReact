import { WalletEvent } from "./userStire";

export const Web3 = require("web3");
export const web3 = new Web3("https://node1.tmyblockchain.org/rpc");

export let balance: any;

export default async function CheckBalance() {
  const Transaction = web3.eth.sendTransaction({
    from: "0xc6D3720f6286C5173C94523b8b02d549c9933662",
  });
  console.log("Transaction", Transaction);
  try {
    web3.eth
      .getBalance("0xc6D3720f6286C5173C94523b8b02d549c9933662")
      .then((balanceInWei: any) => {
        
        balance = web3.utils.fromWei(balanceInWei);
        console.log("Balance in wei:", balanceInWei);
        console.log("Balance in ETH:", balance);
        WalletEvent(balance);
      });
  } catch (error) {
    console.log(error);
  }
}
