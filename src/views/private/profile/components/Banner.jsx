// @ts-nocheck
import React from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { useEffect, useState } from "react";

const Banner = ({ user }) => {
  const [profileInitial, setProfileInitial] = useState("");

  useEffect(() => {
    let unsubscribe = () => {
      let profileIntials = user.name.charAt(0);
      setProfileInitial(profileIntials);
    };

    return unsubscribe;
  });

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 text-5xl text-white dark:!border-navy-700">
          {profileInitial}
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {user.name}
        </h4>
        <p className="text-base font-normal text-gray-600">
          {!user.isAdmin ? "Student" : "Admin"}
        </p>
      </div>
    </Card>
  );
};

export default Banner;
