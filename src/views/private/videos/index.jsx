// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import NftCard from "components/card/NftCard";
import { formatDate } from "helper/stringHelpers";
import { useSelector, useDispatch } from "react-redux";
import { selectAssesments } from "store";
import { getVideos } from "features/assessment/assessmentActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LINKS } from "types/global";

export default function StudentVideos() {
  const { videos } = useSelector(selectAssesments);
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(getVideos({}));
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (videos && videos.result) {
        setVideosList(videos.result);
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [videos]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Watch videos to enhance you knowledge"
          title="Videos are the best way to explore lates technologies"
          image={NftBanner1}
        />

        <div className="z-20 grid grid-cols-1 gap-5 pt-5 md:grid-cols-3  xl:grid-cols-5">
          {videosList &&
            videosList.map((video, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer duration-300 hover:scale-[1.02]"
                  onClick={() =>
                    navigate(`${LINKS.LINK_VIDEO_DETAIL(video.id)}`, {
                      state: { video: video },
                    })
                  }
                >
                  <NftCard
                    video={video.video}
                    title={video.title}
                    subtitle={`An entry level videos for web developers`}
                    date={`Created Date: ${formatDate(video.created)}`}
                    level={video.level}
                    buttonText={"Detail"}
                    disabled={""}
                    extra={""}
                    onClick={() => console.log("video")}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
