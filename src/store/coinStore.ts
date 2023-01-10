export const Web3 = require("web3");
export const web3 = new Web3("https://node1.tmyblockchain.org/rpc");
export const balance = web3.eth.getBalance(
  "0xc6D3720f6286C5173C94523b8b02d549c9933662"
);
