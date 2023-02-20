import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LoaderSkeleton from "../component/loader";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalLoader, GlobalStore } from "../store";
import { statusTransation } from "../types/transaction";

export default function Wallet() {
  const { t, i18n } = useTranslation();
  const { tg } = useTelegram();
  const {
    balance,
    TransationList,
    AddressStore,
    PriseStore,
    languageStore,
    CurrencyStore,
  } = GlobalStore();

  const trancsationStore = useUnit(TransationList.store);
  const balanceWallet = useUnit(balance.store);
  const address: string = String(useUnit(AddressStore.store));
  const Prise = Number(useUnit(PriseStore.store));
  const language: string = String(useUnit(languageStore.store));
  const currency: string = String(useUnit(CurrencyStore.store));

  const lCurrency = useUnit(CurrencyStore.loader);
  const lBalance = useUnit(balance.loader);
  const lPrise = useUnit(PriseStore.loader);
  const lTransationList = useUnit(TransationList.loader);
  const lAddress = useUnit(AddressStore.loader);

  useEffect(() => {
    tg.BackButton.hide();
    tg.expand(true);
    tg.MainButton.hide();

    languageStore.event(tg.initDataUnsafe.user.id);
    CurrencyStore.event(tg.initDataUnsafe.user.id);
    AddressStore.event();
    balance.event(address);
    TransationList.event(address);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (currency === "usd") {
      PriseStore.event(0);
    } else {
      PriseStore.event(1);
    }
  }, [currency]);

  useEffect(() => {
    balance.event(address);
    TransationList.event(address);
  }, [address]);

  if (GlobalLoader([lBalance, lTransationList, lAddress, lPrise, lCurrency])) {
    return (
      <div className="flex justify-center w-full">
        <LoaderSkeleton />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="Wallet w-full h-[150px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start mt-[15px] font-black text-2xl">
            {t("HomePage.Wallet")}
          </div>
          <div className="text-[var(--tg-theme-hint-color)] font-smail text-xs ml-[30px]">
            {address}
          </div>
          <div className="flex items-center ml-[30px]">
            <div className="w-[25px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 2.19066H9.01999V6.46787L10.02 7.07823L10.998 6.46787V2.19066H11ZM0 0V2.19066H20V0H0Z"
                  fill="var(--tg-theme-text-color)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 8.94026L18.186 3.78062H20V20H18.186V6.32377L10 11.4834L1.876 6.32377V20H0V3.78062H1.824L10 8.94026Z"
                  fill="var(--tg-theme-text-color)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0121 14.1091L16.6641 9.83428L16.6781 12.368L11.0061 16.0112V19.9998H9.02813V16.0183L3.32013 12.3514L3.33613 9.82009L10.0121 14.1091Z"
                  fill="var(--tg-theme-text-color)"
                />
              </svg>
            </div>
            <p className="font-medium text-lg"> {balanceWallet} TMY ≈</p>
          </div>
          <p className="text-[var(--tg-theme-hint-color)] text-sm ml-[30px]">
            {currency === "usd"
              ? `$ ${Prise * balanceWallet} USD`
              : `₽ ${Prise * balanceWallet} RUB`}
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2">
          <Link
            to={"/send"}
            className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md"
          >
            <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
              <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center">
                <svg
                  className="fill-[var(--tg-theme-bg-color)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M4.5 12L4.5 1"
                    stroke="var(--tg-theme-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.46153 3.96154L4.49999 1L1.53845 3.96154"
                    stroke="var(--tg-theme-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="mx-auto flex justify-cent er">
                {" "}
                {t("HomePage.Send")}
              </p>
            </div>
          </Link>
          <Link
            to={"/receive"}
            className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md"
          >
            <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
              <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center">
                <svg
                  className="fill-[var(--tg-theme-bg-color)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M4.5 1L4.5 12"
                    stroke="var(--tg-theme-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.53847 9.03846L4.50001 12L7.46155 9.03846"
                    stroke="var(--tg-theme-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="mx-auto flex justify-center">
                {" "}
                {t("HomePage.Receive")}
              </p>
            </div>
          </Link>
        </div>
        <p className="text-2xl font-bold flex justify-center mt-2]">
          {" "}
          {t("HomePage.History")}{" "}
        </p>
        <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
          <div className=" gap-3 grid grid-cols-1">
            <div className="h-4 w-[98%]"></div>
            {trancsationStore.map((tran: any) => {
              let walet: any;
              let header: string;
              let color: string;
              let value: string;
              let FromTo: string;

              if (tran.status === statusTransation.send) {
                walet = require("../assets/Send.png");
                header = t("HomePage.SendTo");
                color = "#FF3A3A";
                value = `- ${tran.value}`;
                FromTo = tran.to;
              } else {
                walet = require("../assets/Receiving.png");
                header = t("HomePage.ReceivingFrom");
                color = "#00FCDE";
                value = `+ ${tran.value}`;
                FromTo = tran.from;
              }

              return (
                <Link
                  to={`/trancsation/${tran.Hash}`}
                  className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-2xl w-[98%] h-[100px] grid grid-cols-1 px-4"
                >
                  <div className="flex">
                    <img src={walet} style={{ height: 30 }} className="m-4" />
                    <div>
                      <p className="text-lg ">{header}</p>
                      <p className="text-[10px] text-[var(--tg-theme-hint-color)] font-thin">
                        {FromTo}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[10px] text-[var(--tg-theme-hint-color)] font-thin">
                      {tran.timeStamp}
                    </p>
                    <p className={`text-[${color}] items-start`}>
                      {" "}
                      {value} TMY{" "}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
