"use client";

import React from "react";

const TimeLine = () => {
  return (
    <>
      {/* Timeline */}
      <div>
        {/* Heading */}
        <div className="ps-2 m-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            1 Aug, 2023
          </h3>
        </div>
        {/* End Heading */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <img
                className="flex-shrink-0 size-7 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg
                className="flex-shrink-0 size-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1={16} x2={8} y1={13} y2={13} />
                <line x1={16} x2={8} y1={17} y2={17} />
                <line x1={10} x2={8} y1={9} y2={9} />
              </svg>
              Created Preline in React task
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Find more detailed insctructions here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <img
                className="flex-shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <img
                className="flex-shrink-0 size-7 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Marked nstall Charts completed
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <img
                className="flex-shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Heading */}
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            31 Jul, 2023
          </h3>
        </div>
        {/* End Heading */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="flex-shrink-0 size-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3h5v5" />
                  <path d="M8 3H3v5" />
                  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
                  <path d="m15 9 6-6" />
                </svg>
              </span>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Just chill for now... 😉
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
      </div>
      {/* End Timeline */}
    </>
  );
};

export default TimeLine;
