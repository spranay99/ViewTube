import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addHomeVideos } from "../redux/videoSlice";

const useVideos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addHomeVideos(json.items));
  };
};

export default useVideos;
