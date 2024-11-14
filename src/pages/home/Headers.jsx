import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import "video-react/dist/video-react.css"; // import css

import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import WhyWeBest from "./WhyWeBest";


const benefits = [
  "ব্যবসায় চ্যাটজিপিটির ব্যবহার করে গ্রোথ",
  "কিভাবে ব্যবসার আইডিয়া জেনারেট করবেন",
  "অর্গানিক রিচ বাড়াতে কনটেন্ট মেকিং আইডিয়া",
  "সল্প পুঁজি দিয়ে কিভাবে ব্যাবসা করবেন",
];
const vul = [
  "বিজনেস আইডিয়া সিলেক্ট করতে না পারা ",
  "কোথায় বেশি ফোকাস দিবো বুঝতে না পারা ",
  "ব্যবসায় সেল না পেয়ে হতাশ হয়ে যাওয়া ",
];





const Headers = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-full flex-col gap-16 bg-black   pt-2  sm:rounded-3xl lg:flex-row lg:items-center">
          <div className="w-full mx-auto flex-auto">
            <h2 className="text-[28px] font-bold tracking-tight text-green-600 sm:text-3xl">
            ব্যবসার শুরুতে ৩ টি প্রধান চ্যালেঞ্জ
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
            <div className='mt-6 w-full'>
                    <img className='w-full  rounded-sm ' src='https://res.cloudinary.com/dphjki297/image/upload/v1731165356/wrjvctfi5yritunnkgst.jpg' />
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
      ফ্রি তে ডাউনলোড করুন
    </div>
  </button>
</div>
            <p className="my-6 text-xl leading-8 text-yellow-500 text-justify">
            ব্যাবসার বিভিন্ন Idea জেনারেশন প্রসেস, অর্গানিকরিচ বাড়াতে বিভিন্ন কনটেন্ট আইডিয়ার খুটিনাটি এবং সিক্রেটস জানতে ফ্রিতে ডাউনলোড করুন ই-বুকটি ।
            </p>
            
            <h2 className="text-3xl mt-4  font-bold tracking-tight text-green-600 sm:text-4xl">
            যা আছে এই ই-বুকটিতে -
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
                  <h1 className="text-center text-red-500 my-3 line-through text-2xl">রেগুলার প্রাইসঃ <span>২০০</span> টাকা</h1>
                  <h1 className="text-center text-yellow-400 my-3 text-2xl">ফ্রি অফার দ্রুতই শেষ হয়ে যাবে</h1>
               
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
    <div id="add_to_cart" className="flex  gap-2 justify-center items-center">
      দ্রুত ডাউনলোড করুন
    </div>
  </button>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;

