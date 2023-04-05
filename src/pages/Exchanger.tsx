export default function Exchanger() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="w-full py-6 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg flex justify-around">
          <div className="flex justify-evenly gap-6">
            <div className="bg-[#8F6DD7] py-1 px-3  rounded-xl">RUB</div>
            <div className="bg-[#3947C9] py-1 px-3  rounded-xl">TMY</div>
            <div className="bg-[#2D8C0B] py-1 px-3  rounded-xl">1200</div>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 96 960 960"
              width="28"
            >
              <path
                stroke="var(--tg-theme-text-color)"
                d="M400 816v-60h160v60H400ZM240 606v-60h480v60H240ZM120 396v-60h720v60H120Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
