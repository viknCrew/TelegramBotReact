import * as React from "react";
import { QRCode } from "react-qrcode-logo";

export default function Receive() {
  const coin = require("../assets/Coin.png");

  return (
    <div className="flex justify-center items-center w-[90%]">
      <div className="grid grid-cols-1  h-[150px] w-full ">
        <div className="text-xl font-bold  text-center">Receive TMY</div>
        <div className="flex justify-center items-center my-10">
          <QRCode
            value="https://github.com/Nikolinc?tab=repositories"
            logoImage={coin}
            eyeRadius={10}
            logoWidth={50}
            bgColor="var(--tg-theme-secondary-bg-color)"
            fgColor="var(--tg-theme-text-color)"
          />
        </div>
        <p
          className="text-lg font-normal text-center text-[var(--tg-theme-link-color)]"
          onClick={() =>
            navigator.clipboard.writeText(
              " xc6D3720f6286C5173C94523b8b02d549c9933662"
            )
          }
        >
          xc6D3720f6286C5173C94523b8b02d549c9933662
        </p>
        <p className="text-lg font-normal text-center text-[var(--tg-theme-hint-color)]">
          Your wallet address
        </p>
      </div>
    </div>
  );
}
