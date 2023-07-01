import React from "react";

export default function PageNotFound() {
  return (
    <div className="flex h-full w-full items-center justify-center px-2 pt-16 pb-16 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
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
              <button className="md my-2 rounded-lg border bg-indigo-600 py-4 px-8 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-full lg:w-auto">
                Take me Home!
              </button>
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
