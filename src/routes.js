// @ts-nocheck
import React from "react";
import SignIn from "views/auth/SignIn";
import {
  MdLock,
  MdQuiz,
  MdOutlineAssignment,
  MdOutlineBook,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import SignUp from "views/auth/SignUp";
import StudentQuiz from "views/private/quiz";
import StudentAssignment from "views/private/assignment";
import StudentProfile from "views/private/profile";
import { LAYOUTS } from "types/global";
import { PATHS } from "types/global";

const routes = [
  {
    name: PATHS.PATH_QUIZ.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_QUIZ,
    icon: <MdQuiz className="h-6 w-6" />,
    component: <StudentQuiz />,
    display: true,
  },
  {
    name: PATHS.PATH_ASSIGNMENT.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_ASSIGNMENT,
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <StudentAssignment />,
    display: true,
  },
  // {
  //   name: PATHS.PATH_EXAMS.toUpperCase(),
  //   layout: LAYOUTS.PRIVATE,
  //   path: PATHS.PATH_EXAMS,
  //   icon: <MdOutlineBook className="h-6 w-6" />,
  //   component: <StudentExams />,
  //   display: true,
  // },
  {
    name: PATHS.PATH_PROFILE.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_PROFILE,
    icon: <MdOutlineSupervisedUserCircle className="h-6 w-6" />,
    component: <StudentProfile />,
    display: true,
  },
  {
    name: "Sign In",
    layout: LAYOUTS.AUTH,
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: LAYOUTS.AUTH,
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
];
export default routes;
