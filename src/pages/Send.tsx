import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalStore } from "../store";

export default function Send() {
  const { tg } = useTelegram();
  const { translationAddress } = GlobalStore();
  const [text, setText] = useState<string>("");

  const navigate = useNavigate();
  const onSendData = useCallback(() => {
    navigate("/remittance/" + text);
  }, []);

  const onBack = useCallback(() => {
    navigate("/");
  }, []);

  useEffect(() => {
    translationAddress.event(text);
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: "Transfer tokens",
    });
  }, []);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    if (!text) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [text]);

  return (
    <div className="flex justify-center mt-10">
      <div className="mx-12 grid  grid-cols-1  w-[90%]">
        <div className="relative">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Wallet address{" "}
          </label>

          <input
            type="text"
            id="UserEmail"
            placeholder="Wallet address"
            className="w-full rounded-md bg-[var(--tg-theme-bg-color)] border-b-[var(--tg-theme-link-color)] pr-10 shadow-sm sm:text-sm z-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="absolute inset-y-0 right-7 grid w-10 place-content-center cursor-pointer z-[60] ">
            <a
              className="flex gap-3 text-[var(--tg-theme-link-color)] "
              onClick={() => {
                tg.showScanQrPopup({ text: "Scan QR" }, (result: any) => {
                  if (result) {
                    tg.closeScanQrPopup();
                    setText(result);
                  }
                });
              }}
            >
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
