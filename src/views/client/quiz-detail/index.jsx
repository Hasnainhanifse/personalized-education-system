import React from "react";
import { useLocation } from "react-router-dom";

export default function StudentQuizDetail(props) {
  const location = useLocation();
  const { page } = location.state;
  console.log("page:", page);
  if (page == "assignments") {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        Assignments detail page
      </div>
    );
  } else if (page == "Quiz")
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        Quiz detail page
      </div>
    );
}
