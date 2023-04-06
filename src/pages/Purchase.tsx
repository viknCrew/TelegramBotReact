import { useNavigate, useParams } from "react-router-dom";
import { GlobalStore } from "../store";
import { useUnit } from "effector-react";
import { IAdvert } from "../types/advert";
import { useTelegram } from "../hooks/useTelegram";
import { useCallback, useEffect } from "react";

export default function Purchase() {
  const params = useParams();
  const { AdvertStore } = GlobalStore();
  const advert: IAdvert[] = useUnit(AdvertStore.store);
  const { tg } = useTelegram();

  useEffect(() => {
    AdvertStore.event(String(params.id));
    tg.BackButton.show();
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
        <div className="w-full py-3 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg sticky top-0">
          <div className="flex gap-3 items-center mx-4 mt-4 mb-2">
            <img
              src={advert[0].image}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-lg font-semibold">
              You buy from {advert[0].nickname}
            </p>
          </div>
          {advert[0].numberAdventer}
        </div>
        <table>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Price for 1 TMY  
                  </td>
                  <td className="whitespace-nowrap px-4 ">{advert[0].price}</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Limits
                  </td>
                  <td className="whitespace-nowrap px-4 ">{advert[0].limits}</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                    Payment method
                  </td>
                  <td className="whitespace-nowrap px-4 ">
                    {advert[0].paymentMethod}
                  </td>
                </tr>
              </table>
      </div>
    </div>
  );
}
