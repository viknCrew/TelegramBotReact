import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import { balance, Web3, web3 } from "../store/coinStore";

export default function Send() {
  return (
    <div className="flex justify-center mt-10">
      <div className="mx-12 grid  grid-cols-1  w-[90%]">
        <div className="relative">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Wallet Address{" "}
          </label>

          <input
            type="text"
            id="UserEmail"
            placeholder="flea@rhcp.com"
            className="w-full rounded-md bg-[var(--tg-theme-bg-color)] border-b-[var(--tg-theme-link-color)] pr-10 shadow-sm sm:text-sm"
          />
          <div className="pointer-events-none absolute inset-y-0 right-7 grid w-10 place-content-center ">
            <button className="flex gap-3 text-[var(--tg-theme-link-color)]">
              Insert
              <svg
                className="fill-[var(--tg-theme-link-color)]"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="mdi-qrcode-scan"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[90%] mx-12 ">
          <span className="flex justify-around text-[var(--tg-theme-link-color)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              className="fill-[var(--tg-theme-link-color)]"
            >
              <path d="M11.1 35.25q3.15-2.2 6.25-3.375Q20.45 30.7 24 30.7q3.55 0 6.675 1.175t6.275 3.375q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.775t4.3-6.35q2.725-2.725 6.375-4.3Q19.9 4 24 4q4.15 0 7.775 1.575t6.35 4.3q2.725 2.725 4.3 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.3 6.375-2.725 2.725-6.35 4.3Q28.15 44 24 44Zm0-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75-2.65-.95-5.35-.95-2.7 0-5.35.95-2.65.95-5.2 2.75 2.55 2 5.175 2.8Q21.25 41 24 41Zm0-18.5q1.7 0 2.775-1.075t1.075-2.775q0-1.7-1.075-2.775T24 14.8q-1.7 0-2.775 1.075T20.15 18.65q0 1.7 1.075 2.775T24 22.5Zm0-3.85Zm0 18.7Z" />
            </svg>
            <p>Select contact in Telegram</p>
          </span>
        </div>
      </div>
    </div>
  );
}
