// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import NftCard from "components/card/NftCard";
import { formatDate } from "helper/stringHelpers";
import { useSelector, useDispatch } from "react-redux";
import { selectAssesments, selectCurrentUser } from "store";
import { getCourses } from "features/assessment/assessmentActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LINKS } from "types/global";

export default function StudentCourses() {
  const { courses } = useSelector(selectAssesments);
  const { user } = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [coursesList, setCoursesList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      let form = new FormData();
      form.append("levelType", user.level);
      dispatch(getCourses({ levelType: user.level }));
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (courses && courses.result) {
        setCoursesList(courses.result);
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [courses]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="There are variety of courses available to learn"
          title="Choose your interested course and enroll to master the course"
          image={NftBanner1}
        />

        <div className="z-20 grid grid-cols-1 gap-5 pt-5 md:grid-cols-3  xl:grid-cols-5">
          {coursesList &&
            coursesList.map((course, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer duration-300 hover:scale-[1.02]"
                  onClick={() =>
                    navigate(`${LINKS.LINK_COURSE_DETAIL(course.id)}`, {
                      state: { course: course },
                    })
                  }
                >
                  <NftCard
                    image={course.image}
                    title={course.title}
                    subtitle={`An entry level course for web developers`}
                    date={`Created Date: ${formatDate(course.created)}`}
                    level={course.level}
                    buttonText={"Detail"}
                    disabled={""}
                    extra={""}
                    onClick={() => console.log("course")}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
