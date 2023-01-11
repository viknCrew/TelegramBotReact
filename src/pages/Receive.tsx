import * as React from "react";
import { QRCode } from "react-qrcode-logo";

export default function Receive() {
  const coin = require("../assets/Coin.png");

  return (
    <div className="flex justify-center pt-10 h-[100vh] bg-[#343434]">
      <div className="grid grid-cols-1  h-[150px] w-full ">
        <div className="text-xl font-bold  text-center">Receive TMY</div>
        <div className="flex justify-center items-center my-10">
          <QRCode
            value="https://github.com/Nikolinc?tab=repositories"
            logoImage={coin}
            eyeRadius={10}
            logoWidth={50}
            bgColor="#333"
            fgColor="#fff"
          />
        </div>
        <button
          className="font-normal text-center text-[var(--tg-theme-link-color)] mx-10"
          onClick={() =>
            navigator.clipboard.writeText(
              "xc6D3720f6286C5173C94523b8b02d549c9933662"
            )
          }
        >
          <p>
            xc6D3720f6286C5173C9
            <wbr />
            4523b8b02d549c9933662
          </p>
        </button>
        <p className="font-normal text-center mt-5 ">Your wallet address</p>
      </div>
    </div>
  );
}
