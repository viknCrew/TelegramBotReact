import { useUnit } from "effector-react";
import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { $Tran, TranEffect, TranEvent } from "../store/tramsayionStore";
import { ITransation, statusTransation } from "../types/transaction";

export default function Trancsation() {
  const params = useParams();
  const tran: ITransation = useUnit($Tran);

  const { tg } = useTelegram();

  useEffect(() => {
    TranEffect(params.id);
  }, []);

  async function copyPageUrl(myWallet: string) {
    try {
      await navigator.clipboard.writeText(FromTo);
      tg.showAlert("link copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  let walet: any;
  let WalletHeader: string;
  let header: string;
  let color: string;
  let value: string;
  let FromTo: string = "";
  let myWallet: string;

  if (tran.status === statusTransation.send) {
    walet = require("../assets/Send.png");
    header = "Receiving from wallet: ";
    color = "#FF3A3A";
    value = `- ${tran.value}`;
    FromTo = tran.to;
    myWallet = tran.from;
    WalletHeader = "Recipient's wallet";
  } else {
    walet = require("../assets/Receiving.png");
    header = "Receiving from: ";
    color = "#00FCDE";
    value = `+ ${tran.value}`;
    FromTo = tran.from;
    myWallet = tran.to;
    WalletHeader = "Sender Wallet";
  }
  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%]">
        <div className=" h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg  w-full ">
          <div className="m-8 text-lg font-medium leading-4">
            <img src={walet} style={{ height: 50 }} />
            <p className="my-4">{header}</p>
          </div>
        </div>
        <div className="h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg  w-full">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              Number of coins received:
            </p>
            <p className="my-4">{value}</p>
          </div>
        </div>
        <div className="w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">
              Data and time::
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
            <p className="text-[#D7D7D7] text-sm font-normal">Commission:</p>
            <p className="my-4">{tran.gas}</p>
          </div>
        </div>
        <div className=" w-full h-[130px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="m-8 text-lg font-medium leading-4">
            <p className="text-[#D7D7D7] text-sm font-normal">Number block:</p>
            <p className="my-4">{tran.blockNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
