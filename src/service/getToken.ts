import HmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";

export default async function checkWebAppSignature(
  token: string,
  initData: string
) {
  const checkString = Object.keys(initData)
    .filter((key: any) => key !== "hash")
    .map((key: any) => `${key}=${initData[key]}`)
    .sort()
    .join("\n");

  console.log("computed string:", checkString);

  const q = new URLSearchParams(initData);
  // Extract the hash
  const hash = q.get("hash");
  q.delete("hash");
  const v = Array.from(q.entries());
  v.sort(([aN, aV], [bN, bV]) => aN.localeCompare(bN));
  const data_chack_string = v.map(([n, v]) => `${n}=${v}`).join("\n");

  var secret_key = HmacSHA256(token, "WebAppData").toString(Hex);
  var key = HmacSHA256(data_chack_string, secret_key).toString(Hex);
  console.log("secret_key", secret_key);
  console.log("key", key);

  return key === hash;
}
