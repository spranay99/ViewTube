import React, { useEffect, useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import {
  formatDuration,
  formatNumberToReadableView,
  timeAgo,
} from "../utils/helper";
import useChannelDetails from "../custom-hooks/useChannelDetails";
import { VIDEO_DETAILS_API } from "../utils/constants";

const SearchResultCard = ({ info, videoID }) => {
  const [videoData, setVideoData] = useState({});
  const [hovered, setHovered] = useState(false);

  const { snippet } = info;
  const {
    channelId,
    title,
    thumbnails,
    publishedAt,
    description,
    channelTitle,
  } = snippet;
  const [channelImage] = useChannelDetails(channelId);

  const viewCount = videoData?.statistics?.viewCount;
  const duration = videoData?.contentDetails?.duration;

  useEffect(() => {
    fetchVideoData();
  }, [videoID]);

  const fetchVideoData = async () => {
    const data = await fetch(VIDEO_DETAILS_API + "&id=" + videoID);
    const response = await data.json();
    setVideoData(response?.items?.[0]);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 p-2">
      <div
        className="relative lg:w-1/3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="absolute inset-0">
            <iframe
              width="100%"
              height="100%"
              style={{ borderRadius: "0.5rem" }}
              src={`https://www.youtube.com/embed/${info?.id?.videoId}?autoplay=1&mute=1&controls=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        )}
        <img
          className="w-full h-full rounded-lg"
          src={thumbnails?.medium?.url}
          alt={`${title}'s video`}
        />
        {!hovered && (
          <div className="absolute bottom-1 right-1 px-2 py-1">
            <div className="absolute inset-0 bg-[#0f0f0f] opacity-60 rounded-lg"></div>
            <div className="relative text-xs font-medium">
              {formatDuration(duration)}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col lg:w-2/3 gap-1 p-2">
        <div className="flex items-center gap-2 w-3/4">
          <div className="font-bold line-clamp-2">{title}</div>
        </div>
        <div className="opacity-85">
          <div className="flex items-center">
            <div className="text-white">
              {formatNumberToReadableView(viewCount)}
            </div>
            <PiDotOutlineFill className="text-white" />
            <div>{timeAgo(publishedAt)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 overflow-hidden rounded-full">
            <img src={channelImage} alt={channelTitle + " image"} />
          </div>
          <span className="flex gap-2 text-white">{channelTitle}</span>
        </div>
        <div className="flex items-center gap-2 w-1/2">
          <div className="line-clamp-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
