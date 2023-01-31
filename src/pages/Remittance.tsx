import React, { useEffect, useState } from "react";

export default function Send() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit: number = 6;
    const value: string = e.target.value.replace(/\D/g, "");
    setText(value.slice(0, limit));
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="mx-12 grid  grid-cols-1  w-[90%]">
        <div>
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
              type="text"
              maxLength={6}
              name="price"
              id="price"
              className="w-full border-none focus:border-none text-3xl bg-[var(--tg-theme-secondary-bg-color)] pr-12 sm:text-sm pl-12 text-[var(--tg-theme-button-color)] flex flex-grow-1s"
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
        <div className="w-[90%] mt-4 ">
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
