import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center ">
      <div className="animate-pulse">
        {" "}
        <div class="h-20 w-20 rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
};

export default Loading;
