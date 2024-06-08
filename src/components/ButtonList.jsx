import React from "react";

const ButtonList = () => {
  const TagNames = [
    "All",
    "Gaming",
    "Namaste JavaScript",
    "IPL",
    "Akshay Saini",
    "Music",
    "Virat Kohli",
    "Comedy",
    "React",
    "Code with Harry",
    "Cricket",
    "Technical Suneja",
    "Football",
    "News",
  ];

  return (
    <div className="fixed top-14 left-[94px] right-5 p-2 dark:bg-[#0f0f0f]">
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
