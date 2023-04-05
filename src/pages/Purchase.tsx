import { useUnit } from "effector-react";
import { GlobalStore } from "../store";
import { IAdvert } from "../types/advert";
import { useTelegram } from "../hooks/useTelegram";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Purchase() {
  const { AdvertStore } = GlobalStore();
  const advert: IAdvert[] = useUnit(AdvertStore.store);
  const { tg } = useTelegram();

  useEffect(() => {
    AdvertStore.store;
  }, []);

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
  return;
}
