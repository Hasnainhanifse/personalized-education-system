import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
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
import StudentQuizDetail from "views/client/quiz-detail";
import { LAYOUTS } from "types/global";
import { PATHS } from "types/global";
import { StudentExams } from "views/client/exams";

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
    component: <StudentCourses />,
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
    name: PATHS.PATH_QUIZ.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: `${PATHS.PATH_QUIZ}/${PATHS.PATH_DETAIL}`,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentQuizDetail />,
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
    name: PATHS.PATH_ASSIGNMENT.toUpperCase(),
    layout: LAYOUTS.CLIENT,
    path: `${PATHS.PATH_ASSIGNMENT}/${PATHS.PATH_DETAIL}`,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentQuizDetail />,
    display: false,
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
    name: "Main Dashboard",
    layout: LAYOUTS.ADMIN,
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    display: true,
  },
  {
    name: "NFT Marketplace",
    layout: LAYOUTS.ADMIN,
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
    display: true,
  },
  {
    name: "Data Tables",
    layout: LAYOUTS.ADMIN,
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
    display: true,
  },
  {
    name: "Profile",
    layout: LAYOUTS.ADMIN,
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
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
