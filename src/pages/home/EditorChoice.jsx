import React from "react";
import Container from "../../components/Container";

const datas = [
  {
    id: 1,
    category: "windows",
    name: "Internet Download Manager",
    img: "/idm.png",
  },
  {
    id: 2,
    category: "security",
    name: "Pot Player",
    img: "/pp.png",
  },
  {
    id: 3,
    category: "utility",
    name: "Wondershare Filmora",
    img: "/wf.png",
  },
  {
    id: 4,
    category: "windows",
    name: "Windows 11 Pro",
    img: "/w11.png",
  },
  {
    id: 5,
    category: "windows",
    name: "Windows 11 Pro",
    img: "/w11.png",
  },
  {
    id: 6,
    category: "windows",
    name: "Microsoft Office 2021",
    img: "/mo.png",
  },
  {
    id: 7,
    category: "multimedia",
    name: "Pot Player",
    img: "/pp.png",
  },
  {
    id: 8,
    category: "windows",
    name: "Microsoft Office 2021",
    img: "/mo.png",
  },
  {
    id: 9,
    category: "multimedia",
    name: "Pot Player",
    img: "/pp.png",
  },
  {
    id: 10,
    category: "misc",
    name: "Wondershare Filmora",
    img: "/wf.png",
  },
  {
    id: 11,
    category: "windows",
    name: "Internet Download Manager",
    img: "/idm.png",
  },
  {
    id: 12,
    category: "windows",
    name: "Windows 11 Pro",
    img: "/w11.png",
  },
];

const EditorChoice = () => {
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
        <div>
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-6 mx-auto">
            {datas.map((data, i) => (
              <div key={data.id} className={`h-full  w-full aspect-square rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-slate-500 to-slate-900 ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img
                  className="absolute object-fill h-full w-full opacity-60"
                  src={data.img}
                  alt=""
                />
                <h1 className="absolute left-4 truncate pr-4 w-11/12 text-left bottom-4 font-semibold text-lg text-slate-300 hover:text-white dark:text-slate-300 hover:dark:text-white">
                  {data.name}
                </h1>
                <button className={`${data.category} absolute top-4 left-4`}>
                 {data.category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditorChoice;
