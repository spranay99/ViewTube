import React from "react";
import VideoCard from "./VideoCard";
import HomePageShimmer from "./HomePageShimmer";
import useVideos from "../custom-hooks/useVideos";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [videos] = useVideos();

  if (videos.length === 0) {
    return <HomePageShimmer />;
  }
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 mt-8
      ${isMenuOpen ? "xl:grid-cols-3" : "xl:grid-cols-4"}
      `}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
