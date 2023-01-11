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
        <div className="w-[90%] mt-4">
          <span className="flex gap-7 text-sm  text-[var(--tg-theme-link-color)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              className="fill-[var(--tg-theme-link-color)]"
            >
              <path d="M5 13.896q1.125-.771 2.385-1.136 1.261-.364 2.615-.364 1.375 0 2.646.375T15 13.896q.688-.854 1.021-1.834.333-.979.333-2.062 0-2.625-1.864-4.49Q12.625 3.646 10 3.646q-2.646 0-4.5 1.864Q3.646 7.375 3.646 10q0 1.062.323 2.042.323.979 1.031 1.854Zm5-2.292q-1.292 0-2.198-.896-.906-.896-.906-2.187 0-1.292.906-2.188.906-.895 2.198-.895 1.292 0 2.198.895.906.896.906 2.188 0 1.291-.906 2.187-.906.896-2.198.896Zm0 6.792q-1.729 0-3.26-.656-1.532-.657-2.678-1.802-1.145-1.146-1.802-2.678-.656-1.531-.656-3.281 0-1.729.656-3.25.657-1.521 1.802-2.666Q5.208 2.917 6.74 2.26q1.531-.656 3.281-.656 1.729 0 3.25.656 1.521.657 2.667 1.803 1.145 1.145 1.802 2.677.656 1.531.656 3.26 0 1.729-.656 3.26-.657 1.532-1.802 2.678-1.146 1.145-2.678 1.802-1.531.656-3.26.656Zm0-2.042q1.021 0 1.948-.312.927-.313 1.802-.938-.917-.521-1.812-.781-.896-.261-1.938-.261-1.042 0-1.948.25-.906.25-1.802.792.875.625 1.802.938.927.312 1.948.312Zm0-6.416q.583 0 .99-.417.406-.417.406-1t-.406-1q-.407-.417-.99-.417t-.99.417q-.406.417-.406 1t.406 1q.407.417.99.417Zm0-1.417Zm.021 6.583Z" />
            </svg>
            <p>Select contact in Telegram</p>
          </span>
        </div>
      </div>
    </div>
  );
}
