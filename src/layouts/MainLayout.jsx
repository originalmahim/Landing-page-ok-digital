import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import TopNote from "../components/TopNote";
import TopNote2 from "../components/TopNote2";
import Benifits from "../pages/home/Benifits";
import EssentialSoft from "../pages/home/EssentialSoft";
import BusinessSection2 from "../pages/home/BusinessSection2";
import EditorChoice2 from "../pages/home/EditorChoice2";
import EditorChoice from "../pages/home/EditorChoice";
import Navbar from "../pages/shared/Navbar";
// import { Scrollbar } from "react-scrollbars-custom";
// import { Scrollbars } from "rc-scrollbars";

const MainLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <Scrollbars style={{ width: "100vw", height: "100vh" }}> */}
        <div className="max-w-full bg-white dark:bg-slate-900 overflow-hidden relative mx-auto">
          <div className="fixed z-50 top-0 w-full">
            {/* <Navbar2></Navbar2> */}
            <Navbar></Navbar>
          </div>

          <div className="pt-24 mx-auto w-full">
            <Outlet></Outlet>
          </div>
          {/* <EditorChoice></EditorChoice> */}
          {/* <EditorChoice2></EditorChoice2> */}

          {/* <BusinessSection2></BusinessSection2> */}
          {/* <div className="bg-slate-100 dark:bg-slate-950">
            <EssentialSoft></EssentialSoft>
          </div> */}
          {/* <Benifits></Benifits> */}
          <Footer></Footer>
          <button
            onClick={scrollToTop}
            className="float-right fixed cursor-pointer z-30 lg:block xl:block right-7 bottom-14 h-10 w-10 flex items-center justify-center rounded-[10px] bg-slate-700 hover:bg-green-600 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-up text-white mx-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 15l6 -6l6 6"></path>
            </svg>
          </button>
        </div>
      {/* </Scrollbars> */}
    </>
  );
};

export default MainLayout;
