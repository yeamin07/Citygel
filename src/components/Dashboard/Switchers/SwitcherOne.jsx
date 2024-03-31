import { useState } from "react";

const SwitcherOne = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="bg-meta-9 block h-8 w-14 rounded-full dark:bg-[#5A616B]"></div>
          <div
            className={`bg-white absolute left-1 top-1 h-6 w-6 rounded-full transition ${
              enabled && "!bg-primary dark:!bg-white !right-1 !translate-x-full"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherOne;
