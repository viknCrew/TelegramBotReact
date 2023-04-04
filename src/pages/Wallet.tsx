import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoaderSkeleton from "../component/loader";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalLoader, GlobalStore } from "../store";
import Copy from "../component/Copy";
import NavigateBar from "../component/NavigateBar";
import TxList from "../component/TxList";

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
            <Copy text={address} width="10px" height="11" />
          </div>
        </div>
        <NavigateBar />
        <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
          <div className="w-[98%]">
            {" "}
            <p className="text-2xl font-bold flex justify-center mt-4] text-[var(--tg-theme-hint-color)]">
              {" "}
              {t("HomePage.History")}{" "}
            </p>
            <div className="h-4 w-[98%] "></div>
            <TxList Tx={trancsationStore}/>
          </div>
        </div>
      </div>
    </div>
  );
}
