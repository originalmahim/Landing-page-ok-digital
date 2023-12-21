import React from "react";
import { BiCommentDots } from "react-icons/bi";
import Container from "../../components/Container";

const RecentComments = () => {
  return (
    <div className="py-5 text-slate-700">
      <>
        <h1 className="flex items-center gap-2 mb-10">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-message-dots text-slate-700 dark:text-slate-50"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
            <path d="M12 11l0 .01"></path>
            <path d="M8 11l0 .01"></path>
            <path d="M16 11l0 .01"></path>
          </svg>
          <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">Recent Comments</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Tanz</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400 ">Internet Download Manager</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Afroza</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400">Microsoft Office 2021</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Rokon</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400">Pot Player</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Lava</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400">Wondershare Filmora</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Tontu</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400">Windows 11 Pro</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-4">
            <img className="w-20 h-20 rounded-lg" src="/user.svg" alt="" />
            <div>
              <div className="flex gap-3 mb-2">
                <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">Xuel</h1>
                <button className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                02 Oct 2023
                </button>
              </div>
              <p className="text-slate-400">Stellar Recovery</p>
            </div>
          </div>
          
        </div>
      </>
    </div>
  );
};

export default RecentComments;
