import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalStore } from "../store";
import { statusTransation } from "../types/transaction";

export default function Wallet() {
  const { tg } = useTelegram();
  const WalletID = "0x0786e7225fE1aaf37e1a5359544CBC8755E1c6aB";
  const logo = require("../assets/LOGO.png");
  const { balance, TransationList, publicKey, privateKey } = GlobalStore();
  const trancsationStore = useUnit(TransationList.store);
  const balanceWallet = useUnit(balance.store);
  const publicKeyStore = useUnit(publicKey.store);
  const privateKeyStore = useUnit(privateKey.store);
  console.log("privateKeyStore", privateKeyStore);
  console.log("publicKeyStore", publicKeyStore);

  useEffect(() => {
    tg.BackButton.hide();
    balance.event();
    TransationList.event(WalletID);
    publicKey.event();
    // @ts-ignore
    privateKey.event(publicKeyStore);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="Wallet w-full h-[150px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start mt-[15px] font-black text-2xl">
            Wallet
          </div>
          <div className="text-[var(--tg-theme-hint-color)] font-smail text-xs ml-[30px]">
            xc6D3720f6286C5173C94523b8b02d549c9933662
          </div>
          <div className="flex items-center ml-[30px]">
            <img src={logo} className="w-[25px]" />
            <p className="font-medium text-lg"> {balanceWallet} TMY ≈</p>
          </div>
          <p className="text-[var(--tg-theme-hint-color)] text-sm ml-[30px]">
            $ 30.3202 USDT
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
              <p className="mx-auto flex justify-cent er"> Send</p>
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
              <p className="mx-auto flex justify-center"> Receive</p>
            </div>
          </Link>
        </div>
        <p className="text-2xl font-bold flex justify-center mt-2]"> History</p>
        <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
          <div className=" gap-3 grid grid-cols-1">
            {trancsationStore.map((tran: any) => {
              let walet: any;
              let header: string;
              let color: string;
              let value: string;
              let FromTo: string;

              if (tran.status === statusTransation.send) {
                walet = require("../assets/Send.png");
                header = "Send to: ";
                color = "#FF3A3A";
                value = `- ${tran.value}`;
                FromTo = tran.to;
              } else {
                walet = require("../assets/Receiving.png");
                header = "Receiving from: ";
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
