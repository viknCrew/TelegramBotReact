export default function LoaderSkeleton() {
  return (
    <div
      className="grid grid-col-1 mt-10 gap-6 w-[90%] animate-pulse"
      role="status"
    >
      <div className="Wallet w-full h-[150px] bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
        <div className="flex justify-center items-start mt-[15px] font-black text-2xl h-[2rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-48 mb-4"></div>
        <div className="font-smail text-xs ml-[30px] h-[1rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-148 mb-4"></div>
        <div className="flex items-center ml-[30px] h-[1.75rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-48 mb-4"></div>
      </div>
      <div className="grid gap-6 grid-cols-2">
        <div className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md">
          <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
            <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center"></div>
            <p className="mx-auto flex justify-cent h-[1rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-28 mb-4"></p>
          </div>
        </div>
        <div className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-link-color)] py-[7px] flex items-center justify-center shadow-lg rounded-md">
          <div className="grid grid-cols-1 m-0 p-0 text-xl font-semibold">
            <div className="mx-auto w-[28px] h-[28px] rounded-full bg-[var(--tg-theme-button-color)] flex justify-center items-center"></div>
            <p className="mx-auto flex justify-cent h-[1rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-28 mb-4">
              {" "}
            </p>
          </div>
        </div>
      </div>
      <p className="flex justify-center items-start mt-[15px] font-black text-2xl h-[2rem] bg-[var(--tg-theme-hint-color)]  rounded-full dark:bg-[var(--tg-theme-secondary-bg-color)] w-48 mb-4]"></p>
      <div className="bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg w-full h-[400px] overflow-auto flex justify-center">
        <div className=" gap-3 grid grid-cols-1"></div>
      </div>
    </div>
  );
}
