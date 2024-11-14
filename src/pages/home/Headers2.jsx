import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import "video-react/dist/video-react.css"; // import css

import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import WhyWeBest from "./WhyWeBest";


const benefits = [
  "চ্যাটজিপিটি কিলার প্রমট আইডিয়া , Act As প্রম্পটের সর্বোচ্চ ব্যবহার এবং চিটশীট ।",
  "2500+ এ আই টুলসের ডেটাবেজ এক্সেস , যা আপনার উদ্যোক্তা জার্নি কে করে তুলবে ঝামেলাহীন ।",
  "৭০+ বিদেশি বিজনেস আইডিয়ার ডেটাবেজ ।  এই বিজনেস গুলো বাংলাদেশে শুরু করার সকল ধরনের গাইডলাইন ও তথ্য দেয়া আছে।",
  "২৫+ অর্গানিক কনটেন্ট আইডিয়া , যা আপনার ব্যবসাকে সবার থেকে আলাদা করে তুলবে ।",
  "সেলস কনটেন্ট ফর্মুলা , কনটেন্ট ক্রিয়েশন গাইডলাইন এবং দেশি এফ কমার্স বিজনেস গুলোর কেস স্টাডি ।"
];
const vul = [
  "বিজনেস আইডিয়ার প্রপার এক্সিকিউশন করতে না পারা ।",
  "কোথায় বেশি ফোকাস দিবো বুঝতে না পারা",
  "সেলস এড রান করে সেল পাওয়ার উপরে নির্ভরশীল হওয়া ।",
];
const fayda = [
  "ব্যাবসাতে AI এর ব্যবহার কৌশল শিখবেন , যা আপনাকে করে তুলবে অপ্রতিরোধ্য ।",
  "নতুন নতুন আইডিয়া জানবেন , আইডিয়ার প্রপার এক্সিকিউশন শিখবেন ।",
  "ডেটাবেজে থাকা একটি আইডিয়া আপনার জীনব বদলে দিতে পারে ।",
  
  "কনটেন্ট মেকিং ও অপ্রতিরোধ্য অফার তৈরির সিক্রেটস আইডিয়া জানবেন",
  "বিভিন্ন কম্পানির কেস স্টাডি পড়ে , নতুন মাত্রা এড করতে বিজনেসে ।",
  "থাকছে whatsapp Private Group এক্সেস , যেখানে শেয়ার করা হবে দারুন সব ডিসকাশন । যা নতুন মাত্রা এড করবে আপনার বিজনেসে।"
];




const Headers2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-full flex-col gap-16 bg-black   pt-6  sm:rounded-3xl lg:flex-row lg:items-center">
          <div className="w-full mx-auto flex-auto">
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            বিজনেস সিক্রেটস এখন আপনার হাতের নাগালে !!
            </h2> 
            <div className='mt-6 w-full'>
                    <img className='w-full  rounded-sm ' src='https://res.cloudinary.com/dphjki297/image/upload/v1731491547/v1xk1j1fw4x3dymhow8x.jpg' />
                </div>
                <div
  id="cart"
  className="mt-3 items-center justify-center text-center"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "AddToCart",
      Click_id: "AddToCart",
    });
    navigate("/chelkout/");
  }}
>
  <button id="carted"
    className="rounded-[10px] cursor-pointer bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 items-center"
  >
    <div id="add_to_cart" className="flex gap-2 justify-center items-center">
      <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
      <span className="pt-[4px]">জয়েন করুন</span>
    </div>
  </button>
</div>
            <p className="my-6 text-xl leading-8 text-yellow-500 text-justify">
            "একটি ইউনিক আইডিয়া পৃথিবী বদলে দিতে পারে" - এই কথাটা এখন বেশ পুরোনো। কোন আইডিয়াই এখন আর নতুন নয় । তাই মূলত আইডিয়া ইউথ ইউনিক এক্সিকিউশন ই পারে খেলা বদলে দিতে ।
            </p>
            {/* <h2 className="flex items-center justify-center mt-4 text-2xl font-bold tracking-tight text-green-600 sm:text-2xl">
            বাংলাদেশের স্বনামধন্য কিছু কম্পানি 
            </h2> 
            <p className="my-2 text-md  text-yellow-500 text-justify">
            ইউনিক এক্সিচিউশনের ফলে আজ তারা এতো বড় প্রতিষ্ঠান
            </p> */}
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            ব্যবসার শুরুতে ৩ টি প্রধান ভুল
            </h2> 
            <ul
              role="list"
              className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
            >
              {vul.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-x-3 text-xl text-slate-400"
                >
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none text-yellow-500  "
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <h2 className="text-3xl mt-4  font-bold tracking-tight text-green-600 sm:text-4xl">
            যা আছে এই মেম্বারশীপে --
            </h2>
            <ul
              role="list"
              className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-x-3 text-xl text-slate-400"
                >
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none text-yellow-500  "
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <h2 className="text-3xl mt-4  font-bold tracking-tight text-green-600 sm:text-4xl">
            যেভাবে লাভবান হবেন -
            </h2>
            <ul
              role="list"
              className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
            >
              {fayda.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-x-3 text-xl text-slate-400"
                >
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none text-yellow-500  "
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div
  id="cart"
  className="mt-3 items-center justify-center text-center"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "AddToCart",
      Click_id: "AddToCart",
    });
    navigate("/chelkout/");
  }}
>
  <button id="carted"
    className="rounded-[10px] cursor-pointer bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 items-center"
  >
    <div id="add_to_cart" className="flex gap-2 justify-center items-center">
      <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
      <span className="pt-[4px]">জয়েন করতে চাই </span>
    </div>
  </button>
</div>
<div className="my-4 flex items-center justify-center">
  <img src="https://res.cloudinary.com/dphjki297/image/upload/v1731489048/gaefroatplugwsnm47rn.png" alt="" />
</div>
<WhyWeBest></WhyWeBest>
                  <h1 className="text-center text-red-500 my-3 line-through text-3xl">রেগুলার প্রাইসঃ <span>২০০০</span> টাকা</h1>
                  <h1 className="text-center my-3 text-3xl">ডিসকাউন্ট প্রাইসঃ <span>৬৮৫</span> টাকা</h1>
               
            <div
  id="cart"
  className="mt-3 items-center justify-center text-center"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "AddToCart",
      Click_id: "AddToCart",
    });
    navigate("/chelkout/");
  }}
>
  <button id="carted"
    className="rounded-[10px] cursor-pointer bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 items-center"
  >
    <div id="add_to_cart" className="flex gap-2 justify-center items-center">
      <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
      <span className="pt-[4px]">জয়েন করুন</span>
    </div>
  </button>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Headers2;
