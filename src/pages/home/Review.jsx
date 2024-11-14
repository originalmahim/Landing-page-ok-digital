import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    description:
      "যেহেতু বেসরকারি একটি প্রতিষ্ঠান এ জব করছি তাই ভাবলাম বিজনেস আইডিয়া গুলো নিলেতো ভালোই হয় । রিস্ক নিয়ে হলেও সেন্ড মানি করে বসে থাকলাম এই ভেবে যে, যদি না দেয়!! বা কি না কি দিবে এই ভেবে। কিন্তু না ! ৪০/৫০ সেকেন্ড এর মাথায় মেম্বারশীপে জয়েন হলাম ।  Thank you so much.  কথা এবং কাজে মিল রাখার জন্য ",
    name: "Tanvir Hassan",
    address: "Dhaka",
    url: "https://www.facebook.com/",
    photo:"https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-1/365566772_1440743696770635_1217846182814166240_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=J1DUANF5g-AQ7kNvgEUNpqs&_nc_zt=24&_nc_ht=scontent.fdac165-1.fna&_nc_gid=Aq-gTY00gP3ihnEpbg1elbc&oh=00_AYBrfXfTrXHft3YvzHuRvwwJhg0gwCIoBsbJIWGpknyjQg&oe=6737A1E1"
  },
  {
    id: 2,
    description:
      "আইডিয়া গুলো আসলেই দুর্দান্ত।  অ্যাডভান্সড লেভেলের কন্টেন্ট গুলো আমাকে একবিংশ শতাব্দীর মার্কেটিং চ্যালেঞ্জ নিতে সহায়তা করে যাচ্ছে। এখান থেকে আমি নতুন ভাবে বিজনেস নিয়ে ভাবা শুরু করেছি ।  সকলের জন্য উপযোগী এই মেম্বারশীপটি সুন্দরভাবে সাজানো হয়েছে, আইডিয়াগুলো খুবই উপকারী। আমি সকলকে নিতে পরামর্শ দিবো। ",
    name: "Syed Naim",
    address: "CSE, University of Dhaka",
    url: "https://www.facebook.com/",
    photo:"https://d1yreyj8btzg0t.cloudfront.net/images/skills/faq/MS%20Excel/2_Syed%20Naim.jpg?w=50&h=50"
  },
  {
    id: 3,
    description:
      "ফেসবুক স্ক্রোলিং করতে করতে সামনে এই পেজের আ্যড টা সামনে আসলো। আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগেই, আগ্রহ নিয়ে ধাপগুলো ফলো করে যা পেলাম তা হলো এক কথায় satisfaction. 😌 এবং তারা আমার বিশ্বাস রক্ষা করে। মেম্বারশিপটি ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি।",
    name: "Kausar Hamim ",
    address: "ঢাকা - Palli Sanchay Bank ",
    url: "https://www.facebook.com/",
    photo:"https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-1/456768755_2866951713456267_5859059690055430264_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=N1fS6BUCTp8Q7kNvgEy9Bmi&_nc_zt=24&_nc_ht=scontent.fdac165-1.fna&_nc_gid=ArCg5psr3RF49yd00QMux77&oh=00_AYAV5IbFx4U96qRJYuV28AylbGGkWXBFaD6Rdh4AbhOzeA&oe=673799BD"
  },
  
  
  {
    id: 4,
    description:
      "ওকে ডিজিটাল কে অনেক ধন্যবাদ আমি তাদের বিশ্বাস করে টাকা পাঠাই প্রোডাক্ট রিসিভ করার আগে এবং তারা আমার বিশ্বাস রক্ষা করে। আমি আমার অনলাইন শপের জন্য নিয়েছিলাম । ভালোই নিতে পারেন । প্রোডাক্ট ঠিকমত বুঝে পেয়েছি এবং রিকমেন্ড করছি। ফাইল গুলো খুবই উপকারী, তাদের জন্য শুভকামনা রইলো ।",
    name: "Tareq Aziz Mahim",
    address: "Founder - Deeniboi.com",
    url: "https://www.facebook.com/TAREQAZIZMAHIMOFICIAL",
    photo:"https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-1/431799397_2387844838093239_1323286654535125102_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mfcei1fU6Z4Q7kNvgGeqF1i&_nc_ht=scontent.fdac136-1.fna&oh=00_AYAFMrF8Oifm0m0ZL0YQlEtNQQHsj5QIzsNUoR7m9yZPkA&oe=664800F5"
  },
  {
    id: 5,
    description:
      "কেউ যদি ব্যবসা শুরু করতে চায় বা তাদের ব্যবসাকে উন্নত করতে চায় তাদের আমি এই মেম্বারশিপটি রিকমেন্ড করছি। এটি একটি অপরিহার্য হাতিয়ার যা আপনাকে আপনার ব্যবসা আরও কার্যকরভাবে পরিচালনা করতে সাহায্য করবে। এই মেম্বারশিপটি আমার জন্য মূল্যবান বিনিয়োগ ছিল , যা আমার ব্যবসাকে এগিয়ে নিয়ে যেতে সাহায্য করেছে।",
    name: "Mashnoon Fuad Zean",
    address: "NSU, Department -BBA",
    url: "https://www.facebook.com/",
    photo:"https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-1/465992070_1085607709799574_8343362295157439684_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=ikWBYlOVIEcQ7kNvgF1fSxs&_nc_zt=24&_nc_ht=scontent.fdac165-1.fna&_nc_gid=Atya4VPN77CS0JQxnOgMM5j&oh=00_AYACjU3KQPfek11LaYx9EhiKOVsJuQUW5Em3jXlTtg6udQ&oe=6737AF9E"
  },
  {
    id: 6,
    description:
      "আমি মেম্বারশীপটি নিয়েছেলাম, খুবই ফ্রেন্ডলি ওদের টিম। জিনিস গুলো  কাজের । যে বিষয় গুলো আমি জানতাম না , বুঝতাম না , সেগুলোর অনেক কিছুই এখন ক্লিয়ার আমি । Satisfied with the service. I belive it will help me to grow my business.",
    name: "Salman A Rahman",
    address: "Founder at HITH Foundation",
    url: "https://www.facebook.com",
    photo:"https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-1/409848507_10224687907373384_6360445852851273856_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d9ioZ5oyPscQ7kNvgGpqJv6&_nc_zt=24&_nc_ht=scontent.fdac165-1.fna&_nc_gid=AdlatbxEoBWuhTzNFXbp1OB&oh=00_AYADuARahCgP1vjX8T5-LxZqcVX9Fms_D6iqj7iux_464Q&oe=673798BD"
  },
  

  

];

const SwiperNavButtons = () => {
  const swiper = useSwiper();


  return (
    <div id="review" className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 bottom-28 z-50 bg-slate-200 hover:bg-slate-100 rounded-full p-1 "
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
        className="absolute right-1 bottom-28 z-50 bg-slate-200 hover:bg-slate-100 rounded-full p-1 ml-2"
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

const Review = () => {
  return (
    <>
      
      <h1 className=" mt-5 text-3xl font-bold text-center text-yellow-500 mb-12">
        মেম্বাররা যা বলছেন
      </h1>
      <div>
        <div className="App relative">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
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
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              //   slidesPerView="auto"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div>
                    <div className=" h-auto w-full bg-black border-blue-400 border rounded-lg p-9">
                      <p className="text-slate-400  mb-5 text-justify">
                        {review.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <img
                            className="h-11 w-11 rounded-full"
                            src={review.photo}
                            alt=""
                          />
                          <div className="text-start">
                            <h1 className="text-slate-600 font-semibold">
                              {review.name}
                            </h1>
                            <p className="text-slate-500">{review.address}</p>
                          </div>
                        </div>
                        <a href={review.url} target="_blank" className="hover:text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-facebook"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              
            </Swiper>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Review;