import { useTranslation } from "react-i18next";
import { statusTransation } from "../types/transaction";
import { Link } from "react-router-dom";

export default function TxList(props: { Tx: any[] }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      {props.Tx.map((tran: any) => {
        let walet: any;
        let header: string;
        let color: string;
        let value: string;
        let FromTo: string;

        if (tran.status === statusTransation.send) {
          walet = require("../assets/Send.svg");
          header = t("HomePage.SendTo");
          color = "#FF3A3A";
          value = `- ${tran.value}`;
          FromTo = tran.to;
        } else {
          walet = require("../assets/Receiving.svg");
          header = t("HomePage.ReceivingFrom");
          color = "#00FCDE";
          value = `+ ${tran.value}`;
          FromTo = tran.from;
        }

        return (
          <Link
            to={`/trancsation/${tran.Hash}`}
            className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-2xl w-[98%] h-[100px] grid grid-cols-1 px-4 my-3"
          >
            <div className="flex">
              <img src={walet} style={{ height: 30 }} className="m-4" />
              <div>
                <p className="text-lg ">{header}</p>
                <p className="text-[10px] text-[var(--tg-theme-hint-color)] font-thin">
                  {FromTo}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[10px] text-[var(--tg-theme-hint-color)] font-thin">
                {tran.timeStamp}
              </p>
              <p className={`text-[${color}] items-start`}> {value} TMY </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
