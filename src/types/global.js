export const LAYOUTS = Object.freeze({
  AUTH: "/auth",
  PRIVATE: "private",
});

export const PATHS = Object.freeze({
  PATH_DASHBOARD: "dashboard",
  PATH_TRAIN_MODEL: "train-model",
  PATH_PROGRESS: "progress",
  PATH_QUIZ: "quiz",
  PATH_EXAMS: "exams",
  PATH_ASSIGNMENT: "assignments",
  PATH_PROFILE: "profile",
  PATH_COURSES: "courses",
  PATH_COURSE_DETAIL: "courses/:id",
  PATH_ARTICLES: "articles",
  PATH_ARTICLE_DETAIL: "articles/:id",
  PATH_VIDEOS: "videos",
  PATH_VIDEO_DETAIL: "videos/:id",
});

export const LINKS = Object.freeze({
  LINK_TRAIN_MODEL: `/${PATHS.PATH_TRAIN_MODEL}`,
  LINK_DASHBOARD: `/${PATHS.PATH_DASHBOARD}`,
  LINK_PROGRESS: `/${PATHS.PATH_PROGRESS}`,
  LINK_QUIZ: `/${PATHS.PATH_QUIZ}`,
  LINK_EXAMS: `/${PATHS.PATH_EXAMS}`,
  LINK_ASSIGMENT: `/${PATHS.PATH_ASSIGNMENT}`,
  LINK_PROFILE: `/${PATHS.PATH_PROFILE}`,
  LINK_COURSES: `/${PATHS.PATH_COURSES}`,
  LINK_ARTICLES: `/${PATHS.PATH_ARTICLES}`,
  LINK_VIDEOS: `/${PATHS.PATH_VIDEOS}`,
  LINK_COURSE_DETAIL: (id) => `/${PATHS.PATH_COURSES}/${id}`,
  LINK_ARTICLE_DETAIL: (id) => `/${PATHS.PATH_ARTICLES}/${id}`,
  LINK_VIDEO_DETAIL: (id) => `/${PATHS.PATH_VIDEOS}/${id}`,
});

export const USERLEVEL = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  EXPERT: "EXPERT",
  ADMIN: "ADMIN",
  STUDENT: "STUDENT",
};
