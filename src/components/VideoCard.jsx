import React, { useEffect, useState } from "react";
import { CHANNEL_INFO_API } from "../utils/constants";
import { GoDotFill } from "react-icons/go";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet;

  const [channelImage, setChannelImage] = useState(null);

  useEffect(() => {
    fetchChannelImage();
  }, []);

  const fetchChannelImage = async () => {
    const data = await fetch(CHANNEL_INFO_API + "&id=" + channelId);
    const response = await data.json();
    setChannelImage(response?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  return (
    <div className="p-2 shadow-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails.medium.url}
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
        <div className="ml-12">
          <li>{channelTitle}</li>
          <div className="flex gap-2 items-center">
            <li>{statistics.viewCount} views</li>
            <GoDotFill className="text-white" />
            <li>{publishedAt} ago</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
