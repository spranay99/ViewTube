import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DefaultHome, Explore, Home, More, Others } from "../utils/icons";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const location = useLocation();

  if (!isMenuOpen) {
    if (location.pathname === "/watch") {
      return null;
    }

    return (
      <div className="hidden sm:block fixed dark:bg-[#0f0f0f] text-white p-2 h-[calc(100vh-56px)] ">
        {DefaultHome.map(({ icon, name }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1 p-1 py-2 my-5 hover:bg-[#303030]/[0.6] hover:rounded-lg cursor-pointer"
            >
              {icon}
              <span className="text-[12px]">{name}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="fixed w-48 lg:w-60 dark:bg-[#0f0f0f] text-white flex flex-col h-[calc(100vh-56px)] overflow-y-scroll sidebar z-50">
      <ul className="w-full flex flex-col gap-1 p-2">
        {Home.map(({ icon, name }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg"
            >
              {icon}
              <span className="text-md">{name}</span>
            </li>
          );
        })}
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
          Explore
        </h1>
        {Explore.map(({ icon, name }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg"
            >
              {icon}
              <span className="text-md">{name}</span>
            </li>
          );
        })}
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
          More from ViewTube
        </h1>
        {More.map(({ icon, name }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg"
            >
              {icon}
              <span className="text-md">{name}</span>
            </li>
          );
        })}
      </ul>
      <div className="my-2">
        <hr />
      </div>
      <ul className="w-full flex flex-col gap-1 p-2">
        {Others.map(({ icon, name }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-[#303030]/[0.6] p-2 rounded-lg"
            >
              {icon} <span className="text-md">{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
