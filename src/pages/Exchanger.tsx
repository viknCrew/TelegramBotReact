import { useUnit } from "effector-react";
import { GlobalStore } from "../store";
import { IAdvert } from "../types/advert";
import { useCallback, useEffect } from "react";
import Filter from "../component/Filter";
import { Link, useNavigate } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";

export default function Exchanger() {
  const { AdvertStore } = GlobalStore();
  const advert: IAdvert[] = useUnit(AdvertStore.store);
  const { tg } = useTelegram();

  useEffect(() => {
    tg.BackButton.show();
    AdvertStore.store;
  }, []);

  const navigate = useNavigate();
  const onBack = useCallback(() => {
    navigate("/");
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
        <div className="w-full py-3 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg flex justify-around sticky top-0">
          <div className="flex justify-evenly gap-6">
            <div className="bg-[#8F6DD7] py-1 px-3  rounded-full">RUB</div>
            <div className="bg-[#3947C9] py-1 px-3  rounded-full">TMY</div>
            <div className="bg-[#2D8C0B] py-1 px-3  rounded-full">1200</div>
          </div>
          <Filter />
        </div>
        {advert.map((ad: IAdvert) => {
          return (
            <div className="w-full bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
              <div className="flex gap-3 items-center mx-4 mt-4 mb-2">
                <img
                  src={ad.image}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="text-xl font-bold">{ad.nickname}</p>
              </div>
              <table>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Available
                  </td>
                  <td className="whitespace-nowrap px-4 ">{ad.available}</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Limits
                  </td>
                  <td className="whitespace-nowrap px-4 ">{ad.limits}</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Payment method
                  </td>
                  <td className="whitespace-nowrap px-4 ">
                    {ad.paymentMethod}
                  </td>
                </tr>
              </table>
              <div className="flex gap-2 justify-end mb-3 mt-1 mx-3">
                <button>
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_105)">
                      <path
                        d="M17.9226 15.6154C17.9226 16.0234 17.7605 16.4147 17.472 16.7032C17.1835 16.9918 16.7922 17.1538 16.3842 17.1538H6.38416C5.97614 17.1538 5.58482 16.9918 5.2963 16.7032C5.0078 16.4147 4.8457 16.0234 4.8457 15.6154V2.53846C4.8457 2.13044 5.0078 1.73912 5.2963 1.4506C5.58482 1.16208 5.97614 1 6.38416 1H13.3072L17.9226 5.61538V15.6154Z"
                        stroke="var(--tg-theme-link-color)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21H2.5C2.10218 21 1.72064 20.842 1.43933 20.5607C1.15803 20.2795 1 19.8979 1 19.5001V6"
                        stroke="var(--tg-theme-link-color)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_105">
                        <rect width="19" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <Link
                  className="bg-[var(--tg-theme-link-color)] font-bold text-xl px-6 py-1 rounded-xl"
                  to={`/purchase/${ad.numberAdventer}`}
                >
                  Buy
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
