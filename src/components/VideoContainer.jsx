import React from "react";
import VideoCard from "./VideoCard";
import HomePageShimmer from "../shimmer/HomePageShimmer";
import useVideos from "../custom-hooks/useVideos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const homeVideos = useSelector((store) => store.video.homeVideos);

  useVideos();

  if (homeVideos.length === 0) {
    return <HomePageShimmer />;
  }
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 mt-8
      ${isMenuOpen ? "xl:grid-cols-3" : "xl:grid-cols-4"}
      `}
    >
      {homeVideos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
