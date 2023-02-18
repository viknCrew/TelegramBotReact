export default function LoaderCheck() {
  return (
    <div className="animate-pulse" role="status">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="flex justify-center w-full h-[85vh] rounded-xl">
          <div className="grid grid-cols-1 w-80 mt-16 bg-[var(--tg-theme-bg-color)] rounded-xl  shadow-lg">
            <div className=" flex justify-center">
              <div className="trigger w-full flex justify-center ml-2 top-[-12px] ]">
                <div className="text-center mt-3">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 mr-2 text-[var(--tg-theme-secondary-bg-color)] animate-spin dark:text-gray-600 fill-[var(--tg-theme-button-color)]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex justify-center items-center  shadow-lg rounded-lg ">
              <div className="grid col-span-1">
                {" "}
                <div className="bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-7/12"></div>
                <button className="font-normal text-center text-xs text-[var(--tg-theme-link-color)] mx-10">
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                </button>
              </div>
            </div>
            <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex justify-center items-center  shadow-lg rounded-lg ">
              <div className="grid col-span-1">
                {" "}
                <div className="bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-7/12"></div>
                <button className="font-normal text-center text-xs text-[var(--tg-theme-link-color)] mx-10">
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                </button>
              </div>
            </div>
            <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex justify-center items-center  shadow-lg rounded-lg ">
              <div className="grid col-span-1">
                {" "}
                <div className="bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-7/12"></div>
                <button className="font-normal text-center text-xs text-[var(--tg-theme-link-color)] mx-10">
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                </button>
              </div>
            </div>
            <div className="text-center text-sm font-bold bg-[var(--tg-theme-bg-color)] flex justify-center items-center  shadow-lg rounded-lg ">
              <div className="grid col-span-1">
                {" "}
                <div className="bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-7/12"></div>
                <button className="font-normal text-center text-xs text-[var(--tg-theme-link-color)] mx-10">
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                  <div className="bg-[var(--tg-theme-link-color)] rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] h-[1.25rem] w-5/12"></div>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="rounded-lg my-1 mx-6 text-sm  w-56 h-8 mt-3  font-bold bg-[var(--tg-theme-link-color)] text-center text-[var(--tg-theme-bg-color)] shadow-lg flex  justify-center items-center"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
