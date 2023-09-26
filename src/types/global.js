export const LAYOUTS = Object.freeze({
  AUTH: "/auth",
  PRIVATE: "private",
});

export const PATHS = Object.freeze({
  PATH_DASHBOARD: "dashboard",
  PATH_PROGRESS: "progress",
  PATH_QUIZ: "quiz",
  PATH_EXAMS: "exams",
  PATH_ASSIGNMENT: "assignments",
  PATH_PROFILE: "profile",
  PATH_COURSES: "courses",
  PATH_ARTICLES: "articles",
  PATH_VIDEOS: "videos",
  PATH_DETAIL: ":id",
});

export const LINKS = Object.freeze({
  LINK_DASHBOARD: `/${PATHS.PATH_DASHBOARD}`,
  LINK_PROGRESS: `/${PATHS.PATH_PROGRESS}`,
  LINK_QUIZ: `/${PATHS.PATH_QUIZ}`,
  LINK_EXAMS: `/${PATHS.PATH_EXAMS}`,
  LINK_ASSIGMENT: `/${PATHS.PATH_ASSIGNMENT}`,
  LINK_PROFILE: `/${PATHS.PATH_PROFILE}`,
  LINK_COURSES: `/${PATHS.PATH_COURSES}`,
  LINK_ARTICLES: `/${PATHS.PATH_ARTICLES}`,
  LINK_VIDEOS: `/${PATHS.PATH_VIDEOS}`,
});
