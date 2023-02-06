import { useUnit } from "effector-react";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalStore } from "../store";
import Check from "./Check";

export default function Send() {
  const coin = require("../assets/Coin.png");

  const navigate = useNavigate();

  const params = useParams();
  const { tg } = useTelegram();
  const { balance, Modal } = GlobalStore();

  const balanceWallet = useUnit(balance.store);
  const address: string = String(params.address);
  const CallModal = useUnit(Modal.store);

  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit: number = 6;
    const value: string = e.target.value.replace(/\D/g, "");
    setText(value.slice(0, limit));
  };

  const onSendData = useCallback(() => {
    Modal.event(true);
  }, []);
  const onBack = useCallback(() => {
    navigate("/send");
  }, []);

  useEffect(() => {
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: "Send",
    });
  }, []);

  useEffect(() => {
    balance.event(address);
  }, []);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  useEffect(() => {
    if (!text) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [text]);

  useEffect(() => {
    if (Number(text) > Number(balanceWallet)) {
      tg.MainButton.setParams({ is_active: false });
    } else {
      tg.MainButton.setParams({ is_active: true });
    }
  }, [text]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  return (
    <>
      <div className="absolute left-[40%] right-[40%] z-[100]">
        {CallModal && (
          <Check
            address={address}
            transaction="0x5b4d1cb6a0a18a344c61b5521bb4ee1a24d95b7290456d6bf6dd6c2f45500f9c"
            amount={Number(text)}
          />
        )}
      </div>
      <div className="flex justify-center mt-10 h-[90vh]">
        <div className="mx-12 grid  grid-cols-1  w-[90%]">
          <div className="">
            <div className="text-[var(--tg-theme-hint-color)] flex items-center  font-smail text-xs ml-[30px]">
              {`Transfer to address ${address}`}
            </div>
            <div className="flex items-center">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6509 2.51923H10.3737V7.43797L11.5238 8.13987L12.6486 7.43797V2.51923H12.6509ZM0 0V2.51923H23.0016V0H0Z"
                        fill="url(#paint0_linear_376_868)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5008 10.2812L20.9154 4.34766H23.0016V22.9997H20.9154V7.27224L11.5008 13.2058L2.15755 7.27224V22.9997H0V4.34766H2.09775L11.5008 10.2812Z"
                        fill="url(#paint1_linear_376_868)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5147 16.2253L19.165 11.3093L19.1811 14.223L12.6579 18.4126V22.9995H10.383V18.4208L3.81836 14.204L3.83676 11.293L11.5147 16.2253Z"
                        fill="url(#paint2_linear_376_868)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_376_868"
                          x1="-750.773"
                          y1="473.415"
                          x2="1325.98"
                          y2="2191.78"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.98"
                            stop-color="var(--tg-theme-button-color)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_376_868"
                          x1="-750.773"
                          y1="1089.15"
                          x2="2344.24"
                          y2="2206.74"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.98"
                            stop-color="var(--tg-theme-button-color)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_376_868"
                          x1="-497.622"
                          y1="692.144"
                          x2="1538.43"
                          y2="1474.53"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.98"
                            stop-color="var(--tg-theme-button-color)"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <input
                  type="number"
                  maxLength={6}
                  name="price"
                  id="price"
                  className={`w-full border-none focus:border-none text-3xl bg-[var(--tg-theme-secondary-bg-color)] pr-12 sm:text-sm pl-12 ${
                    tg.MainButton.isActive
                      ? "text-[var(--tg-theme-button-color)]"
                      : "text-[#FF3A3A]"
                  }  flex flex-grow-1s`}
                  placeholder="0.00"
                  value={text}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div
                    id="currency"
                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 sm:text-sm flex items-center text-[var(--tg-theme-button-color)]"
                  >
                    TMY
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <img src={coin} alt="coin" className="w-[25px]" />
            <p className="font-medium text-lg ml-9">
              {" "}
              {`${balanceWallet} TMY`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
