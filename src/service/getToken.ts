export function transformInitData(initData: any) {
  return Object.fromEntries(new URLSearchParams(initData));
}

export default async function checkWebAppSignature(
  token: string,
  initData: any
) {
  const encoder = new TextEncoder();
  const checkString = Object.keys(initData)
    .filter((key: any) => key !== "hash")
    .map((key: any) => `${key}=${initData[key]}`)
    .sort()
    .join("\n");

  const secretKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode("WebAppData"),
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign"]
  );

  const secret = await crypto.subtle.sign(
    "HMAC",
    secretKey,
    encoder.encode(token)
  );
  const signatureKey = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    signatureKey,
    encoder.encode(checkString)
  );

  const hex = [...new Uint8Array(signature)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  console.log("secretKey:", secretKey);
  console.log("secret:", secret);
  console.log("signatureKey", signatureKey);
  console.log("signature:", signature);
  console.log("original hash:", initData.hash);
  console.log("computed hash:", hex);

  return initData.hash === hex;
}
