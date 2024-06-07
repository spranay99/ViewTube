import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="dark:bg-[#0f0f0f] text-white p-2 h-[calc(100vh-56px)] hidden md:block">
      <div className="flex flex-col items-center gap-1 p-1 py-2 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer">
        <IoMdHome className="w-7 h-7" />
        <span className="text-[12px]">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-1 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer">
        <SiYoutubeshorts className="w-6 h-6" />
        <span className="text-[12px]">Shorts</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-1 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer">
        <MdSubscriptions className="w-6 h-6" />
        <span className="text-[12px]">Subscriptions</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-1 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer">
        <MdOutlineVideoLibrary className="w-6 h-6" />
        <span className="text-[12px]">You</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-1 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer">
        <GrHistory className="w-5 h-6" />
        <span className="text-[12px]">History</span>
      </div>
    </div>
  );
};

export default SideBar;
