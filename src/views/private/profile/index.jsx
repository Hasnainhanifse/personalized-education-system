// @ts-nocheck
import React from "react";
import Banner from "./components/Banner";
import General from "./components/General";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store";

const StudentProfile = () => {
  const { user } = useSelector(selectCurrentUser);
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex h-fit w-full justify-start">
        <div className="w-full lg:!mb-0">
          <Banner user={user} />
        </div>
      </div>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-1">
        <General user={user} />
      </div>
    </div>
  );
};

export default StudentProfile;
