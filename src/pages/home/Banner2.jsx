import React, { useState } from "react";
import Popular from "./Popular";
import SliderCatagory from "./SliderCatagory";
// import Search from "../../components/Search";
// import Search2 from "../../components/Search2";
import Search3 from "../../components/Search3";
import SliderCatagory2 from "./SliderCatagory2";
import Container from "../../components/Container";

const Banner2 = () => {
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  return (
    <div
      className="w-full mx-auto overflow-hidden"
      // style={{
      //   backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
      // }}
    >
      <>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-extrabold text-2xl md:text-3xl text-center mb-9 text-slate-700 dark:text-slate-300 pt-16">
              Hey, looking for something?
            </h1>

            <Search3></Search3>

            <p className="text-slate-400 mt-6">
              You can also browse our popular categories
            </p>

            <div className="overflow-hidden max-w-7xl mx-auto">
              <SliderCatagory></SliderCatagory>
              {/* <SliderCatagory2></SliderCatagory2> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner2;
