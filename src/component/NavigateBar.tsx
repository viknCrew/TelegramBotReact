import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavigateBar() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-6 grid-cols-3 bg-[var(--tg-theme-bg-color)] rounded-xl text-sm ">
      <Link
        to={"/send"}
        className=" py-[7px] flex items-center justify-center  rounded-md "
      >
        <div className="grid grid-cols-1 m-0 p-0  font-semibold">
          <div className="mx-auto p-4 rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center  shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 5.5C6.74264 5.5 7.75 4.49264 7.75 3.25C7.75 2.00736 6.74264 1 5.5 1C4.25736 1 3.25 2.00736 3.25 3.25C3.25 4.49264 4.25736 5.5 5.5 5.5Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 13H1V12C1 10.8065 1.47411 9.66193 2.31802 8.81802C3.16193 7.97411 4.30653 7.5 5.5 7.5C6.69347 7.5 7.83807 7.97411 8.68198 8.81802C9.52589 9.66193 10 10.8065 10 12V13Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 1C10.0967 1 10.669 1.23705 11.091 1.65901C11.5129 2.08097 11.75 2.65326 11.75 3.25C11.75 3.84674 11.5129 4.41903 11.091 4.84099C10.669 5.26295 10.0967 5.5 9.5 5.5"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0996 7.68994C11.9514 8.01399 12.6848 8.58905 13.2026 9.33903C13.7205 10.089 13.9984 10.9786 13.9996 11.8899V12.9999H12.4996"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mx-auto flex justify-center "> {t("HomePage.Send")}</p>
        </div>
      </Link>
      <Link
        to={"/receive"}
        className="py-[7px] flex items-center justify-center rounded-md"
      >
        <div className="grid grid-cols-1 m-0 p-0  font-semibold">
          <div className="mx-auto p-4 rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center  shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8075 9.08169C13.6751 9.08169 15.9997 8.04922 15.9997 6.77559C15.9997 5.50196 13.6751 4.46948 10.8075 4.46948C7.93988 4.46948 5.61523 5.50196 5.61523 6.77559C5.61523 8.04922 7.93988 9.08169 10.8075 9.08169Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.61523 6.77551V13.6938C5.61523 14.9622 7.9229 15.9999 10.8075 15.9999C13.6921 15.9999 15.9997 14.9622 15.9997 13.6938V6.77551"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9997 10.2347C15.9997 11.5031 13.6921 12.5408 10.8075 12.5408C7.9229 12.5408 5.61523 11.5031 5.61523 10.2347"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6922 2.16317C9.34392 1.33168 7.77452 0.92954 6.19224 1.01012C3.3192 1.01012 1 2.04787 1 3.31623C1 3.99653 1.66922 4.60764 2.73075 5.0458"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.73075 11.9641C1.66922 11.5259 1 10.9148 1 10.2345V3.31616"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.73075 8.50497C1.66922 8.06681 1 7.45569 1 6.77539"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mx-auto flex justify-center">
            {" "}
            {t("HomePage.Receive")}
          </p>
        </div>
      </Link>
      <Link
        to={"/exchanger"}
        className="py-[7px] flex items-center justify-center rounded-md"
      >
        <div className="grid grid-cols-1 m-0 p-0  font-semibold">
          <div className="mx-auto p-4 rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center  shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5385 1H4.46154C2.54978 1 1 2.54978 1 4.46154V12.5385C1 14.4502 2.54978 16 4.46154 16H12.5385C14.4502 16 16 14.4502 16 12.5385V4.46154C16 2.54978 14.4502 1 12.5385 1Z"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.03906 9.65422L10.2314 4.46191H6.19291"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9618 7.3457L6.76953 12.538H10.808"
                stroke="var(--tg-theme-link-color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mx-auto flex justify-center"> Обменять</p>
        </div>
      </Link>
    </div>
  );
}
