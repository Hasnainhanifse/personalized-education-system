/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";
import React from "react";
import logo from "assets/img/logo.png";

const Sidebar = ({ open, onClose, props }) => {
  let filteredRoutes;
  if (props) {
    filteredRoutes = routes.filter((route) => route.layout == props.layout);
  }

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[10px] flex items-center`}>
        <div className="mt-1 ml-1 h-20 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <img
            src={logo}
            alt=""
            className=" h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
          />
        </div>
      </div>
      <div className="mt-[20px] mb-3 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={filteredRoutes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
