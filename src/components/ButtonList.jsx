import React from "react";
import { TagNames } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="fixed top-14 left-[94px] right-5 p-2 dark:bg-[#0f0f0f] z-10">
      <div className="flex text-sm gap-4 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth">
        {TagNames.map((item, index) => (
          <button
            key={index}
            className={`bg-[#303030]/[0.9] hover:bg-[#303030]/[0.6] px-[12px] py-[6px] rounded-lg`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
