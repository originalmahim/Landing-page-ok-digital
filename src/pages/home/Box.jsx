import React from 'react';

const Box = () => {
  return (
    <div className="bg-black  mt-8  rounded-lg p-6 text-center">
      <div className="">
        
        <span className="block italic">LIMITED TIME OFFER</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-xl">Order Now!</span>
      </div>
      <div>
        <span className="text-red-500 font-bold text-2xl"><del>Regular Price - ৳2500</del></span>
      </div>
      <div>
        <span className="text-yellow-500 font-bold text-3xl"> Discount Price - ৳149</span>
      </div>
    </div>
  );
};

export default Box;
