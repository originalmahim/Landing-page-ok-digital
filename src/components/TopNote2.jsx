import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const TopNote2 = () => {
  return (
    <div className="flex items-center gap-x-6 bg-indigo-700 dark:bg-indigo-700 px-6 py-1.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-xs md:text-sm leading-6 text-white flex">
        <a href="#" className="flex gap-1">
          <strong className="font-semibold"></strong>
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-sparkles"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
            </svg>
          </span>
          CyberSpace v6 version live now. Enjoy!&nbsp;
          
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-6 w-6 bg-indigo-800 dark:bg-indigo-800 rounded-full text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default TopNote2;
