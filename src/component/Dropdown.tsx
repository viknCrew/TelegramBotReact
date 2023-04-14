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
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {cont.name}
                </button>
              );
            } else
              return (
                <input className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {cont.name}
                </input>
              );
          })}
        </div>
      )}
    </div>
  );
};
