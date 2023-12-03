// @ts-nocheck
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { selectCurrentUser, selectAssesments } from "store";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "features/assessment/assessmentActions";
import { getUserProfile } from "features/auth/authActions";
import { useToast } from "@chakra-ui/react";

export default function StudentCourseDetail() {
  const { state } = useLocation();
  const { user } = useSelector(selectCurrentUser);
  const { userCourse } = useSelector(selectAssesments);
  const dispatch = useDispatch();
  const toast = useToast();
  const { course } = state;

  const enrollStudent = () => {
    if (user && course) {
      if (!user.courses.includes(course.id)) {
        dispatch(enrollCourse({ user, courseId: course.id }));
      } else {
        toast({
          title: "Course Error",
          description: `${course.title} already enrolled.`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    const unsubscribe = () => {
      if (userCourse) {
        dispatch(getUserProfile({ user: user.id }));
        toast({
          title: "Alert",
          description: `${course.title} enrolled successfully.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [userCourse]);

  if (course) {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
          <div
            className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[200px] md:py-[250px]"
            style={{ backgroundImage: `url(${course.image})` }}
          ></div>

          <div className="z-20 grid grid-cols-1 ">
            <div className="flex justify-between align-middle">
              <div className=" py-5 text-5xl font-bold">{course.title}</div>
              <button
                className="linear mt-5 h-[50px] rounded-[20px] bg-brand-900 px-[80px] align-middle  text-xl font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 disabled:bg-gray-400 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                onClick={enrollStudent}
                disabled={user && user.courses.includes(course.id)}
              >
                {user && user.courses.includes(course.id)
                  ? "Enrolled"
                  : "Enroll"}
              </button>
            </div>

            <div className=" py-5 text-2xl font-normal">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              necessitatibus praesentium veniam ullam ex qui magnam error, sequi
              corrupti distinctio, dolore laboriosam? Velit et eius impedit
              voluptas architecto quasi obcaecati?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate necessitatibus praesentium
              veniam ullam ex qui magnam error, sequi corrupti distinctio,
              dolore laboriosam? Velit et eius impedit voluptas architecto quasi
              obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate necessitatibus praesentium veniam ullam ex qui magnam
              error, sequi corrupti distinctio, dolore laboriosam? Velit et eius
              impedit voluptas architecto quasi obcaecati?
            </div>
          </div>
        </div>
      </div>
    );
  }
}
