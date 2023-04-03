import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LoaderSkeleton from "../component/loader";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalLoader, GlobalStore } from "../store";
import { statusTransation } from "../types/transaction";
import Copy from "../component/Copy";

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
  const currency = useUnit(CurrencyStore.store);

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
          <div className="flex justify-center items-start mt-[15px] font-black text-2xl text-[var(--tg-theme-hint-color)]">
            {t("HomePage.Wallet")}
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
            <p className="font-semibold text-xl"> {balanceWallet} TMY ≈</p>
          </div>
          <p className="text-[var(--tg-theme-hint-color)] text-lg ml-[30px]">
            {currency === "usd"
              ? `$ ${(Prise * balanceWallet).toFixed(4)} USD`
              : `₽ ${(Prise * balanceWallet).toFixed(4)} RUB`}
          </p>
          <div className="text-[var(--tg-theme-hint-color)] font-smail text-xs ml-[30px]">
            <Copy text={address} size="10px" />
          </div>
        </div>
        <NavigateBar />
        <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
          <div className="w-[98%]">
            {" "}
            <p className="text-2xl font-bold flex justify-center mt-2]">
              {" "}
              {t("HomePage.History")}{" "}
            </p>
            <div className="h-4 w-[98%] "></div>
            {trancsationStore.map((tran: any) => {
              let walet: any;
              let header: string;
              let color: string;
              let value: string;
              let FromTo: string;

              if (tran.status === statusTransation.send) {
                walet = require("../assets/Send.svg");
                header = t("HomePage.SendTo");
                color = "#FF3A3A";
                value = `- ${tran.value}`;
                FromTo = tran.to;
              } else {
                walet = require("../assets/Receiving.svg");
                header = t("HomePage.ReceivingFrom");
                color = "#00FCDE";
                value = `+ ${tran.value}`;
                FromTo = tran.from;
              }

              return (
                <Link
                  to={`/trancsation/${tran.Hash}`}
                  className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-2xl w-[98%] h-[100px] grid grid-cols-1 px-4 my-3"
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

function NavigateBar() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-6 grid-cols-2 bg-[var(--tg-theme-bg-color)]">
      <Link
        to={"/send"}
        className=" py-[7px] flex items-center justify-center shadow-lg rounded-md"
      >
        <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
          <div className=" w-[28px] h-[28px] bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center rounded-full">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 5.5C6.74264 5.5 7.75 4.49264 7.75 3.25C7.75 2.00736 6.74264 1 5.5 1C4.25736 1 3.25 2.00736 3.25 3.25C3.25 4.49264 4.25736 5.5 5.5 5.5Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 13H1V12C1 10.8065 1.47411 9.66193 2.31802 8.81802C3.16193 7.97411 4.30653 7.5 5.5 7.5C6.69347 7.5 7.83807 7.97411 8.68198 8.81802C9.52589 9.66193 10 10.8065 10 12V13Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 1C10.0967 1 10.669 1.23705 11.091 1.65901C11.5129 2.08097 11.75 2.65326 11.75 3.25C11.75 3.84674 11.5129 4.41903 11.091 4.84099C10.669 5.26295 10.0967 5.5 9.5 5.5"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0996 7.68994C11.9514 8.01399 12.6848 8.58905 13.2026 9.33903C13.7205 10.089 13.9984 10.9786 13.9996 11.8899V12.9999H12.4996"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mx-auto flex justify-center "> {t("HomePage.Send")}</p>
        </div>
      </Link>
      <Link
        to={"/receive"}
        className="py-[7px] flex items-center justify-center shadow-lg rounded-md"
      >
        <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
          <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8075 9.08169C13.6751 9.08169 15.9997 8.04922 15.9997 6.77559C15.9997 5.50196 13.6751 4.46948 10.8075 4.46948C7.93988 4.46948 5.61523 5.50196 5.61523 6.77559C5.61523 8.04922 7.93988 9.08169 10.8075 9.08169Z"
                stroke="#var(--tg-theme-link-color)3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.61523 6.77551V13.6938C5.61523 14.9622 7.9229 15.9999 10.8075 15.9999C13.6921 15.9999 15.9997 14.9622 15.9997 13.6938V6.77551"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9997 10.2347C15.9997 11.5031 13.6921 12.5408 10.8075 12.5408C7.9229 12.5408 5.61523 11.5031 5.61523 10.2347"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6922 2.16317C9.34392 1.33168 7.77452 0.92954 6.19224 1.01012C3.3192 1.01012 1 2.04787 1 3.31623C1 3.99653 1.66922 4.60764 2.73075 5.0458"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.73075 11.9641C1.66922 11.5259 1 10.9148 1 10.2345V3.31616"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.73075 8.50497C1.66922 8.06681 1 7.45569 1 6.77539"
                stroke="#var(--tg-theme-link-color)"
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
      <Link
        to={"/exchanger"}
        className="py-[7px] flex items-center justify-center shadow-lg rounded-md"
      >
        <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
          <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5385 1H4.46154C2.54978 1 1 2.54978 1 4.46154V12.5385C1 14.4502 2.54978 16 4.46154 16H12.5385C14.4502 16 16 14.4502 16 12.5385V4.46154C16 2.54978 14.4502 1 12.5385 1Z"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.03906 9.65422L10.2314 4.46191H6.19291"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9618 7.3457L6.76953 12.538H10.808"
                stroke="#var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mx-auto flex justify-center"> Exchanger</p>
        </div>
      </Link>
    </div>
  );
}
