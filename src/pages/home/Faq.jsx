import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "ই-বুকটি কত পৃষ্ঠার ?",
    answer:
      "ই-বুকটি ৩০ ",
  },
 
  {
    question: " ফাইলগুলোর এক্সেস কিভাবে পাবো ?",
    answer:
      "আমাদের সিস্টেম টা এতোটাই সহজ,যে কখনো ই-বুক ক্রয় করেনি তার জন্যেও কোন সমস্যা হবে না। মাত্র ১ ক্লিকে আমাদেরকে পেমেন্ট করার ১ মিনিটের মধ্যেই আপনাকে Google Drive File এক্সেস দিয়ে দেওয়া হবে। ",
  }, 
  {
    question: "পেমেন্ট কীভাবে করবো ?",
    answer:
      "ফাইলগুলি কেনার জন্য Bkash / Nagad এ 01407975656 (পার্সনাল নাম্বার) - এই নাম্বারে সেন্ড মানি করুন",
  },
  {
    question: "ফাইলগুলি দেখার জন্য কী প্রয়োজন হবে ?",
    answer:
      "Internet connection (WIFI or Mobile Internet), Smartphone or PC",
  },
  
  {
    question: "আপনাদের সাথে কীভাবে যোগাযোগ করবো ?",
    answer:
      "যেকোন জিজ্ঞাসা ও অর্ডারজনিত সমস্যায় নক করুন আমাদের ফেসবুক পেজে। আমরা আছি সকাল ১০ টা থেকে রাত ৮ টা পর্যন্ত আপনার সেবায়।",
  },
  // More questions...
];

const Faq = () => {
  const navigate = useNavigate();

  return (
    <div id="faq" className="my-2">
      
      <h1 className="text-3xl font-bold text-center text-green-600">
        সচরাচর জিজ্ঞাসিত প্রশ্নাবলি
      </h1>
      <div className="bg-black">
        <div className="mx-auto max-w-7xl   lg:px-8 ">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h1 className="divide-y divide-gray-900/10"></h1>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-xl font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-yellow-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
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
      </div>
    </div>
  );
};

export default Faq;
