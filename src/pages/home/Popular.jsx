import React from "react";

const Popular = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-7 my-6">
        <button className="w-full md:w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/windows.svg" alt="" />
          <h1 className="font-bold">Windows</h1>
        </button>
        <button className="w-full md:w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/graphics.svg" alt="" />
          <h1 className="font-bold">Graphic</h1>
        </button>
        <button className="w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/web.svg" alt="" />
          <h1 className="font-bold">Web</h1>
        </button>
        <button className="w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/multimedia.svg" alt="" />
          <h1 className="font-bold">Multimedia</h1>
        </button>
        <button className="w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/utilities.svg" alt="" />
          <h1 className="font-bold">Utilities</h1>
        </button>
        <button className="w-32 h-40 bg-indigo-100 rounded-md flex flex-col justify-center items-center gap-2 hover:scale-110 hover:bg-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400">
          <img className="h-[50px] w-[50px]" src="/security.svg" alt="" />
          <h1 className="font-bold">Security</h1>
        </button>
      </div>
    </div>
  );
};

export default Popular;
