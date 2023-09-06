import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import StaffAssignment from "views/admin/assignment";
import StaffQuiz from "views/admin/quiz";
import StaffCourses from "views/admin/courses";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdLock,
  MdQuiz,
  MdOutlineAssignment,
  MdOutlineBook,
  MdOutlineSupervisedUserCircle,
  MdPermMedia,
  MdArticle,
} from "react-icons/md";
import SignUp from "views/auth/SignUp";
import StudentDashboard from "views/client/dashboard";
import StudentQuiz from "views/client/quiz";
import StudentAssignment from "views/client/assignment";
import StudentCourses from "views/client/courses";
import StudentProfile from "views/client/profile";
import StudentVideos from "views/client/videos";
import { LAYOUTS } from "types/global";
import { PATHS } from "types/global";
import { StudentExams } from "views/client/exams";
import StudentArticles from "views/client/articles";
import StudentArticleDetail from "views/client/articles/detail";

const routes = [
  {
    name: PATHS.PATH_PROGRESS.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_PROGRESS,
    icon: <MdHome className="h-6 w-6" />,
    component: <StudentDashboard />,
    display: true,
  },
  {
    name: PATHS.PATH_COURSES.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_COURSES,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentCourses />,
    display: true,
  },
  {
    name: PATHS.PATH_ARTICLES.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_ARTICLES,
    icon: <MdArticle className="h-6 w-6" />,
    component: <StudentArticles />,
    display: true,
  },
  {
    name: PATHS.PATH_VIDEOS.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: PATHS.PATH_VIDEOS,
    icon: <MdPermMedia className="h-6 w-6" />,
    component: <StudentVideos />,
    display: true,
  },
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
    name: PATHS.PATH_DASHBOARD.toUpperCase(),
    layout: LAYOUTS.ADMIN,
    path: PATHS.PATH_DASHBOARD,
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    display: true,
  },
  {
    name: PATHS.PATH_ASSIGNMENT.toUpperCase(),
    layout: LAYOUTS.ADMIN,
    path: PATHS.PATH_ASSIGNMENT,
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <StaffAssignment />,
    secondary: true,
    display: true,
  },
  {
    name: PATHS.PATH_QUIZ.toUpperCase(),
    layout: LAYOUTS.ADMIN,
    path: PATHS.PATH_QUIZ,
    icon: <MdQuiz className="h-6 w-6" />,
    component: <StaffQuiz />,
    secondary: true,
    display: true,
  },
  {
    name: PATHS.PATH_COURSES.toUpperCase(),
    layout: LAYOUTS.ADMIN,
    path: PATHS.PATH_COURSES,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StaffCourses />,
    display: true,
  },
  {
    name: PATHS.PATH_PROFILE.toUpperCase(),
    layout: LAYOUTS.ADMIN,
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
