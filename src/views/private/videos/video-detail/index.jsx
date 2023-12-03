// @ts-nocheck
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function StudentVideoDetail() {
  const { state } = useLocation();
  const { video } = state;

  if (video) {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
          <iframe
            className="flex w-full flex-col rounded-[20px] bg-cover"
            src={video.video}
            height="600"
            allow="fullscreen;"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>

          <div className="z-20 grid grid-cols-1 ">
            <div className="flex justify-between align-middle">
              <div className=" py-5 text-5xl font-bold">{video.title}</div>
            </div>

            <div className=" py-5 text-2xl font-normal">
              {video.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
