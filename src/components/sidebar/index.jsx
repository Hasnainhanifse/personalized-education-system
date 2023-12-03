// @ts-nocheck
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";
import React from "react";
import logo from "assets/img/logo.png";
import LevelBadge from "components/badge";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "store";
import { logout } from "features/auth/authSlice";
import { MdLogout } from "react-icons/md";
import { titleCase } from "helper/stringHelpers";

const Sidebar = ({ open, onClose, props }) => {
  const { user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  let filteredRoutes;
  if (props) {
    if (user.isAdmin) {
      filteredRoutes = routes
        .filter((route) => route.layout === props.layout)
        .filter((r) => r.isAdmin == user.isAdmin);
    } else {
      filteredRoutes = routes
        .filter((route) => route.layout === props.layout)
        .filter((r) => r.isStudent);
    }
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

  const LogoutButton = () => {
    return (
      <div
        className="relative mb-3 flex hover:cursor-pointer"
        onClick={logoutHandler}
      >
        <li className="my-[3px] flex cursor-pointer items-center px-8 text-red-400 duration-300 hover:text-red-500">
          <span>
            <MdLogout className={"h-6 w-6"} />
          </span>
          <p className={`leading-1 ml-4 flex font-bold  `}>
            {titleCase("Logout")}
          </p>
        </li>
      </div>
    );
  };

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

      <div className={`mx-[56px] mt-[10px] flex flex-col items-center gap-4`}>
        <div className="mt-1 ml-1  h-20  font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white ">
          <img
            src={logo}
            alt=""
            className=" h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
          />
        </div>
        {user.isAdmin ? (
          <LevelBadge level={"ADMIN"} />
        ) : (
          <LevelBadge level={user.level} />
        )}
      </div>

      <div className="mt-[10px] mb-3 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={filteredRoutes} />
        {user && <LogoutButton />}
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
