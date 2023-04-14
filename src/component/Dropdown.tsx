import { useState } from "react";
import { ContentType, IContent } from "../types/content";

export const DropdownTabel = (props: { text: string; content: IContent[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="block  text-gray-700 font-semibold py-2 px-4 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.text}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          {props.content.map((cont) => {
            if (cont.type === ContentType.Button) {
              return (
                <button className=" px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {cont.name}
                </button>
              );
            } else {
              return (
                <label
                  htmlFor="UserEmail"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <input
                    type={cont.name}
                    id={cont.name}
                    placeholder={cont.name}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
                  />

                  <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200">
                    {cont.name}
                  </span>
                </label>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
