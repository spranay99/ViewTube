import React, { useState } from "react";
import { TagNames } from "../utils/constants";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div
      className={`fixed top-14 ${
        isMenuOpen ? "left-0 md:left-48 lg:left-60" : "left-0 md:left-[94px]"
      }  right-5 p-2 dark:bg-[#0f0f0f] z-10`}
    >
      <div className="flex text-sm gap-4 px-5 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth">
        {TagNames.map((item, index) => (
          <button
            key={index}
            className={`px-[12px] py-[6px] rounded-lg
              ${
                activeButton === index
                  ? "bg-white text-black font-semibold duration-200"
                  : "bg-[#303030]/[0.9]"
              }`}
            onClick={() => handleButtonClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
