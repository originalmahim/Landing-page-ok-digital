import React from 'react';
import { useNavigate } from "react-router-dom";


const GiftSection = () => {
  const navigate = useNavigate();
  return (
          <div>
    <div className="bg-black border rounded-lg p-6 text-center mb-6">
  <div className="mb-4 flex flex-col items-center justify-center">
    <img className='w-20' src='https://coachkanchon.academy/wp-content/uploads/2023/09/Asset-77.png' alt="Special Gift" />
    <span className="text-red-500 font-bold text-lg mt-4">Bonus</span>
  </div>
  <div className="mb-4">
    <span className="font-bold text-xl">32+ Exclusive Excel Tutorial Video</span>
    <span className="block text-xl">Value - TK 1000</span>
  </div>
</div>
 
    <div className="bg-black border rounded-lg p-6 text-center mb-6">
  <div className="mb-4 flex flex-col items-center justify-center">
    <img className='w-20' src='https://coachkanchon.academy/wp-content/uploads/2023/12/Asset-4.png' alt="Special Gift" />
    <span className="text-red-500 font-bold text-lg mt-4">SPECIAL GIFT </span>
  </div>
  <div className="mb-4">
    <span className="font-bold text-xl text-blue-500">30 Days 30 Bangladeshi Business Idea Blueprint PDF Book For 1st 15 People</span>
    <span className="block text-xl">Value - TK 1500</span>
  </div>
</div>
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
      <img className="h-5 w-5 -pt-2" src="/icons/orders.svg" alt="" />
      <span className="pt-[4px]">ডাউনলোড করুন</span>
    </div>
  </button>
</div>

    </div>
  );
};

export default GiftSection;
