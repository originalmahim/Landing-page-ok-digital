import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "UI/UX Design",
  "Social Media Manager",
  "Boosting Service",
];

const BusinessSection2 = () => {
  return (
    <div className="dark:bg-slate-900 py-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 py-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img className="w-[420px]" src="/laptop.png" alt="" />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-700 dark:text-white">
                Need an online presence?
              </h2>
              <p className="mt-6 leading-8 text-slate-500 dark:text-slate-400">
                CyberSpace Digital is here to help you shape your dream! We are
                a creative agency providing various digital services to renowned
                brands. List of services that we offer...
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-slate-500 leading-7 dark:text-slate-400 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
              <button className="btn btn-primary bg-indigo-700 hover:bg-indigo-600 border-0 capitalize">
                Get Started Now{" "}
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
              </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          {/* <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BusinessSection2;
