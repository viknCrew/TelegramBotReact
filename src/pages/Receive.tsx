import { useUnit } from "effector-react";
import * as React from "react";
import { useCallback, useEffect } from "react";
import { QRCode } from "react-qrcode-logo";
import { Link, useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { web3 } from "../service/getWeb3";
import { GlobalStore } from "../store";

export default function Receive() {
  const coin = require("../assets/Coin.png");
  const { tg } = useTelegram();
  const { AddressStore } = GlobalStore();
  const walet = web3.utils.toChecksumAddress(
    String(useUnit(AddressStore.store))
  );

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(walet);
      tg.showAlert("Address copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  function placeInCenter(str: string, substr: string) {
    let index = (str.length - substr.length) / 2;
    return str.substr(0, index) + substr + str.substr(index + substr.length);
  }
  const navigate = useNavigate();
  const onBack = useCallback(() => {
    navigate("/");
  }, []);

  useEffect(() => {
    tg.BackButton.show();
    AddressStore.event();
  }, []);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  return (
    <div className="flex justify-center pt-10 h-[100vh] bg-[--tg-theme-bg-color]">
      <div className="grid grid-cols-1  h-[150px] w-full ">
        <div className="text-xl font-bold  text-center">Receive TMY</div>
        <div className="flex justify-center items-center my-10">
          {tg.colorScheme === "dark" ? (
            <QRCode
              value={walet}
              logoImage={coin}
              eyeRadius={10}
              logoWidth={50}
              bgColor={tg.backgroundColor}
              fgColor={"#fff"}
            />
          ) : (
            <QRCode
              value={walet}
              logoImage={coin}
              eyeRadius={10}
              logoWidth={50}
              bgColor={tg.backgroundColor}
              fgColor={"#000"}
            />
          )}
        </div>
        <button
          className="font-normal text-center text-[var(--tg-theme-link-color)] mx-10"
          onClick={() => copyPageUrl()}
        >
          <p>{placeInCenter(walet, " ")}</p>
        </button>
        <p className="font-normal text-center mt-5 ">Your wallet address</p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="rounded-xl w-6/12 py-3 mt-10 text-sm font-medium bg-[var(--tg-theme-link-color)] text-center text-[ var(--tg-theme-secondary-bg-color)] "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
