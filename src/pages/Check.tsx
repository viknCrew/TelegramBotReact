import axios from "axios";
import { useUnit } from "effector-react";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import LoaderCheck from "../component/loaderCheck";
import Tick from "../component/Tick";
import { useTelegram } from "../hooks/useTelegram";
import { GlobalStore } from "../store";

function placeInCenter(str: string, substr: string) {
  let index = (str.length - substr.length) / 2;
  return str.substr(0, index) + substr + str.substr(index + substr.length);
}

interface IProps {
  address: string;
  amount: number;
}

export default function Check(props: IProps) {
  const navigate = useNavigate();

  const { tg } = useTelegram();
  const { t } = useTranslation();
  const { AddressStore, Modal, Transfer } = GlobalStore();
  const wallet: string = String(useUnit(AddressStore.store));
  const transaction: string = String(useUnit(Transfer.store));
  const loader = useUnit(Transfer.loader);
  const data = JSON.stringify(tg.initData);
  const id = tg.initDataUnsafe.user.id;

  const dataTransaction = {
    senderId: id,
    address: props.address,
    amount: Number(props.amount),
    data: data,
  };

  useEffect(() => {
    tg.BackButton.hide();
    tg.MainButton.hide();
    AddressStore.event();
    Transfer.event(dataTransaction);
  }, []);

  async function copyAddressTrans() {
    try {
      await navigator.clipboard.writeText(props.address);
      tg.showAlert("Address copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  async function copyTransaction() {
    try {
      await navigator.clipboard.writeText(transaction);
      tg.showAlert("Address copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  async function copyMyWallet() {
    try {
      await navigator.clipboard.writeText(wallet);
      tg.showAlert("Address copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }
  async function closeModal() {
    Modal.event(false);
    navigate("/");
  }

  if (loader) {
    return <LoaderCheck />;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="flex justify-center w-full h-[85vh] rounded-xl">
        <div className="grid grid-cols-1 w-80 mt-16 bg-[var(--tg-theme-bg-color)] rounded-xl  shadow-lg">
          <div className=" flex justify-center">
            <div
              className="trigger w-full
           flex justify-center ml-2 top-[-12px] ]"
            >
              <Tick size={50} />
            </div>
          </div>
          <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex items-center  shadow-lg rounded-lg ">
            <div className="grid col-span-1">
              {" "}
              <div className="">{t("Check.Sender")}</div>
              <button
                className="font-normal text-center text-xs text-[var(--tg-theme-link-color)] mx-10"
                onClick={() => copyMyWallet()}
              >
                <p>{placeInCenter(wallet, " ")}</p>
              </button>
            </div>
          </div>
          <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex items-center justify-center shadow-lg rounded-lg ">
            <div className="grid col-span-1 gap-2">
              {" "}
              <div className="">{t("Check.TokensTransferred")}</div>
              <button
                className="font-normal text-xs text-center text-[var(--tg-theme-link-color)] mx-10"
                onClick={() => copyAddressTrans()}
              >
                <p>{placeInCenter(props.address, " ")}</p>
              </button>
            </div>
          </div>
          <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex items-center  justify-center shadow-lg rounded-lg ">
            <div className="grid col-span-1">
              {" "}
              <div className="">{t("Check.Transaction")}</div>
              <Link
                to={`/trancsation/${transaction}`}
                className="font-normal text-xs text-center text-[var(--tg-theme-link-color)] mx-10"
              >
                <p>{placeInCenter(transaction, " ")}</p>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center w-full bg-[var(--tg-theme-bg-color)] h-20 items-center rounded-xl shadow-lg text-center text-sm font-medium ">
            {t("Check.TransferAmount")}:{`  ${props.amount} TMY`}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => closeModal()}
              className="rounded-lg my-1 mx-6 text-sm  w-56 h-8 mt-3  font-bold bg-[var(--tg-theme-link-color)] text-center text-[var(--tg-theme-bg-color)] shadow-lg flex  justify-center items-center"
            >
              {t("Receive.GoBackHome")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function instance(config: any) {
  throw new Error("Function not implemented.");
}
