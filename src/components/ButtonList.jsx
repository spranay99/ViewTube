import React from "react";
import { TagNames } from "../utils/constants";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`fixed top-14 ${
        isMenuOpen ? "left-0 md:left-48 lg:left-60" : "left-0 md:left-[94px]"
      } right-5 p-2 dark:bg-[#0f0f0f] z-10`}
    >
      <div className="flex text-sm gap-4 px-5 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth">
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
