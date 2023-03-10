import { useUnit } from "effector-react";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Params, useNavigate, useParams } from "react-router-dom";
import LoaderTransation from "../component/loaderTransation";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalStore } from "../store";
import { ITransation, statusTransation } from "../types/transaction";

export default function Trancsation() {
  const { id } = useParams();
  const { Transaction, AddressStore } = GlobalStore();

  const wallet = useUnit(AddressStore.store);
  const tran: ITransation = useUnit(Transaction.store);
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onBack = useCallback(() => {
    navigate("/");
  }, []);

  let walet: any;
  let WalletHeader: string;
  let header: string;
  let color: string;
  let value: string;
  let FromTo: string = "";
  let myWallet: string;

  async function copyPageUrl(myWallet: string) {
    try {
      await navigator.clipboard.writeText(FromTo);
      tg.showAlert("Address copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  if (tran.status === statusTransation.send) {
    walet = require("../assets/Send.png");
    header = t("TransactionPage.SendTo");
    color = "#FF3A3A";
    value = `- ${tran.value}`;
    FromTo = tran.to;
    myWallet = tran.from;
    WalletHeader = t("TransactionPage.Recipient");
  } else {
    walet = require("../assets/Receiving.png");
    header = t("TransactionPage.ReceivingFrom");
    color = "#00FCDE";
    value = `+ ${tran.value}`;
    FromTo = tran.from;
    myWallet = tran.to;
    WalletHeader = t("TransactionPage.SenderWallet");
  }

  useEffect(() => {
    tg.BackButton.show();
    AddressStore.event();
  }, []);

  useEffect(() => {
    Transaction.event({ id, wallet });
  }, [wallet]);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  if (useUnit(Transaction.loader)) {
    return <LoaderTransation />;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%]">
        <div className=" h-[180px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg pb-8 w-full ">
          <div className="m-8 text-lg  font-medium leading-4 ">
            <img src={walet} style={{ height: 50 }} />

            <p className="my-4">{header}</p>
            <div className="text-sm font-light items-end text-[var(--tg-theme-hint-color)] ">
              {FromTo}
            </div>
          </div>
        </div>
        <div className="h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg  w-full">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              {t("TransactionPage.NumberOfCoins")}
            </p>
            <p className="my-4">{value}</p>
          </div>
        </div>
        <div className="w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              {t("TransactionPage.DataTime")}
            </p>
            <p className="my-4">{tran.timeStamp}</p>
          </div>
        </div>
        <div className=" w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              {WalletHeader}:
            </p>
            <button
              className="font-normal text-[11.5px]  text-[var(--tg-theme-link-color)] my-4 "
              onClick={() => copyPageUrl(myWallet)}
            >
              {FromTo}
            </button>
          </div>
        </div>
        <div className=" w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              {t("TransactionPage.Commission")}:
            </p>
            <p className="my-4">{tran.gas}</p>
          </div>
        </div>
        <div className=" w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              {" "}
              {t("TransactionPage.NumberBlock")}
            </p>
            <p className="my-4">{tran.blockNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
