import React from "react";

const Help = () => {
  return (
    <>
      <div
          className="hero min-h-[300px] rounded-md bg-slate-100 dark:bg-slate-950 my-28"
          style={{
            backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148941599.jpg?w=1480&t=st=1703093877~exp=1703094477~hmac=603b64677b53d17eabbdaa093670fcac4eed38ee830dbfe41fad96aacda7ed7c)",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[670px] flex flex-col justify-center items-center">
              <h1 className="mb-5 text-3xl font-bold text-slate-700 dark:text-slate-50">
              আপনার কি সাহায্য প্রয়োজন?
              </h1>
              <p className="mb-5 text-black">
              যেকোন জিজ্ঞাসা ও অর্ডারজনিত সমস্যায় নক করুন আমাদের ফেসবুক পেজে। আমরা আছি সকাল ১০ টা থেকে রাত ৮ টা পর্যন্ত আপনার সেবায়।
              </p>
              <button className="bg-green-600 hidden hover:bg-green-700 border-0 capitalize rounded-[10px] px-5 py-2 text-sm font-semibold text-white shadow-sm  gap-2 items-center justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
              এখনই কল করুন
                
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Help;
