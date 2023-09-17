import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-2 pt-16 pb-16 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <div className="relative">
          <div className="absolute">
            <div className=" ">
              <h1 className="my-2 text-2xl font-bold text-gray-800 dark:text-white">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800 dark:text-white">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <Link to="/">
                <button className="md my-2 rounded-lg border bg-indigo-600 py-2 px-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-auto ">
                  Take me Home!
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
