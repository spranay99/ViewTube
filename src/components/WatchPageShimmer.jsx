import React from "react";

const WatchPageShimmer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-[calc(100vh-56px)] p-4 sm:p-6 gap-6 dark:bg-[#0f0f0f] ">
      <div className="w-full lg:w-2/3 lg:pl-6">
        <div className="rounded-xl w-full h-[40vh] sm:h-[65vh] object-cover dark:bg-black"></div>
        <div className="animate-pulse my-3">
          <div className="bg-white/[0.1] rounded-xl w-1/2 h-5 my-3"></div>
          <div className="bg-white/[0.1] rounded-xl w-1/3 h-5 my-3"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/[0.1]"></div>
              <div className="flex flex-col justify-center gap-2">
                <div className="bg-white/[0.1] rounded-xl w-32 h-5 "></div>
                <div className="bg-white/[0.1] rounded-xl w-32 h-5 "></div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-white/[0.1]"></div>
              <div className="h-10 w-10 rounded-full bg-white/[0.1]"></div>
              <div className="h-10 w-10 rounded-full bg-white/[0.1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;
