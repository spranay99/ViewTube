import React, { useEffect, useState } from "react";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constants";
import { BiLike, BiDislike, BiDotsHorizontalRounded } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  formatNumberToReadableView,
  postedDate,
  timeAgo,
} from "../utils/helper";

const VideoData = ({ videoID }) => {
  const [videoData, setVideoData] = useState({});
  const [channelImage, setChannelImage] = useState(null);
  const [channelSubscribers, setChannelSubscribers] = useState(null);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const viewCount = videoData?.statistics?.viewCount;
  const postedAt = videoData?.snippet?.publishedAt;

  useEffect(() => {
    fetchVideoData();
  }, [videoID]);

  const fetchVideoData = async () => {
    const data = await fetch(VIDEO_DETAILS_API + "&id=" + videoID);
    const response = await data.json();
    setVideoData(response?.items?.[0]);
  };

  useEffect(() => {
    if (videoData?.snippet?.channelId) {
      fetchChannelImage();
    }
  }, [videoData?.snippet?.channelId]);

  const fetchChannelImage = async () => {
    const data = await fetch(
      CHANNEL_INFO_API + "&id=" + videoData?.snippet?.channelId
    );
    const response = await data.json();
    setChannelImage(response?.items[0]?.snippet?.thumbnails?.default?.url);
    setChannelSubscribers(response?.items?.[0]?.statistics?.subscriberCount);
  };

  return (
    <div>
      <h1 className="text-xl font-bold my-3">{videoData?.snippet?.title}</h1>
      <div className="flex flex-col gap-3 md:flex-row md:gap justify-between items-center">
        <div className="flex max-sm:w-full sm:gap-3 max-sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 overflow-hidden rounded-full">
              <img
                src={channelImage}
                alt={videoData?.snippet?.channelTitle + " image"}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-bold">
                {videoData?.snippet?.channelTitle}
              </div>
              <div className="text-sm">
                {formatNumberToReadableView(channelSubscribers)} subscribers
              </div>
            </div>
          </div>
          <div className="bg-white text-black rounded-full py-2 px-5 cursor-pointer hover:bg-slate-200">
            Subscribe
          </div>
        </div>
        <div className="flex items-center max-sm:justify-between gap-3 max-sm:w-full">
          <div className="flex bg-white/[0.1] cursor-pointer overflow-hidden rounded-full">
            <div className="flex items-center gap-1 p-2 hover:bg-[#303030] cursor-pointer">
              <BiLike fontSize={20} />
              <span>233K</span>
            </div>
            <div className="flex items-center p-2 hover:bg-[#303030]">
              <BiDislike
                className="cursor-pointer hover:bg-[#303030]"
                fontSize={20}
              />
            </div>
          </div>

          <div className="flex items-center bg-white/[0.1] cursor-pointer p-2 rounded-full gap-1 hover:bg-[#303030]">
            <PiShareFat fontSize={20} />
            <span>Share</span>
          </div>

          <div className="flex items-center bg-white/[0.1] cursor-pointer p-2 rounded-full gap-1 hover:bg-[#303030] md:hidden">
            <LiaDownloadSolid fontSize={20} />
            <span>Download</span>
          </div>

          <div className="flex items-center bg-white/[0.1] cursor-pointer p-2 rounded-full hover:bg-[#303030] max-sm:hidden">
            <BiDotsHorizontalRounded fontSize={20} />
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="rounded-xl bg-white/[0.1] py-2 px-3">
          <div className="flex gap-2">
            <span className="font-bold text-md">
              {showMoreInfo ? viewCount : formatNumberToReadableView(viewCount)}{" "}
              views
            </span>
            <span className="font-bold text-md">
              {showMoreInfo ? postedDate(postedAt) : timeAgo(postedAt)}
            </span>
          </div>
          <p className={`${showMoreInfo ? "line-clamp-none" : "line-clamp-3"}`}>
            {videoData?.snippet?.description}
          </p>
          <span
            className="text-md font-bold cursor-pointer text-white"
            onClick={() => setShowMoreInfo(!showMoreInfo)}
          >
            {showMoreInfo ? "Show Less" : "...more"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoData;
