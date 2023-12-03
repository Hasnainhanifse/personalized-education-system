// @ts-nocheck
import React from "react";
import SignIn from "views/auth/SignIn";
import {
  MdLock,
  MdQuiz,
  MdOutlineAssignment,
  MdOutlineBook,
  MdOutlineSupervisedUserCircle,
  MdArticle,
  MdOutlineReport,
  MdOutlineModelTraining,
} from "react-icons/md";
import { LAYOUTS } from "types/global";
import { PATHS } from "types/global";
import SignUp from "views/auth/SignUp";
import StudentQuiz from "views/private/quiz";
import StudentAssignment from "views/private/assignment";
import StudentProfile from "views/private/profile";
import StudentArticles from "views/private/articles";
import StudentArticleDetail from "views/private/articles/article-detail";
import StudentProgressReport from "views/private/progress-report";
import StudentCourses from "views/private/courses";
import StudentCourseDetail from "views/private/courses/course-detail";
import StudentVideos from "views/private/videos";
import StudentVideoDetail from "views/private/videos/video-detail";
import TrainModel from "views/private/train-model";

const routes = [
  {
    name: "Train",
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_TRAIN_MODEL,
    icon: <MdOutlineModelTraining className="h-6 w-6" />,
    component: <TrainModel />,
    display: true,
    isAdmin: true,
    isStudent: false,
  },
  {
    name: PATHS.PATH_QUIZ.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_QUIZ,
    icon: <MdQuiz className="h-6 w-6" />,
    component: <StudentQuiz />,
    display: true,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_ASSIGNMENT.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_ASSIGNMENT,
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <StudentAssignment />,
    display: true,
    isAdmin: true,
    isStudent: true,
  },
  {
    name: PATHS.PATH_COURSES.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_COURSES,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentCourses />,
    display: true,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_COURSES.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: `${PATHS.PATH_COURSE_DETAIL}`,
    icon: <MdOutlineBook className="h-6 w-6" />,
    component: <StudentCourseDetail />,
    display: false,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_ARTICLES.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_ARTICLES,
    icon: <MdArticle className="h-6 w-6" />,
    component: <StudentArticles />,
    display: true,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_ARTICLES.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: `${PATHS.PATH_ARTICLE_DETAIL}`,
    icon: <MdArticle className="h-6 w-6" />,
    component: <StudentArticleDetail />,
    display: false,
    isAdmin: false,
    isStudent: true,
  },

  {
    name: PATHS.PATH_VIDEOS.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_VIDEOS,
    icon: <MdArticle className="h-6 w-6" />,
    component: <StudentVideos />,
    display: true,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_VIDEOS.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: `${PATHS.PATH_VIDEO_DETAIL}`,
    icon: <MdArticle className="h-6 w-6" />,
    component: <StudentVideoDetail />,
    display: false,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_PROGRESS.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: `${PATHS.PATH_PROGRESS}`,
    icon: <MdOutlineReport className="h-6 w-6" />,
    component: <StudentProgressReport />,
    display: true,
    isAdmin: false,
    isStudent: true,
  },
  {
    name: PATHS.PATH_PROFILE.toUpperCase(),
    layout: LAYOUTS.PRIVATE,
    path: PATHS.PATH_PROFILE,
    icon: <MdOutlineSupervisedUserCircle className="h-6 w-6" />,
    component: <StudentProfile />,
    display: true,
    isAdmin: true,
    isStudent: true,
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
