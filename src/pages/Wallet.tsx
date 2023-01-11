import React from "react";
import { Link } from "react-router-dom";

function Wallet() {
  const logo = require("../assets/LOGO.png");
  const metaMask = require("../assets/MetaMask_Fox.png");

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="Wallet w-full h-[150px] bg-[var(--tg-theme-secondary-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start mt-[15px] font-black text-2xl">
            Wallet
          </div>
          <div className="text-[var(--tg-theme-hint-color)] font-smail text-xs ml-[30px]">
            xc6D3720f6286C5173C94523b8b02d549c9933662
          </div>
          <div className="flex items-center ml-[30px]">
            <img src={logo} className="w-[25px]" />
            <p className="font-medium text-lg">20.4570015 TMY ≈</p>
          </div>
          <p className="text-[var(--tg-theme-hint-color)] text-sm ml-[30px]">$ 30.3202 USDT</p>
        </div>
        <div className="grid gap-6 grid-cols-2">
          <Link
            to={"/send"}
            className="bg-[var(--tg-theme-secondary-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md"
          >
            <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
              <div className="mx-auto w-[48px] h-[48px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center">
                <svg
                  className="fill-[var(--tg-theme-secondary-bg-color)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M4.5 12L4.5 1"
                    stroke="var(--tg-theme-secondary-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.46153 3.96154L4.49999 1L1.53845 3.96154"
                    stroke="var(--tg-theme-secondary-bg-color)"
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
            className="bg-[var(--tg-theme-secondary-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md"
          >
            <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
              <div className="mx-auto w-[48px] h-[48px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center">
                <svg
                  className="fill-[var(--tg-theme-secondary-bg-color)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M4.5 1L4.5 12"
                    stroke="var(--tg-theme-secondary-bg-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.53847 9.03846L4.50001 12L7.46155 9.03846"
                    stroke="var(--tg-theme-secondary-bg-color)"
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
        <div className="bg-[var(--tg-theme-secondary-bg-color)] rounded-xl shadow-lg w-full h-[400px] grid grid-cols-1">
          <p className="text-2xl font-bold flex justify-center mt-2]">
            {" "}
            History
          </p>
          <div className="bg-[var(--tg-theme-secondary-bg-color)] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4">
            <div className="flex">
              <img src={metaMask} />
              <div>
                <p className="text-lg ">Replenishment via metamask</p>
                <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                  xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                December 31 at 18:43
              </p>
              <p className="text-[#00FCDE] items-start"> + 20.4570015 TMY </p>
            </div>
          </div>
          <div className="bg-var(--tg-theme-secondary-bg-color)] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4">
            <div className="flex">
              <img src={metaMask} />
              <div>
                <p className="text-lg ">Replenishment via metamask</p>
                <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                  xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                December 31 at 18:43
              </p>
              <p className="text-[#00FCDE] items-start"> + 20.4570015 TMY </p>
            </div>
          </div>
          <div className="bg-[var(--tg-theme-secondary-bg-color)] rounded-xl shadow-2xl w-full h-[100px] grid grid-cols-1 px-4">
            <div className="flex">
              <img src={metaMask} />
              <div>
                <p className="text-lg ">Replenishment via metamask</p>
                <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                  xbc5EFF393893a0AFDd0e7b89FA0DD2DC7d913423
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-[var(--tg-theme-hint-color)] font-thin">
                December 31 at 18:43
              </p>
              <p className="text-[#00FCDE] items-start"> + 20.4570015 TMY </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
