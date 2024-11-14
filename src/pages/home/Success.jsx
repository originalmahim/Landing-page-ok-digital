import React from 'react';
import DownloadButton from './DownloadButton';


const Success = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 my-32 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-green-400'>অভিনন্দন , নিচের বাটনে ক্লিক করে ডাউনলোড করে নিন ই-বুকটি ।</h1>
      <DownloadButton></DownloadButton>
      <p className='text-lg mt-4 text-white sm:text-xl mb-8 text-center'>বাটনে ক্লিক করেও ফাইল ডাউনলোড হচ্ছে না ? <br/> তাহলে<a  className='text-blue-500 underline' href="https://drive.google.com/file/d/1sodro6jO5mNCiTaPbllUcjnPnAe8quOr/view" target="_blank" rel="noopener noreferrer"> এখানে ক্লিক করুন </a> </p>
      {/* <Extrafanel></Extrafanel> */}
      <div className='mt-6 w-full'>
      {/* <img className='w-full  rounded-sm ' src="https://i.ibb.co/dcS1XGv/Screenshot-2024-05-15-194813.png"  /> */}
      </div>
    </div>
  );
};

export default Success;
