// @ts-nocheck
import React from "react";
import banner from "assets/img/profile/profile-banner.png";
import Card from "components/card";
import { Avatar } from "@chakra-ui/react";
import LevelBadge from "components/badge";

const Banner = ({ user }) => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-80 w-full justify-center rounded-xl bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 text-5xl text-white dark:!border-navy-700">
          <Avatar size="xl" name={`${user.firstName} ${user.lastName}`} />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {user.name}
        </h4>
        <p className="text-base font-normal text-gray-600">
          {user.isAdmin ? (
            <LevelBadge level={"ADMIN"} />
          ) : (
            <LevelBadge level={"STUDENT"} />
          )}
        </p>
      </div>
    </Card>
  );
};

export default Banner;
