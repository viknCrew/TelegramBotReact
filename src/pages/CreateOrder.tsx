import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";
import { DropdownTabel } from "../component/Dropdown";
import { ContentType, IContent, IInputFields } from "../types/content";

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
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: "Post",
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
            {inputFields.map((field) => {
              return (
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    {field.name}
                  </td>
                  <DropdownTabel
                    text={field.dashboard}
                    content={field.content}
                  />
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

const inputFields: IInputFields[] = [
  {
    name: "Cryptocurrency",
    dashboard: "TMY",
    content: [
      {
        name: "TMY",
        type: ContentType.Button,
      },
      {
        name: "USDS",
        type: ContentType.Button,
      },
    ],
  },
  {
    name: "Fiat currency",
    dashboard: "RUB",
    content: [
      {
        name: "RUB",
        type: ContentType.Button,
      },
      {
        name: "USD",
        type: ContentType.Button,
      },
    ],
  },
  {
    name: "Limit",
    dashboard: "Limit",
    content: [
      {
        name: "Limit",
        type: ContentType.Input,
      },
    ],
  },
  {
    name: "Amount",
    dashboard: "Amount",
    content: [
      {
        name: "Amount",
        type: ContentType.Input,
      },
    ],
  },
  {
    name: "Payment method",
    dashboard: "Amount",
    content: [
      {
        name: "СБЕР",
        type: ContentType.Button,
      },
      {
        name: "АЛЬФА БАНК",
        type: ContentType.Button,
      },
      {
        name: "Тиньков",
        type: ContentType.Button,
      },
    ],
  },
];
