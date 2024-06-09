import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return [videos];
};

export default useVideos;
