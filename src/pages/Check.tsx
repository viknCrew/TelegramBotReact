import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tick from "../component/Tick";
import { useTelegram } from "../hooks/useTelegram";

function placeInCenter(str: string, substr: string) {
  let index = (str.length - substr.length) / 2;
  return str.substr(0, index) + substr + str.substr(index + substr.length);
}

export default function Check() {
  const { tg } = useTelegram();
  const wallet = "0xc6D3720f6286C5173C94523b8b02d549c9933662";
  const amount = "999999.2";
  const navigate = useNavigate();
  useEffect(() => {
    tg.MainButton.hide();
  }, []);

  const onBack = useCallback(() => {
    navigate("/");
  }, []);

  useEffect(() => {
    tg.BackButton.show();
  }, []);

  useEffect(() => {
    tg.onEvent("backButtonClicked", onBack);
    return () => {
      tg.offEvent("backButtonClicked", onBack);
    };
  }, [onBack]);

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(wallet);
      tg.showAlert("link copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  return (
    <div className="flex justify-center w-full h-[98vh] rounded-xl">
      <div className="grid grid-cols-1 w-96 ">
        <div className="text-center text-xl font-bold my-8 bg-[var(--tg-theme-bg-color)] flex items-center ">
          <div className="grid col-span-1">
            {" "}
            <div className="">Tokens transferred to the wallet</div>
            <button
              className="font-normal text-center text-[var(--tg-theme-link-color)] mx-10"
              onClick={() => copyPageUrl()}
            >
              <p>{placeInCenter(wallet, " ")}</p>
            </button>
          </div>
        </div>
        <div className="">
          <div
            className="trigger w-full
           flex justify-center  p-6"
          >
            <Tick size={200} />
          </div>
        </div>
        <div className=" flex justify-center w-full bg-[var(--tg-theme-bg-color)] h-24">
          <p className="text-center text-lg font-medium text-[#FF3A3A] border-b-2 border-[var(--tg-theme-text-color)] w-60 h-8 ">
            {`- ${amount} TMY`}
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="rounded-xl my-1 mx-6 text-sm  w-56 h-8 mt-6  font-bold bg-[var(--tg-theme-link-color)] text-center text-[var(--tg-theme-bg-color)] "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
