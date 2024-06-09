import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { formatNumberToReadableView, timeAgo } from "../utils/helper";
import { FaCheckCircle } from "react-icons/fa";
import useChannelDetails from "../custom-hooks/useChannelDetails";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet;

  const [channelImage] = useChannelDetails(channelId);

  return (
    <div className="p-2 shadow-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="video"
      />
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
