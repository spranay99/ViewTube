import React, { useEffect, useState } from "react";
import { LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import Profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { cacheResults } from "../redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache with new search
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchResults = (search) => {
    navigate(`/search?results=${encodeURIComponent(search)}`);
    setShowSuggestions(false);
    setSearchQuery(search);
  };

  return (
    <div className="sticky top-0 z-20 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-[#0f0f0f]">
      <div className="flex h-5 items-center">
        <div className="flex md:mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <SlMenu
            className="text-white text-xl"
            onClick={() => handleToggleMenu()}
          />
        </div>
        <Link to="/">
          <div className="flex h-5 items-center gap-2">
            <img className="h-full " src={LOGO} alt="Viewtube-logo" />
            <span className="text-white font-semibold text-xl tracking-tighter hidden dark:md:block">
              ViewTube
            </span>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex items-center">
          <div className="flex items-center h-8 md:h-10 pl-2 md:pl-5 border border-[#303030] rounded-l-3xl focus-within:border-blue-500 pr-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="bg-transparent outline-none text-white w-[156px] md:w-56 lg:w-[470px]"
              placeholder="Search"
            />
            {searchQuery.length > 0 && (
              <RxCross1
                className="text-white text-xl cursor-pointer"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-[#212121] text-white w-48 md:w-[275px] lg:w-[520px] shadow-lg rounded-lg mt-2 overflow-hidden">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-[#303030] flex items-center gap-2"
                  onClick={() => handleSearchResults(suggestion)}
                >
                  <IoIosSearch className="text-xl" /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src={Profile} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
