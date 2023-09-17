import React from "react";

// Auth Imports
// @ts-ignore
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdLock,
  MdQuiz,
  MdOutlineAssignment,
  MdOutlineBook,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
// @ts-ignore
import SignUp from "views/auth/SignUp";
// @ts-ignore
import StudentQuiz from "views/client/quiz";
// @ts-ignore
import StudentAssignment from "views/client/assignment";

// @ts-ignore
import StudentProfile from "views/client/profile";

// @ts-ignore
import { LAYOUTS } from "types/global";
// @ts-ignore
import { PATHS } from "types/global";
// @ts-ignore
import { StudentExams } from "views/client/exams";

// @ts-ignore
import StudentArticleDetail from "views/client/articles/detail";

const routes = [
  {
    name: PATHS.PATH_QUIZ.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_QUIZ,
    icon: <MdQuiz className="h-6 w-6" />,
    component: <StudentQuiz />,
    display: true,
  },
  {
    name: PATHS.PATH_ARTICLES.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: `${PATHS.PATH_ARTICLES}/${PATHS.PATH_DETAIL}`,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentArticleDetail />,
    display: false,
  },
  {
    name: PATHS.PATH_ASSIGNMENT.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_ASSIGNMENT,
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <StudentAssignment />,
    display: true,
  },
  {
    name: PATHS.PATH_EXAMS.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_EXAMS,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentExams />,
    display: true,
  },
  {
    name: PATHS.PATH_PROFILE.toUpperCase(),
    layout: LAYOUTS.CLIENT,
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
