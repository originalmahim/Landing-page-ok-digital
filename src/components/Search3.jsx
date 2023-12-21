import React, { useState } from "react";
const data2 = [
  {
    title: "Internet Download Manager",
    img: "/idm.png",
    virsion: "6.41.2",
    catagory: "WEB",
  },
  {
    title: "Microsoft Office 2021",
    img: "/mo.png",
    virsion: "6.41.2",
    catagory: "WINDOWS",
  },
  {
    title: "Pot Player",
    img: "/pp.png",
    virsion: "6.41.2",
    catagory: "MULTIMEDIA",
  },
  {
    title: "Wondershare Filmora",
    img: "/wf.png",
    virsion: "6.41.2",
    catagory: "UTILITY",
  },
  {
    title: "Windows 11 Pro",
    img: "/w11.png",
    virsion: "6.41.2",
    catagory: "WINDOWS",
  },
];

const Search3 = () => {
  // const [searchSuggestion, setSearchSuggestion] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [data, setData] = useState([]);
  const filteredData = data2.filter((item) =>
    item.title.toLowerCase().includes(searchValue?.toLowerCase())
  );

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_7"
        className="btn-neutral cursor-pointer mx-auto bg-none border-none"
      >
        <span>
          {/* <img className="h-12 w-80 md:w-[670px] mx-auto" src="/search.png" alt="" /> */}
          <div className="flex items-center justify-start gap-4 rounded-md w-[360px] md:w-[670px]  mx-auto text-center border border-slate-300 dark:border-slate-700 py-2 px-4 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
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
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
            Search for your desired software
          </div>
        </span>
      </label>
      {/* <label htmlFor="my_modal_7" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-slate-50 h-80 dark:bg-gray-900 overflow-y-auto rounded-md p-0">
          <div className="w-80 md:w-full max-w-[670px] h-12 mx-auto relative ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search here
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-50 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-800  dark:text-slate-100 focus:ring-gray-50 focus:border-gray-50 dark:focus:ring-gray-800 dark:focus:border-gray-800"
                placeholder="Search for your desired software..."
                required
              />
              <button
                type="submit"
                className="text-slate-400 absolute right-8 bottom-2.5   font-medium py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-right"
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
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              </button>
            </div>
            {searchValue !== "" && filteredData.length === 0 && (
              <div className="flex flex-col gap-4 text-center h-[300px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-file-x text-center mx-auto text-slate-400 dark:text-slate-100"
                    width="50"
                    height="60"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M10 12l4 4m0 -4l-4 4"></path>
                  </svg>
                </div>
                <h1 className="font-semibold text-slate-700 dark:text-slate-100 ">
                  No results found for "{searchValue}"
                </h1>
                <p className="text-slate-400 dark:text-slate-200">
                  We can’t find anything with that term at the moment, <br />{" "}
                  try searching something else.
                </p>
              </div>
            )}
            {searchValue && (
              <div className="z-50 absolute w-80 md:w-full max-w-[670px] mx-auto bg-slate-50 dark:bg-gray-900">
                {filteredData.map((item) => (
                  <div
                    key={item.title}
                    className="flex border-b-[1px] border-slate-100 dark:border-slate-700 p-4 justify-between  items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-gray-800 "
                  >
                    <div className="flex gap-2">
                      <img
                        className="h-8 w-8 rounded-md"
                        src={item.img}
                        alt=""
                      />
                      <button className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700 ">
                        {item.title}
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                        {item.virsion}
                      </p>
                      <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                        {item.catagory}
                      </button>
                    </div>
                  </div>
                ))}
                <div className="py-1 rounded-b-md dark:hover:bg-gray-800">
                  <p className="flex items-center gap-1 p-2 text-slate-400 dark:text-slate-50 cursor-pointer">
                    View all results{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-arrow-narrow-right"
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
                      <path d="M5 12l14 0"></path>
                      <path d="M15 16l4 -4"></path>
                      <path d="M15 8l4 4"></path>
                    </svg>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default Search3;
