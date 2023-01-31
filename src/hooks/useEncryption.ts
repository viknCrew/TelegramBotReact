import axios from "axios";
import { useTelegram } from "./useTelegram";

const server = "https://bot.tmychain.org/api/Wallet/getPublicKey";

const {tg} = useTelegram();

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

export function useEncryption() {
  const publicKey = getPublicKey();
  const crypto = require("crypto");
  const data = tg.initData;

  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data)
  );

  console.log("encypted data: ", encryptedData.toString("base64"));

  return encryptedData.toString("base64")
}

async function getPublicKey() {
  const answer = await request({
    method: "GET", });

  return answer  
  
}
