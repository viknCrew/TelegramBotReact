import { useNavigate, useParams } from "react-router-dom";
import { GlobalStore } from "../store";
import { useUnit } from "effector-react";
import { IAdvert } from "../types/advert";
import { useTelegram } from "../hooks/useTelegram";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Purchase() {
  const params = useParams();
  const { AdvertStore, balance, AddressStore } = GlobalStore();

  const advert: IAdvert[] = useUnit(AdvertStore.store);
  const balanceWallet = useUnit(balance.store);
  const addressStore: string = String(AddressStore.store);

  const { tg } = useTelegram();
  const [text, setText] = useState<string>("");
  const searchInput: React.MutableRefObject<any> = useRef<any>();

  useEffect(() => {
    AddressStore.event();
    AdvertStore.event(String(params.id));
    tg.BackButton.show();
  }, []);

  useEffect(() => {
    balance.event(addressStore);
  }, [addressStore]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit: number = 6;
    setText(e.target.value.slice(0, limit));
  };
  const navigate = useNavigate();
  const onBack = useCallback(() => {
    navigate("/exchanger");
  }, []);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="w-full py-3 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg sticky top-0">
          <div className="flex gap-3 items-center mx-4 mt-4 mb-1">
            <img
              src={advert[0].image}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-lg font-semibold">
              You buy from {advert[0].nickname}
            </p>
          </div>
          <div className="flex gap-3 items-center mx-4 mt-1 mb-2">
            {" "}
            {advert[0].numberAdventer}
          </div>
        </div>
        <div className="w-full bg-[var(--tg-theme-bg-color)] py-3 rounded-xl shadow-lg sticky top-0  mx-4">
          <div className="flex items-center">
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-3xl">
                ₽
              </div>
              <input
                type="number"
                ref={searchInput}
                maxLength={6}
                name="price"
                id="price"
                className={`w-full border-none bg-[var(--tg-theme-bg-color)] focus:border-none text-3xl  pr-12 sm:text-sm pl-12 ${
                  tg.MainButton.isActive
                    ? "text-[var(--tg-theme-button-color)]"
                    : "text-[#FF3A3A]"
                }  flex flex-grow-1s`}
                placeholder="0.00"
                value={text}
                onChange={handleChange}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div
                  id="currency"
                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-3xl sm:text-sm flex items-center text-[var(--tg-theme-button-color)]"
                >
                  RUB
                </div>
              </div>
            </div>
          </div>
          <div className="w-full font-bold ">MIN {advert[0].limits} TMY</div>
        </div>
        <div className="w-full py-3 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg sticky top-0">
          <table>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Balance
              </td>
              <td className="whitespace-nowrap px-4 ">
                {" "}
                {`${balanceWallet} TMY`}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Payment method
              </td>
              <td className="whitespace-nowrap px-4 text-[var(--tg-theme-link-color)] ">
                ADD
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Details
              </td>
              <td className="whitespace-nowrap px-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                  fill="var(--tg-theme-text-color)"
                >
                  <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
