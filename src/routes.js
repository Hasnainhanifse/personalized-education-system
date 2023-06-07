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
} from "react-icons/md";
import SignUp from "views/auth/SignUp";
import StudentDashboard from "views/client/dashboard";
import StudentQuiz from "views/client/quiz";
import StudentAssignment from "views/client/assignment";
import StudentCourses from "views/client/courses";
import StudentProfile from "views/client/profile";
import { LAYOUTS } from "types/global";

const routes = [
  {
    name: "Dashboard",
    layout: LAYOUTS.CLIENT,
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <StudentDashboard />,
  },
  {
    name: "Quiz",
    layout: LAYOUTS.CLIENT,
    path: "quiz",
    icon: <MdQuiz className="h-6 w-6" />,
    component: <StudentQuiz />,
  },
  {
    name: "Assignments",
    layout: LAYOUTS.CLIENT,
    path: "assignment",
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <StudentAssignment />,
  },
  {
    name: "Courses",
    layout: LAYOUTS.CLIENT,
    path: "courses",
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentCourses />,
  },
  {
    name: "Profile",
    layout: LAYOUTS.CLIENT,
    path: "profile",
    icon: <MdOutlineSupervisedUserCircle className="h-6 w-6" />,
    component: <StudentProfile />,
  },
  {
    name: "Main Dashboard",
    layout: LAYOUTS.ADMIN,
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: LAYOUTS.ADMIN,
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: LAYOUTS.ADMIN,
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: LAYOUTS.ADMIN,
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
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
