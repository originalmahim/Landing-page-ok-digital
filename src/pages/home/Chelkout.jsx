import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Chelkout = () => {
  const cart = useSelector(selectCart);
  let foodDatas = cart.items;
  let orderedFood = foodDatas.filter((food) => food.checked === true);

  const subTotalPrice = orderedFood.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const grandTotal = subTotalPrice;

  const [deliveryType] = useState("Digital Product");
  const [name, setName] = useState("");
  const address = 'null';
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const orderedTime = moment().format("LT");
  console.log(orderedTime);
  const date = moment().format().split("T")[0];

  const orderedData = {
    name,
    date,
    address,
    phone,
    deliveryType,
    time: orderedTime,
    Food: orderedFood,
    totalPrice: grandTotal,
    deliveryCharge: 0,
    status: "Compleated"
  };

  const navigate = useNavigate();

  const onOrderSubmit = async () => {
    setLoading(true);
    if ((name === "") | (phone === "")) {
      setLoading(false);
      return toast.error("আপনার নাম, ই-মেইল সঠিকভাবে দিন।", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    } else {
      try {
        const response = await fetch(
          "https://andalib-server-mauve.vercel.app/orders",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderedData),
          }
        );

        if (response.ok) {
          const responseBody = await response.json();
          // Access the insertedId from the response
          const insertedId = responseBody.insertedId;
          navigate(`/thankyou/bb`);

          toast.success(
            "অর্ডার সম্পন্ন হয়েছে। ধন্যবাদ!",
            {
              position: "top-right",
              autoClose: 4000,
              theme: "dark",
            }
          );
          setLoading(false);
        } else {
          setLoading(false);
          console.error("Failed to send email:", await response.text());
        }
      } catch (error) {
        setLoading(false);
        console.error("Error sending email:", error);
      }
    }
  };


  return (
    <div id="order" className="mt-20 max-w-7xl lg:mx-auto mx-6">
      {/* <h1 className="text-3xl font-bold text-center text-yellow-500 mb-12">
        অর্ডার করুন এখনই
      </h1> */}
      <div>
        <div>
          <div className="flex flex-col lg:flex-row gap-1 w-full mx-auto">
            <div className="w-full lg:w-1/2 -mt-20">
              <h2 className="text-xl font-bold text-white mt-20">
                নিচের খালিঘরে তথ্য দিন
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div className="sm:col-span-2 ">
                  <label
                    htmlFor="name"
                    className="block font-medium leading-6 text-white"
                  >
                    আপনার নাম লিখুনঃ
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      autoComplete="name"
                      className="block bg-slate-300 w-full rounded-lg border-0 py-1.5 text-black ring-1 ring-inset ring-slate-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block  font-medium leading-6 text-white"
                  >
                    আপনার ই-মেইল  লিখুনঃ
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                      autoComplete="phone"
                      className="block w-full bg-slate-300 rounded-lg border-0 py-1.5 text-black ring-1 ring-inset ring-slate-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-xl font-bold text-yellow-500">
                বইয়ের সামারি
              </h2>
              <div className="w-full mt-3">
                {/* order summury */}
                <div className="mt-4 border-dashed border-t-2 border-white bg-black">
                  <ul
                    role="list"
                    className="divide-y-2 divide-dashed divide-slate-200"
                  >
                    {orderedFood.map((food) => (
                      <div key={food.id} className="w-full pt-6 pb-5 relative">
                        <div className="flex justify-between w-full">
                          <div className="flex">
                            <div>
                              <h1 className="font-semibold text-green-500 mb-4">
                                বিজনেস প্রেসক্রিপশন ই-বুক
                              </h1>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
                {/* order summary finised */}

                <div className="flex justify-between items-center border-dashed border-t-2 border-slate-200 py-6">
                  <h1 className="font-semibold">সর্বমোট</h1>
                  <h1 className="font-semibold text-green-500">
                    0 tk
                  </h1>
                </div>


                {loading && (
                  <button
                    disabled={true}
                    className="rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-5 py-3 text-md font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center w-full"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-loader-2 animate-spin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3a9 9 0 1 0 9 9" />
                      </svg>
                      ডাউনলোড হচ্ছে
                    </div>
                  </button>
                )}
                {!loading && (
                  <button
                    onClick={onOrderSubmit}
                    disabled={orderedFood.length === 0 ? true : false}
                    className="rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-5 py-3 text-md font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center w-full"
                  >
                    <div className="flex gap-2 justify-center items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-check"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                      ই-বুক ডাউনলোড করুন
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Chelkout;
