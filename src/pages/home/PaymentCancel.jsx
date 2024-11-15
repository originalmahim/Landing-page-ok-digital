import React from 'react';

const PaymentCancel = () => {
   return (
      <div className="flex justify-center mt-52 mb-20">
             <div className="p-7 py-10 max-w-xl ">
                <div className="flex justify-center">
                   <img className="w-32 h-32 rounded-full bg-green-100" 
                   src="https://i.ibb.co/hXtnjWh/wrong-icon.webp" alt="" />
                </div>
                <h2 className="text-center text-xl text-red-500 font-bold my-5">Cancel to Pay</h2>  
                <p className="text-center">Please pay within 10 minutes or try again.</p>
             </div>
          </div>
   );
};

export default PaymentCancel;