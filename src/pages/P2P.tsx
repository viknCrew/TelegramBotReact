import { Link } from "react-router-dom";

export default function P2P() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start font-black text-2xl text-[var(--tg-theme-hint-color)]">
            P2P Маркет
          </div>
        </div>
        <div className="grid gap-3 grid-cols-3 bg-[var(--tg-theme-bg-color)] rounded-xl text-sm ">
          <Link
            to={"/exchanger"}
            className=" ml-7 flex items-center justify-center  rounded-md "
          >
            <div className="grid grid-cols-1 m-0 p-0  font-semibold">
              <div className="mx-auto p-4 rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center  shadow-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7695 10.698C16.2105 10.698 19 9.45904 19 7.93069C19 6.40233 16.2105 5.16336 12.7695 5.16336C9.32845 5.16336 6.53894 6.40233 6.53894 7.93069C6.53894 9.45904 9.32845 10.698 12.7695 10.698Z"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.53894 7.93054V16.2325C6.53894 17.7546 9.30807 18.9998 12.7695 18.9998C16.2309 18.9998 19 17.7546 19 16.2325V7.93054"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 12.0816C19 13.6036 16.2309 14.8489 12.7695 14.8489C9.30807 14.8489 6.53894 13.6036 6.53894 12.0816"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6303 2.39581C11.0125 1.39801 9.12924 0.915448 7.23054 1.01214C3.78298 1.01214 1 2.25744 1 3.77947C1 4.59583 1.80305 5.32917 3.07685 5.85497"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.07685 14.1568C1.80305 13.631 1 12.8977 1 12.0813V3.77933"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.07685 10.0059C1.80305 9.48012 1 8.74678 1 7.93042"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="mx-auto flex justify-center ">Купить</p>
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
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.73077 6.84615C1.53696 6.84615 1.35108 6.76916 1.21404 6.63212C1.07699 6.49507 1 6.3092 1 6.11538V1.73077C1 1.53696 1.07699 1.35108 1.21404 1.21404C1.35108 1.07699 1.53696 1 1.73077 1H19.2692C19.463 1 19.6489 1.07699 19.786 1.21404C19.923 1.35108 20 1.53696 20 1.73077V6.11538C20 6.3092 19.923 6.49507 19.786 6.63212C19.6489 6.76916 19.463 6.84615 19.2692 6.84615"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.8839 4.65402H6.11468C5.71109 4.65402 5.38391 4.9812 5.38391 5.38479V15.6156C5.38391 16.0192 5.71109 16.3463 6.11468 16.3463H14.8839C15.2875 16.3463 15.6147 16.0192 15.6147 15.6156V5.38479C15.6147 4.9812 15.2875 4.65402 14.8839 4.65402Z"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5004 12.6921C11.7112 12.6921 12.6927 11.7106 12.6927 10.4998C12.6927 9.28899 11.7112 8.30746 10.5004 8.30746C9.28964 8.30746 8.30811 9.28899 8.30811 10.4998C8.30811 11.7106 9.28964 12.6921 10.5004 12.6921Z"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.38391 20H15.6147"
                    stroke="var(--tg-theme-link-color)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="mx-auto flex justify-center">Продать</p>
            </div>
          </Link>
          <Link
            to={"/exchanger"}
            className="mr-7 flex items-center justify-center rounded-md"
          >
            <div className="grid grid-cols-1 m-0 p-0  font-semibold">
              <div className="mx-auto p-4 rounded-full bg-[var(--tg-theme-secondary-bg-color)] flex justify-center items-center  shadow-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 28V15.5H0V12.5H12.5V0H15.5V12.5H28V15.5H15.5V28H12.5Z"
                    fill="var(--tg-theme-link-color)"
                  />
                </svg>
              </div>
              <p className="mx-auto flex justify-center"> Создать</p>
            </div>
          </Link>
        </div>
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-[var(--tg-theme-secondary-bg-color)] text-sm">
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Amount of deals
              </td>
              <td className="whitespace-nowrap px-4 ">23</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Completed deals
              </td>
              <td className="whitespace-nowrap px-4 ">97,32%</td>
            </tr>
          </table>
        </div>

        <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
          <div className="w-[98%]">
            <p className="text-2xl font-bold flex justify-center mt-4 text-[var(--tg-theme-hint-color)]">
              История сделок
            </p>
            <div className="h-4 w-[98%] ">
              <Link
                to={`/`}
                className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-2xl w-[98%] h-[100px] grid grid-cols-1 px-4 my-3"
              >
                <div className="flex gap-3 items-center mx-4 mt-2 mb-2 border-b-2 border-[var(--tg-theme-text-color)]">
                  <p className="text-xs font-bold align-text-top flex gap-2 bg-[00FCDE]">
                    Сompleted
                  </p>
                  <p className="font-light"> #AS-0002343</p>
                </div>
                <p className="font-bold text-2xl">Sold 14 TMY for 2600 RUB</p>
                <table className="min-w-full divide-y divide-[var(--tg-theme-secondary-bg-color)] text-sm">
                  <tr>
                    <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                      Buyer
                    </td>
                    <td className="whitespace-nowrap px-4 ">
                      {" "}
                      Tsigulsky Nikita{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                      Payment method
                    </td>
                    <td className="whitespace-nowrap px-4 text-[#10936C]">
                      СБЕР
                    </td>
                  </tr>
                </table>
                <p className="text-[10px] text-[var(--tg-theme-hint-color)] font-thin">
                  December 31 at 18:43
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
