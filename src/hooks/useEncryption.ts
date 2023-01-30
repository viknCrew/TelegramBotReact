import axios from "axios";

const server = "https://bot.tmychain.org";

const instance = axios.create({
  baseURL: `${server}`,
});

export async function request<Done>(config: any): Promise<Done> {
  return instance(config).then((response) => response.data);
}

export function useEncryption() {
  const publicKey = getPublicKey();
  const crypto = require("crypto");
  const data = "my secret data";

  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data)
  );

  // The encrypted data is in the form of bytes, so we print it in base64 format
  // so that it's displayed in a more readable form
  console.log("encypted data: ", encryptedData.toString("base64"));
}

function getPublicKey() {
  return;
}
