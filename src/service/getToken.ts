import HmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";

export default function checkWebAppSignature(token: string, initData: string) {
  const q = new URLSearchParams(initData);
  // Extract the hash
  const hash = q.get("hash");
  q.delete("hash");
  const v = Array.from(q.entries());
  v.sort(([aN, aV], [bN, bV]) => aN.localeCompare(bN));
  const data_chack_string = v.map(([n, v]) => `${n}=${v}`).join("\n");

  var secret_key = HmacSHA256(token, "WebAppData").toString(Hex);
  var key = HmacSHA256(data_chack_string, secret_key).toString(Hex);

  return key === hash;
}
