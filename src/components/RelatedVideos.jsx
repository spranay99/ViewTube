import React from "react";
import {
  formatDuration,
  formatNumberToReadableView,
  scrollToTop,
} from "../utils/helper";
import { PiDotOutlineFill } from "react-icons/pi";
import useChannelDetails from "../custom-hooks/useChannelDetails";
import { useDispatch } from "react-redux";
import { clearMessage } from "../redux/chatSlice";

const RelatedVideos = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelId, channelTitle, title, thumbnails } = snippet;
  const { duration } = contentDetails;
  const [channelImage] = useChannelDetails(channelId);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col lg:flex-row w-full gap-2 p-2"
      onClick={() => {
        scrollToTop();
        dispatch(clearMessage());
      }}
    >
      <div className="relative lg:w-1/3">
        <img
          className="w-full h-full rounded-lg"
          src={thumbnails?.medium?.url}
          alt="video"
        />
        <div className="absolute bottom-1 right-1 px-2 py-1">
          <div className="absolute inset-0 bg-[#0f0f0f] opacity-60 rounded-lg"></div>
          <div className="relative text-xs font-medium">
            {formatDuration(duration)}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-2/3">
        <ul>
          <div className="flex items-center gap-2">
            <img
              src={channelImage}
              alt={channelTitle + " image"}
              className="lg:hidden rounded-full w-10 h-10"
            />
            <li className="font-bold line-clamp-2">{title}</li>
          </div>
          <div className="ml-12 lg:ml-0 opacity-85">
            <div className="flex items-center">
              <li className="flex gap-2">{channelTitle}</li>
              <PiDotOutlineFill className="text-white" />
              <li>{formatNumberToReadableView(statistics?.viewCount)} views</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RelatedVideos;
