// @ts-nocheck
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { selectCurrentUser, selectAssesments } from "store";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "features/assessment/assessmentActions";
import { getUserProfile } from "features/auth/authActions";
import { useToast } from "@chakra-ui/react";

export default function StudentArticleDetail() {
  const { state } = useLocation();
  const { article } = state;

  if (article) {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
          <div
            className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[200px] md:py-[250px]"
            style={{ backgroundImage: `url(${article.image})` }}
          ></div>

          <div className="z-20 grid grid-cols-1 ">
            <div className="flex justify-between align-middle">
              <div className=" py-5 text-5xl font-bold">{article.title}</div>
            </div>

            <div className=" py-5 text-2xl font-normal">
              {article.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
