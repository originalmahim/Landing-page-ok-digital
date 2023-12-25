import React from "react";
import Container from "../../components/Container";

const WhyWeBest = () => {
  return (
    <div  id="features" className="my-28 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-600 mb-12">কেন আমরাই সেরা</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-plant"
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
                <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                <path d="M12 15l0 -6" />
              </svg>
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              গার্ডেন ফ্রেশ
            </h1>

            <p className="text-center text-slate-600">
              আমাদের সকল পন্য বাগান থেকে সংগ্রহ করে সাথে সাথে গ্রাহকদের কাছে
              পৌছাই
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white">
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
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              অতুলনীয় স্বাদ
            </h1>

            <p className="text-center text-slate-600">
              আমরা প্রদান করি সেরা পন্যের সঠিক মান এবং অনন্য স্বাদের নিশ্চয়তা
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-report-medical"
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
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M10 14l4 0" />
                <path d="M12 12l0 4" />
              </svg>
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              ঔষধি গুনসম্পন্ন
            </h1>

            <p className="text-center text-slate-600">
              গ্যাস্ট্রিক, পাকস্থলী, সর্দি-কাশি, ডায়রিয়া, ক্ষুধামন্দাসহ নানা
              রোগের উপশম
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="h-20 w-20 rounded-xl bg-slate-100  p-6 text-green-600 group-hover:bg-green-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-coin-taka"
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
                <path d="M8 8l.553 -.276a1 1 0 0 1 1.447 .894v6.382a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5 -2.5v-.5h-1" />
                <path d="M8 11h7" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              </svg>
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-600">
              ক্যাশ অন ডেলিভারী
            </h1>

            <p className="text-center text-slate-600">
              আমাদের রয়েছে পন্য হাতে পেয়ে তারপর টাকা পরিশোধ করার সুব্যবস্থা
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyWeBest;
