import React from "react";
import Container from "../../components/Container";

const WhyWeBest = () => {
  return (
    <div  id="features" className="my-10 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-600 mb-12">কেন আমরাই সেরা</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            {/* <div className="h-20 w-20 rounded-xl bg-black border  p-6 text-yellow-500 group-hover:bg-green-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trophy"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 21l8 0" />
                <path d="M12 17l0 4" />
                <path d="M7 4l10 0" />
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              </svg>
            </div> */}
            <h1 className="font-semibold text-xl text-yellow-600 group-hover:text-green-600">
            শতভাগ নিশ্চয়তা
            </h1>

            <p className="text-center text-white">
              এমন সব আইডিয়া এবং ইউনিক সব কনটেন্ট মেকিং ট্রিকস সম্পর্কে আপনি জানতে পারবেন , যা হয়তো আপনি কখনো কল্পনা করেন নি ।
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">

            <h1 className="font-semibold text-xl text-yellow-600">
            নিজেদের রিসার্চ 
            </h1>

            <p className="text-center text-white">
            আমরা নিজেরা সময় নিয়ে ভালো ভাবে রিসার্চ করে জিনিষগুলো বানিয়েছি। তাই আমরা অত্যন্ত আশাবাদী । আমরা সস্তায় বস্তা বিক্রি করি না , এমন সব কাজের জিনিষ আপনি পাচ্ছেন যা লাইফ চেঞ্জিং ।
            </p>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default WhyWeBest;
