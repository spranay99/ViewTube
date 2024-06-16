import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import { scrollToTop } from "../utils/helper";
import LiveChat from "./LiveChat";
import { clearMessage } from "../redux/chatSlice";
import VideoData from "./VideoData";

const WatchPage = () => {
  const homeVideos = useSelector((store) => store.video.homeVideos);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const videoID = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(clearMessage());
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 gap-6 dark:bg-[#0f0f0f] text-white">
      <div className="w-full lg:w-2/3 lg:pl-6">
        <iframe
          className="rounded-xl w-full h-[40vh] sm:h-[65vh] object-cover"
          src={`https://www.youtube.com/embed/${videoID}?autoplay=0&mute=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <VideoData videoID={videoID} />
      </div>
      <div className="w-full lg:w-1/3 lg:pr-6">
        <LiveChat />
        {homeVideos
          .filter((video) => video.id !== videoID)
          .map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <RelatedVideos info={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
