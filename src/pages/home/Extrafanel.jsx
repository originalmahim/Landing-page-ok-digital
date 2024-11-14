
import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";


const Extrafanel = () => {
  return (
    <div  id="features" className="my-10 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-600 mb-12">আমাদের অন্যান্য বান্ডেল </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="rounded-xl bg-black  p-6 text-yellow-500 group-hover:bg-green-600 group-hover:text-white">
             <img src="https://i.ibb.co/YcgScGv/Copy-of-Modern-Neutral-Freebie-Lead-Magnet-Mockup-Instagram-Post-2-1024x1024.jpg" /> 
            </div>
            
            <Link to={'/Powerpoint'} className="btn bg-blue-500 text-white " >Buy Now</Link>
            </div>
          <div className="group flex cursor-pointer flex-col justify-center items-center gap-3 text-slate-400 ">
            <div className="rounded-xl bg-black  p-6 text-yellow-500 group-hover:bg-green-600 group-hover:text-white">
             <img src="https://i.ibb.co/wNy6wTZ/Screenshot-2024-05-30-164124.png" /> 
            </div>
            <Link to={'/BuisnessBluePrint'} className="btn bg-blue-500 text-white " >Buy Now</Link>
            
            </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Extrafanel;
