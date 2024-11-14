import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [ShowShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowShadow(true);
        // console.log("yes scrolled");
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowClasses = ShowShadow ? "shadow-md" : "border-transparent";

  return (
    <>
      <header className={` bg-slate-600 ${shadowClasses} fixed z-50 top-0 w-full`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex ">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer"
            >
              <img
                className="block h-8 w-auto"
                src="https://cdn.prod.website-files.com/6682d7b8d3cf136594db90b0/6682d82aafb482f08b03556c_OK-DIGITAL-logo.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="cursor-pointer items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className=" text-base font-semibold leading-6 text-slate-600">
                <a href="/orders" className="hover:text-green-500 active:text-green-600 ease-in duration-75">Admin</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle text-slate-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardNav;
