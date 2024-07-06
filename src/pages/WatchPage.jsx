import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import { clearMessage } from "../redux/chatSlice";
import { scrollToTop } from "../utils/helper";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import RelatedVideos from "../components/RelatedVideos";
import LiveChat from "../components/LiveChat";
import VideoData from "../components/VideoData";
import CommentsContainer from "../components/CommentsContainer";
import WatchPageShimmer from "../shimmer/WatchPageShimmer";

const WatchPage = () => {
  const [comments, setComments] = useState([]);

  const homeVideos = useSelector((store) => store.video.homeVideos);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const videoID = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(clearMessage());
    scrollToTop();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const data = await fetch(
      `${YOUTUBE_COMMENTS_API}&order=relevance&videoId=${videoID}`
    );
    const response = await data.json();
    setComments(response.items);
  };

  if (comments.length === 0) {
    return <WatchPageShimmer />;
  }

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
        <div>
          <CommentsContainer comments={comments} />
        </div>
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
