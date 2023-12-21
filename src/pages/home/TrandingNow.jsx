import React from "react";
import { BiBoltCircle } from "react-icons/bi";
import Container from "../../components/Container";

const TrandingNow = () => {
  return (
    <div className=" py-10 text-slate-700">
      <>
        <h1 className="flex items-center gap-2 mb-8">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bolt text-slate-700 dark:text-slate-50"
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
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
          </svg>
          <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">Trending Now</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/20">
                WEB
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/mo.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
              Microsoft Office 2021
              </h1>
              <button className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
              WINDOWS
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/pp.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
              Pot Player
              </h1>
              <button className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-400/10 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/10 dark:ring-red-400/20">
              SECURITY
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/wf.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
              Wondershare Filmora
              </h1>
              <button className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-500 ring-1 ring-inset ring-yellow-600/20 dark:ring-yellow-400/20">
              UTILITY
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/w11.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
              Windows 11 Pro
              </h1>
              <button className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-400/30">
              GRAPHIC
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="inline-flex items-center rounded-md bg-pink-50 dark:bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-700 dark:text-pink-400 ring-1 ring-inset ring-pink-700/10 dark:ring-pink-400/20">
                MULTIMEDIA
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-lg" src="/wf.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700 mb-2">
              Wondershare Filmora
              </h1>
              <button className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-400/10 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10 dark:ring-slate-400/20">
              MISC
              </button>
            </div>
          </div>
          
        </div>
      </>
    </div>
  );
};

export default TrandingNow;
