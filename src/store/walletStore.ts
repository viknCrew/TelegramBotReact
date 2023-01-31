import axios, { Axios } from "axios";
import { createEffect } from "effector";
import { useEncryption } from "../hooks/useEncryption";

const server = "http://node1.tmychain.org/rpc/api/Wallet/getWallet";

const publicKey = useEncryption();

const instance = axios.create({
  baseURL: `${server}`,
});



export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

const addCoins = createEffect(async (id: any) => {
  const answer: Axios = await request({
    method: "Post",
    headers:{
      userID:id,},
    params:publicKey
  });



  return answer;
});
