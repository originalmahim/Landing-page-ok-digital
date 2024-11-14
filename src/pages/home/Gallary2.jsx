import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// light imag

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const photos = [
  {
    id: 1,
    url: "https://i.ibb.co/VSYVDpL/Screenshot-2024-05-13-234453.png",
  },
  {
    id: 2,
    url: "https://business.pizion.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-1.47.33-AM.png",
  },
  {
    id: 3,
    url: "https://business.pizion.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-1.54.18-AM.png",
  },
  {
    id: 4,
    url: "https://business.pizion.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-1.52.50-AM.png",
  },
  {
    id: 5,
    url: "https://business.pizion.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-1.48.33-AM.png",
  },
  {
    id: 6,
    url: "https://business.pizion.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-1.44.14-AM.png",
  },
  
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-1/2 md:bottom-28 z-50 bg-slate-200 hover:bg-slate-100 rounded-full p-1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-1 top-1/2  md:bottom-28 z-50 bg-slate-200 hover:bg-slate-100 rounded-full p-1 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
    </div>
  );
};

const Gallary2 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
      কন্টেন্ট প্রিভিউ গ্যালারী
      </h1>
      <div id="gallary">
        <div className="App relative">
          <div className="App">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              //   slidesPerView="auto"
            >
              {photos.map((image) => (
                <SwiperSlide key={image.id} >
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                  >
                    <a href={image.url} className="mx-auto">
                      <img
                        className="w-full h-full rounded-lg aspect-square"
                        alt={image.id}
                        src={image.url}
                      />
                    </a>
                  </LightGallery>
                </SwiperSlide>
              ))}
              
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary2;
