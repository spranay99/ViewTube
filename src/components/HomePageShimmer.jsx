import React from "react";

const HomePageShimmer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 mt-8">
        {Array(12)
          .fill("")
          .map((__, ind) => {
            return (
              <div key={ind} className="p-2 shadow-lg animate-pulse">
                <div className="w-full rounded-lg  h-48 bg-slate-400"></div>
                <ul className="mt-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full w-10 h-10  bg-slate-400"></div>
                    <div className="h-4 w-3/4  bg-slate-400"></div>
                  </div>
                  <div className="ml-12">
                    <div className="h-4 w-2/3  bg-slate-400"></div>
                  </div>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomePageShimmer;
