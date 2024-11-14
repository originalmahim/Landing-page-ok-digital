import React from 'react';

const DownloadButton = () => {
  // Link to the hosted PDF (can be a direct link to your server or cloud storage)
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1sodro6jO5mNCiTaPbllUcjnPnAe8quOr'; 

  return (
    <div className="flex justify-center items-center">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
        <a 
          href={pdfUrl} 
          download="Business_Prescription.pdf"  // Specify the default file name
          className="text-white"
        >
          Download E-Book
        </a>
      </button>
    </div>
  );
};

export default DownloadButton;
