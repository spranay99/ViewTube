import React from "react";
import { LOGO } from "../utils/constants";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import Profile from "../assets/profile.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-[#0f0f0f]">
      <div className="flex h-5 items-center">
        <div className="flex md:mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <SlMenu
            className="text-white text-xl"
            onClick={() => handleToggleMenu()}
          />
        </div>
        <div className="flex h-5 items-center gap-2">
          <img className="h-full " src={LOGO} alt="Viewtube-logo" />
          <span className="text-white font-semibold text-xl tracking-tighter hidden dark:md:block">
            ViewTube
          </span>
        </div>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search"
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src={Profile} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
