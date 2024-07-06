import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";

import SearchResultCard from "../components/SearchResultCard";
import SearchPageShimmer from "../shimmer/SearchPageShimmer";
import { scrollToTop } from "../utils/helper";

const SearchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const location = useLocation();

  const [searchedItem] = useSearchParams(location.search);
  const searchedTerm = searchedItem.get("results");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getSearchResults();
    scrollToTop();
  }, [searchedTerm]);

  const getSearchResults = async () => {
    const response = await fetch(
      `${YOUTUBE_SEARCH_VIDEO_API}&q=${searchedTerm}&regionCode=IN&type=video`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  if (videos.length === 0) {
    return (
      <div
        className={`dark:bg-[#0f0f0f] p-5 w-full text-white overflow-hidden ${
          isMenuOpen ? "md:ml-48 lg:ml-60" : "ml-0 md:ml-[94px]"
        }`}
      >
        <SearchPageShimmer />
      </div>
    );
  }

  return (
    <div
      className={`dark:bg-[#0f0f0f] p-5 w-full text-white overflow-hidden ${
        isMenuOpen ? "md:ml-48 lg:ml-60" : "ml-0 md:ml-[94px]"
      }`}
    >
      {videos.map((video) => (
        <Link to={`/watch?v=${video?.id?.videoId}`} key={video?.id?.videoId}>
          <SearchResultCard info={video} videoID={video?.id?.videoId} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
