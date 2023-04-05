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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 96 960 960"
          width="28"
          fill="var(--tg-theme-text-color)"
        >
          <path
            stroke="var(--tg-theme-text-color)"
            d="M400 816v-60h160v60H400ZM240 606v-60h480v60H240ZM120 396v-60h720v60H120Z"
          />
        </svg>
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
                  <details className="overflow-hidden rounded border border-gray-300 dark:border-gray-600 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer dark:text-white">
                      <span className="text-sm font-medium">
                        {" "}
                        Availability{" "}
                      </span>

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

                    <div className="bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                          0 Selected
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4 dark:text-white"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="w-5 h-5 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                            />

                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                              In Stock (5+)
                            </span>
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
                              className="w-5 h-5 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                            />

                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                              Pre Order (3+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="w-5 h-5 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                            />

                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                              Out of Stock (10+)
                            </span>
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
                  <details className="overflow-hidden rounded border border-gray-300 dark:border-gray-600 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer dark:text-white">
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

                    <div className="bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                          The highest price is $600
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4 dark:text-white"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              $
                            </span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-900 sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              $
                            </span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-900 sm:text-sm"
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
