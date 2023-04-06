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
        <div className="w-full py-3 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg flex justify-around sticky top-0">
          <div className="flex gap-3 items-center mx-4 mt-4 mb-2">
            <img
              src={advert[0].image}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-xl font-bold">
              You buy from {advert[0].nickname}
            </p>
          </div>
          {advert[0].numberAdventer}
        </div>
      </div>
    </div>
  );
}
