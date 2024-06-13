import React, { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import {
  formatDuration,
  formatNumberToReadableView,
  timeAgo,
} from "../utils/helper";
import { FaCheckCircle } from "react-icons/fa";
import useChannelDetails from "../custom-hooks/useChannelDetails";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet;
  const { duration } = contentDetails;

  const [hovered, setHovered] = useState(false);
  const [channelImage] = useChannelDetails(channelId);
  return (
    <div className="p-2 shadow-lg">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="absolute inset-0">
            <iframe
              width="100%"
              height="100%"
              style={{ borderRadius: "0.5rem" }}
              src={`https://www.youtube.com/embed/${info.id}?autoplay=1&mute=1&controls=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        )}

        <img
          className="w-full rounded-lg"
          src={thumbnails?.medium?.url}
          alt="video"
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
      <ul className="mt-3">
        <div className="flex items-center gap-2">
          <img
            src={channelImage}
            alt={channelTitle + " image"}
            className="rounded-full w-10 h-10"
          />
          <li className="font-bold line-clamp-2">{title}</li>
        </div>
        <div className="ml-12 opacity-85">
          <li className="flex gap-2">
            {channelTitle}
            <FaCheckCircle className="my-auto" />
          </li>
          <div className="flex items-center">
            <li>{formatNumberToReadableView(statistics?.viewCount)} views</li>
            <PiDotOutlineFill className="text-white" />
            <li>{timeAgo(publishedAt)}</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
