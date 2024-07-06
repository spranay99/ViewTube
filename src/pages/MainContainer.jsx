import React from "react";
import ButtonList from "../components/ButtonList";
import VideoContainer from "../components/VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`dark:bg-[#0f0f0f] w-full text-white overflow-hidden ${
        isMenuOpen ? "md:ml-48 lg:ml-60" : "ml-0 md:ml-[94px]"
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
