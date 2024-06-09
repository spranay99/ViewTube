import { useEffect, useState } from "react";
import { CHANNEL_INFO_API } from "../utils/constants";

const useChannelDetails = (channelId) => {
  const [channelImage, setChannelImage] = useState(null);

  useEffect(() => {
    fetchChannelImage();
  }, []);

  const fetchChannelImage = async () => {
    const data = await fetch(CHANNEL_INFO_API + "&id=" + channelId);
    const response = await data.json();
    setChannelImage(response?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  return [channelImage];
};

export default useChannelDetails;
