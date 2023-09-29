// @ts-nocheck
import Card from "components/card";
import React from "react";
import { Link } from "react-router-dom";

const NftCard = ({
  title,
  author,
  image,
  extra,
  permalink,
  permalinkText,
  page,
}) => {
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        {image && (
          <div className="relative w-full">
            <img
              src={image}
              className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
          </div>
        )}

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-col md:items-start lg:flex-row lg:justify-center xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-center">
          {permalink && page ? (
            <Link to={permalink} state={{ page: page }}>
              <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
                {permalinkText}
              </button>
            </Link>
          ) : (
            <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
              {permalinkText}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
