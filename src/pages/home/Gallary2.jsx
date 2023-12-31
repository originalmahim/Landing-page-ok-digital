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

const images = [
  {
    id: 1,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411071827_864466802353286_1798985628233004209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_-K7JzHYGjwAX_CqnKT&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCGyJqvQFORraW4L-ffAcW_1vBUpJMEdPpF3R6Y1A4UVA&oe=65878ABC",
  },
  {
    id: 2,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC",
  },
  {
    id: 3,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411131277_862384709228162_7122716054042689418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=fmJ3Tnb0OxcAX_-wxAy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAxQK-bUlQjxzzGriaDxYXa3Zq9QJ6mz6svJi2VIQP5Vw&oe=658846F7",
  },
  {
    id: 4,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/409009017_858145352985431_383209555235447952_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F6KUTcIA6ZoAX8fspDM&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA_mfQ0HCEUFaiGXJ2wlnEanCo97b6vaHQW5uouTMp9MA&oe=6587B32D",
  },
  {
    id: 5,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC",
  },
  {
    id: 6,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/409009017_858145352985431_383209555235447952_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F6KUTcIA6ZoAX8fspDM&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA_mfQ0HCEUFaiGXJ2wlnEanCo97b6vaHQW5uouTMp9MA&oe=6587B32D",
  },
  {
    id: 7,
    url: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/411437365_863795805753719_8755839441510138374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xtKXX4OArnsAX-0edYW&_nc_ht=scontent.fdac5-2.fna&oh=00_AfA85Dzd2fen73UUo7RYtSsDUsqx35ulrZAyqNcOtA1gmg&oe=6587D7FC",
  },
];
const photos = [
  {
    id: 1,
    url: "/image.png",
  },
  {
    id: 2,
    url: "/image (1).png",
  },
  {
    id: 3,
    url: "/image (2).png",
  },
  {
    id: 4,
    url: "/image (3).png",
  },
  {
    id: 5,
    url: "/image.png",
  },
  {
    id: 6,
    url: "/image (1).png",
  },
  {
    id: 7,
    url: "/image (2).png",
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
    <div className="">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-12">
        চুইঝাল গ্যালারী
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
