import React from "react";
import Container from "../../components/Container";

const EditorChoice2 = () => {
  return (
    <div className="py-16 bg-slate-100 dark:bg-slate-950 w-full">
      <Container>
        <h1 className="flex items-center gap-2 mb-9">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-diamond text-slate-700 dark:text-slate-50"
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
            <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path>
            <path d="M10 12l-2 -2.2l.6 -1"></path>
          </svg>
          <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">
            Editor's Choice
          </span>
        </h1>
        <div className="flex flex-col md:flex-row  gap-4 mt-4 px-[1px]">
          <div className="w-full  md:w-2/5 mx-auto">
            <article className="relative aspect-square  h-full md:h-[500px] w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 mb-7 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="/idm.png"
                alt=""
                className="absolute inset-0 -z-10 h-full md:h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                <button>
                  <span className="absolute inset-0" />
                  Internet Download Manager
                </button>
              </h3>
              <button className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 absolute top-4 left-4">
                WINDOWS
              </button>
            </article>
            <div className="flex flex-row gap-6">
              <div className="h-full md:h-60 aspect-square w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
                {/* <div className=" w-full"></div> */}
                <img
                  className="absolute object-fill h-full w-full opacity-60"
                  src="/mo.png"
                  alt=""
                />
                <button className="absolute text-left left-4 truncate w-11/12 bottom-4 font-semibold text-lg text-white">
                  Microsoft Office 2021
                </button>
                <button className="windows">
                  windows
                </button>
              </div>
              <div className="h-full md:h-60 aspect-square w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
                <img
                  className="absolute object-fill h-full w-full opacity-60"
                  src="/pp.png"
                  alt=""
                />
                <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                  Pot Player
                </h1>
                <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  MULTIMEDIA
                </button>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-slate-100 to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/pp.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Pot Player
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                MULTIMEDIA
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/wf.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left  mx-auto bottom-4 font-semibold text-lg text-white">
                Wondershare Filmora
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                UTILITY
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Windows 11 Pro
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                WINDOWS
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Windows 11 Pro
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                WINDOWS
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              {/* <div className=" w-full"></div> */}
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/mo.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Microsoft Office 2021
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                WINDOWS
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/pp.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Pot Player
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                MULTIMEDIA
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/wf.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Wondershare Filmora
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                UTILITY
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900 mb-6">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/idm.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4  font-semibold text-lg text-white">
                Internet Download Manager
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                WEB
              </button>
            </div>
            <div className="h-full md:h-60 w-full aspect-square md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 truncate w-11/12 text-left bottom-4 font-semibold text-lg text-white">
                Windows 11 Pro
              </h1>
              <button className="absolute top-4 left-4 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                WINDOWS
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditorChoice2;
