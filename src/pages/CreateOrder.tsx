import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";

export default function CreateOrder() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const onBack = useCallback(() => {
    navigate("/");
  }, []);

  const onSendData = useCallback(async () => {
    navigate("/createorder");
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
  }, [onSendData, tg]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start font-black text-2xl text-[var(--tg-theme-hint-color)]">
            Create
          </div>
        </div>
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <fieldset className="grid grid-cols-1 gap-3 mx-24">
            <legend className="sr-only">Color</legend>

            <div>
              <input
                type="radio"
                name="ColorOption"
                value="ColorBlack"
                id="ColorBlack"
                className="peer hidden"
                checked
              />

              <label
                htmlFor="ColorBlack"
                className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white dark:border-gray-800 dark:text-white dark:hover:border-gray-700"
              >
                <p className="text-2xl font-bold">Buy</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="ColorOption"
                value="ColorRed"
                id="ColorRed"
                className="peer hidden"
              />

              <label
                htmlFor="ColorRed"
                className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white dark:border-gray-800 dark:text-white dark:hover:border-gray-700"
              >
                <p className="text-2xl font-bold">Sell</p>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-[var(--tg-theme-secondary-bg-color)] text-sm">
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Cryptocurrency
              </td>
              <td className="whitespace-nowrap px-4 flex gap-2">
                TMY{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.62297 6.01666L2.75109 4.90833L9.53963 11.6969L16.3282 4.90833L17.4563 6.01666L9.53963 13.9333L1.62297 6.01666Z"
                    fill="white"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Fiat currency
              </td>
              <td className="whitespace-nowrap px-4 flex gap-2">
                RUB{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.62297 6.01666L2.75109 4.90833L9.53963 11.6969L16.3282 4.90833L17.4563 6.01666L9.53963 13.9333L1.62297 6.01666Z"
                    fill="white"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Limit
              </td>
              <td className="whitespace-nowrap px-4 flex gap-2">
                12,323{" "}
                <svg
                 width="10"
                 height="10"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.62297 6.01666L2.75109 4.90833L9.53963 11.6969L16.3282 4.90833L17.4563 6.01666L9.53963 13.9333L1.62297 6.01666Z"
                    fill="white"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)] ">
                Amount
              </td>
              <td className="whitespace-nowrap px-4 flex gap-2">
                103{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.62297 6.01666L2.75109 4.90833L9.53963 11.6969L16.3282 4.90833L17.4563 6.01666L9.53963 13.9333L1.62297 6.01666Z"
                    fill="white"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Payment method
              </td>
              <td className="whitespace-nowrap px-4 flex gap-2">
                {" "}
                ADD{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.62297 6.01666L2.75109 4.90833L9.53963 11.6969L16.3282 4.90833L17.4563 6.01666L9.53963 13.9333L1.62297 6.01666Z"
                    fill="white"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
