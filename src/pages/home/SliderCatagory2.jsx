import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// const swiper = new Swiper('.swiper', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

export default function SliderCatagory2() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        
        modules={[Navigation]}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 30,
            },
          }}

        className="mySwiper text-center mx-auto"
        // cssMode={true}
        
        // mousewheel={true}
        // keyboard={true}
        // modules={[ Pagination]}
      >
        <SwiperSlide>
          <div>
            <button className=" w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-14 w-14" src="/windows.svg" alt="" />
              <h1 className="font-bold  ">Windows</h1>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <button className=" w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-[50px] w-[50px]" src="/graphics.svg" alt="" />
              <h1 className="font-bold">Graphic</h1>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <button className="w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-[50px] w-[50px]" src="/web.svg" alt="" />
              <h1 className="font-bold">Web</h1>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <button className="w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-[50px] w-[50px]" src="/multimedia.svg" alt="" />
              <h1 className="font-bold">Multimedia</h1>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <button className="w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-[50px] w-[50px]" src="/utilities.svg" alt="" />
              <h1 className="font-bold">Utilities</h1>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <button className="w-48 h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
              <img className="h-[50px] w-[50px]" src="/security.svg" alt="" />
              <h1 className="font-bold">Security</h1>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
