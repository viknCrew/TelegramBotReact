import * as React from "react";
import { QRCode } from "react-qrcode-logo";
import { Link } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";

export default function Receive() {
  const coin = require("../assets/Coin.png");
  const { tg } = useTelegram();
  // console.log("tg.bg_color", tg.colorScheme().bg_color);
  // console.log("tg.text_color", tg.colorScheme().text_color);
  console.log("tg.colorScheme()", tg.colorScheme());

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(
        "xc6D3720f6286C5173C94523b8b02d549c9933662"
      );
      tg.showAlert("link copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  return (
    <div className="flex justify-center pt-10 h-[100vh] bg-[--tg-theme-bg-color]">
      <div className="grid grid-cols-1  h-[150px] w-full ">
        <div className="text-xl font-bold  text-center">Receive TMY</div>
        <div className="flex justify-center items-center my-10">
          <QRCode
            value="https://github.com/Nikolinc?tab=repositories"
            logoImage={coin}
            eyeRadius={10}
            logoWidth={50}
            // bgColor={tg.colorScheme().bg_color}
            // fgColor={tg.colorScheme().text_color}
          />
        </div>
        <button
          className="font-normal text-center text-[var(--tg-theme-link-color)] mx-10"
          onClick={() => copyPageUrl()}
        >
          <p>
            xc6D3720f6286C5173C9
            <wbr />
            4523b8b02d549c9933662
          </p>
        </button>
        <p className="font-normal text-center mt-5 ">Your wallet address</p>
        <Link
          to="/"
          className="rounded-t-xl text-sm font-medium bg-[var(--tg-theme-secondary-bg-color)] text-[var(--tg-theme-link-color)] "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
