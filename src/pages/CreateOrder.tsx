import { Link } from "react-router-dom";

export default function CreateOrder() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 mt-10 gap-6 w-[90%] ">
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <div className="flex justify-center items-start font-black text-2xl text-[var(--tg-theme-hint-color)]">
            Create
          </div>
        </div>
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <fieldset className="flex flex-wrap gap-3">
            <legend className="sr-only">Color</legend>

            <div>
              <input
                type="radio"
                name="ColorOption"
                value="ColorBlack"
                id="ColorBlack"
                className="peer hidden"
                checked
              />

              <label
                htmlFor="ColorBlack"
                className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white dark:border-gray-800 dark:text-white dark:hover:border-gray-700"
              >
                <p className="text-2xl font-bold">Buy</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="ColorOption"
                value="ColorRed"
                id="ColorRed"
                className="peer hidden"
              />

              <label
                htmlFor="ColorRed"
                className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white dark:border-gray-800 dark:text-white dark:hover:border-gray-700"
              >
                <p className="text-2xl font-bold">Sell</p>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="w-full py-4 bg-[var(--tg-theme-bg-color)] rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-[var(--tg-theme-secondary-bg-color)] text-sm">
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Cryptocurrency
              </td>
              <td className="whitespace-nowrap px-4 ">TMY</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Fiat currency
              </td>
              <td className="whitespace-nowrap px-4 ">RUB</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Limit
              </td>
              <td className="whitespace-nowrap px-4 ">12,323</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4  font-medium text-[var(--tg-theme-link-color)]">
                Amount
              </td>
              <td className="whitespace-nowrap px-4 ">103</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
