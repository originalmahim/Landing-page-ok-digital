import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";



const navigation = [
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const borderClasses = showBorder
    ? "border-slate-200 dark:border-slate-800 shadow-md "
    : "border-transparent";

    const navigate = useNavigate();

  return (
    <>
      <header className={` bg-black ${borderClasses}`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="text-2xl font-bold text-green-600">
                <img src="https://cdn.prod.website-files.com/6682d7b8d3cf136594db90b0/6682d82aafb482f08b03556c_OK-DIGITAL-logo.svg" alt="" />
              </div>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            
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
      জয়েন করুন
    </div>
  </button>
</div>
</div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
