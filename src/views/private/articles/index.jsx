// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import NftCard from "components/card/NftCard";
import { formatDate } from "helper/stringHelpers";
import { useSelector, useDispatch } from "react-redux";
import { selectAssesments, selectCurrentUser } from "store";
import { getArticles } from "features/assessment/assessmentActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "types/global";
import { LINKS } from "types/global";

export default function StudentArticles() {
  const { articles } = useSelector(selectAssesments);
  const { user } = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [articlesList, setArticlesList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(getArticles({}));
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (articles && articles.result) {
        setArticlesList(articles.result);
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [articles]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Read articles to enhance you knowledge"
          title="Articles are the best way to explore lates technologies"
          image={NftBanner1}
        />

        <div className="z-20 grid grid-cols-1 gap-5 pt-5 md:grid-cols-3  xl:grid-cols-5">
          {articlesList &&
            articlesList.map((article, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer duration-300 hover:scale-[1.02]"
                  onClick={() =>
                    navigate(`${LINKS.LINK_ARTICLE_DETAIL(article.id)}`, {
                      state: { article: article },
                    })
                  }
                >
                  <NftCard
                    image={article.image}
                    title={article.title}
                    subtitle={`An entry level Article for web developers`}
                    date={`Created Date: ${formatDate(article.created)}`}
                    level={article.level}
                    buttonText={"Detail"}
                    disabled={""}
                    extra={""}
                    onClick={() => console.log("article")}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
