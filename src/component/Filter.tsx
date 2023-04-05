export default function Filter() {
  return (
    <>
      {" "}
      <input
        type="checkbox"
        name="hamburger"
        id="hamburger"
        className="peer"
        hidden
      />
      <label
        htmlFor="hamburger"
        className="peer-checked:hamburger block relative z-20 -mr-6 cursor-pointer lg:hidden"
      >
        <div
          aria-hidden="true"
          className="m-auto h-0.5 w-6 rounded bg-[var(--tg-theme-text-color)] transition duration-300"
        ></div>
        <div
          aria-hidden="true"
          className="m-auto mt-2 h-0.5 w-6 rounded bg-[var(--tg-theme-text-color)]  transition duration-300"
        ></div>
      </label>
      <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[var(--tg-theme-bg-color)] border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
        <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
          <ul className="px-6 pt-32 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
            <li>
              <a
                href="#"
                className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2"
              >
                <span className="relative ">
                  {" "}
                  <details className="overflow-hidden rounded border bg-[var(--tg-theme-secondary-bg-color)]  border-[var(--tg-theme-text-color)] [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between gap-2 p-4 transition cursor-pointer ">
                      <span className="text-sm font-medium"> Сurrency </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t bg-[var(--tg-theme-secondary-bg-color)]  border-[var(--tg-theme-text-color)] ">
                      <header className="flex items-center justify-between p-4">
                        <button
                          type="button"
                          className="text-sm  underline underline-offset-4 "
                        >
                          EUR
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-[var(--tg-theme-text-color)]">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="w-5 h-5 border-[var(--tg-theme-text-color)] rounded"
                            />

                            <span className="text-sm font-medium ">RUB</span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="w-5 h-5 border-[var(--tg-theme-text-color)] rounded "
                            />

                            <span className="text-sm font-medium ">USD</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative ">
                  <details className="overflow-hidden rounded border bg-[var(--tg-theme-secondary-bg-color)]  border-[var(--tg-theme-text-color)] [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between gap-2 p-4 transition cursor-pointer ">
                      <span className="text-sm font-medium"> Price </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-[var(--tg-theme-text-color)] bg-[var(--tg-theme-secondary-bg-color)]">
                      <header className="flex items-center justify-between p-4">
                        <button
                          type="button"
                          className="text-sm underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="p-4 border-t">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full border-[var(--tg-theme-text-color)] rounded-md shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full border-[var(--tg-theme-text-color)] rounded-md shadow-sm  sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>
                </span>
              </a>
            </li>
          </ul>

          <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
            <a
              href="#"
              className="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
