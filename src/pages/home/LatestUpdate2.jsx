import React from "react";
import Pagination from "./Pagination";
const posts = [
  {
    id: 1,
    title: "Internet Download Manager",
    href: "#",
    description:
      "Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic...",
    imageUrl: "/idm.png",
    date: "6.41.2",
    datetime: "2020-03-16",
    category: { title: "web", href: "#" },
    author: {
      name: "02 Oct 2023",
      role: "15 Comments",
      href: "273736 Views",
    },
  },
  {
    id: 2,
    title: "Microsoft Office 2021",
    href: "#",
    description:
      "Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic...",
    imageUrl: "/mo.png",
    date: "6.41.2",
    datetime: "2020-03-16",
    category: { title: "windows", href: "#" },
    author: {
      name: "02 Oct 2023",
      role: "15 Comments",
      href: "273736 Views",
    },
  },
  {
    id: 3,
    title: "Pot Player",
    href: "#",
    description:
      "Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic...",
    imageUrl: "/pp.png",
    date: "6.41.2",
    datetime: "2020-03-16",
    category: { title: "multimedia", href: "#" },
    author: {
      name: "02 Oct 2023",
      role: "15 Comments",
      href: "273736 Views",
    },
  },
  {
    id: 4,
    title: "Wondershare Filmora",
    href: "#",
    description:
      "Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic...",
    imageUrl: "/wf.png",
    date: "6.41.2",
    datetime: "2020-03-16",
    category: { title: "utility", href: "#" },
    author: {
      name: "02 Oct 2023",
      role: "15 Comments",
      href: "273736 Views",
    },
  },
  {
    id: 5,
    title: "Windows 11 Pro",
    href: "#",
    description:
      "Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic...",
    imageUrl: "/w11.png",
    date: "6.41.2",
    datetime: "2020-03-16",
    category: { title: "windows", href: "#" },
    author: {
      name: "02 Oct 2023",
      role: "15 Comments",
      href: "273736 Views",
    },
  },
  // More posts...
];

const LatestUpdate2 = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="flex items-center gap-2">
            {/* <BiRadioCircleMarked className="w-7 h-7 animate-ping delay-700"></BiRadioCircleMarked> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-dot text-slate-700 dark:text-slate-50"
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
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            </svg>
            <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">
              Latest Updates
            </span>
          </h1>

          <div className="mt-10 space-y-16 md:space-y-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row "
              >
                <div className="relative aspect-square w-1/2 lg:w-56 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full aspect-square w-full rounded-xl bg-slate-50 object-cover"
                  />
                  {/* <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10" /> */}
                </div>
                <div>
                  <div className="flex items-center gap-x-3 md:gap-x-4 text-xs ">
                    <time
                      dateTime={post.datetime}
                      className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30"
                    >
                      {post.date}
                    </time>
                    <button
                      href={post.category.href}
                      className={`${post?.category?.title}`}
                      // className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/20"
                    >
                      {post.category.title}
                    </button>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:text-indigo-700">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-4 flex border-t border-slate-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4 text-slate-600 dark:text-slate-300">
                      <p className="flex items-center gap-2 text-xs">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-calendar"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                          <path d="M16 3v4"></path>
                          <path d="M8 3v4"></path>
                          <path d="M4 11h16"></path>
                          <path d="M11 15h1"></path>
                          <path d="M12 15v3"></path>
                        </svg>{" "}
                        02 Oct 2023{" "}
                      </p>
                      <p className="flex items-center gap-2 text-xs">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-message-dots"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                          <path d="M12 11l0 .01"></path>
                          <path d="M8 11l0 .01"></path>
                          <path d="M16 11l0 .01"></path>
                        </svg>{" "}
                        15 Comments
                      </p>
                      <p className="flex items-center gap-2 text-xs">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-flame"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                        </svg>
                        273736 Views
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="text-center my-9">
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate2;
