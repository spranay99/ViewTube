import React from "react";

const SearchPageShimmer = () => {
  return (
    <div>
      {Array(4)
        .fill("")
        .map((__, ind) => {
          return (
            <div
              key={ind}
              className="flex flex-col lg:flex-row w-full gap-5 p-2 animate-pulse"
            >
              <div className="relative lg:w-1/3">
                <div className="w-full rounded-lg h-60 bg-slate-400"></div>
              </div>
              <div className="flex flex-col lg:w-2/3 gap-1 p-2">
                <div className="h-4 w-full bg-slate-400 my-1"></div>
                <div className="h-4 w-1/4 bg-slate-400 my-1"></div>
                <div className="flex items-center gap-2 my-1">
                  <div className="rounded-full w-10 h-10  bg-slate-400"></div>
                  <div className="h-4 w-28 bg-slate-400"></div>
                </div>
                <div className="h-4 w-1/2 bg-slate-400 my-1"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchPageShimmer;
