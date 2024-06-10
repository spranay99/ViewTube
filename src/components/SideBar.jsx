import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useSelector } from "react-redux";

import { HiOutlineFire } from "react-icons/hi2";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiMusicNote } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { LuRadio } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import { TbHanger2 } from "react-icons/tb";
import { MdOutlinePodcasts } from "react-icons/md";

import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
    <div className="fixed w-48 lg:w-60 dark:bg-[#0f0f0f] text-white flex flex-col h-[calc(100vh-56px)] overflow-y-scroll sidebar z-50">
      <ul className="w-full flex flex-col gap-1 p-2">
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <IoMdHome className="w-6 h-6" /> <span className="text-md">Home</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <SiYoutubeshorts className="w-5 h-5" />
          <span className="text-md">Shorts</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <MdSubscriptions className="w-5 h-5" />
          <span className="text-md">Subscriptions</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <MdOutlineVideoLibrary className="w-5 h-5" />
          <span className="text-md">You</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <GrHistory /> <span className="text-md">History</span>
        </li>
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
          Explore
        </h1>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <HiOutlineFire className="w-6 h-6" />
          <span className="text-md">Trending</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <RiShoppingBag4Line className="w-5 h-5" />
          <span className="text-md">Shopping</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <PiMusicNote className="w-5 h-5" />
          <span className="text-md">Music</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <BiMoviePlay className="w-5 h-5" />
          <span className="text-md">Movies</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <LuRadio /> <span className="text-md">Live</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <SiYoutubegaming /> <span className="text-md">Gaming</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <ImNewspaper /> <span className="text-md">News</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <BsTrophy /> <span className="text-md">Sports</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <AiOutlineBulb /> <span className="text-md">Courses</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <TbHanger2 /> <span className="text-md">Fashion & Beauty</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <MdOutlinePodcasts /> <span className="text-md">Podcasts</span>
        </li>
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
          More from ViewTube
        </h1>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <FaYoutube className="w-5 h-5 text-[#CD201F]" />
          <span className="text-md">Youtube Premium</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <SiYoutubemusic className="w-5 h-5 text-[#CD201F]" />
          <span className="text-md">Youtube Music</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <TbBrandYoutubeKids className="w-5 h-5 text-[#CD201F]" />
          <span className="text-md">Music</span>
        </li>
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <IoSettingsOutline className="w-5 h-5" />
          <span className="text-md">Settings</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <MdOutlineFlag className="w-5 h-5" />
          <span className="text-md">Report History</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <FiHelpCircle className="w-5 h-5 " />
          <span className="text-md">Help</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg">
          <BiCommentError className="w-5 h-5" />
          <span className="text-md">Send Feedback</span>
        </li>
      </ul>
    </div>
  ) : (
    <div className="hidden sm:block fixed dark:bg-[#0f0f0f] text-white p-2 h-[calc(100vh-56px)] ">
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
