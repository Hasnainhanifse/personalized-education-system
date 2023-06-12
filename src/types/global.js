export const LAYOUTS = Object.freeze({
  ADMIN: "/admin",
  AUTH: "/auth",
  CLIENT: "/client",
});

export const PATHS = Object.freeze({
  PATH_PROGRESS: "progress",
  PATH_QUIZ: "quiz",
  PATH_EXAMS: "exams",
  PATH_ASSIGNMENT: "assignments",
  PATH_PROFILE: "profile",
  PATH_COURSES: "courses",
  PATH_ARTICLES: "articles",
});

export const LINKS = Object.freeze({
  LINK_PROGRESS: `${LAYOUTS.CLIENT}/${PATHS.PATH_PROGRESS}`,
  LINK_QUIZ: `${LAYOUTS.CLIENT}/${PATHS.PATH_QUIZ}`,
  LINK_EXAMS: `${LAYOUTS.CLIENT}/${PATHS.PATH_EXAMS}`,
  LINK_ASSIGMENT: `${LAYOUTS.CLIENT}/${PATHS.PATH_ASSIGNMENT}`,
  LINK_PROFILE: `${LAYOUTS.CLIENT}/${PATHS.PATH_PROFILE}`,
  LINK_COURSES: `${LAYOUTS.CLIENT}/${PATHS.PATH_COURSES}`,
  LINK_ARTICLES: `${LAYOUTS.CLIENT}/${PATHS.PATH_ARTICLES}`,
});
