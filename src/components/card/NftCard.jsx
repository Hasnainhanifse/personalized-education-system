// @ts-nocheck
import Card from "components/card";
import React from "react";
import LevelBadge from "components/badge";

const NftCard = ({
  title,
  subtitle,
  image,
  video,
  level,
  date,
  extra,
  buttonText,
  onClick,
  disabled,
}) => {
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="flex h-full w-full flex-col justify-between">
        {image && (
          <div className="relative h-[150px] w-full">
            <img
              src={image}
              className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
          </div>
        )}

        {video && (
          <div className="relative h-[150px] w-full">
            <iframe
              className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              src={video}
            ></iframe>
          </div>
        )}

        <div>
          <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
            <div className="mb-2">
              {title && (
                <p className="text-lg font-bold text-navy-700 dark:text-white">
                  {" "}
                  {title}{" "}
                </p>
              )}
              {subtitle && (
                <p className="mt-1 text-sm font-medium text-navy-600 md:mt-2">
                  {subtitle}{" "}
                </p>
              )}
              {date && (
                <p className="mt-1 text-sm font-medium text-navy-600 md:mt-2">
                  {date}{" "}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <LevelBadge level={level && level} />
            <button
              disabled={disabled && disabled}
              onClick={onClick && onClick}
              className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 disabled:bg-gray-400 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            >
              {buttonText && buttonText}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
