import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/20/solid";
const benefitss = [
      "অ্যাডভান্সড হিসাব নিকাশের মাধ্যমে ডাটা অ্যানালাইসিস করা",
      "অ্যাডভান্স ফাংশন, ফর্মুলা ও ট্রিকস কাজে লাগিয়ে দ্রুত জটিল কাজ শেষ করা",
      "ফাইলগুলো কাজে লাগিয়ে অল্প পরিশ্রমে বেশি কাজগুলোর সহজ ব্যবহার । ",
      "মাইক্রোসফট এক্সেল এর অ্যাডভান্সড ব্যবহার শিখে বিজনেস  কিংবা অফিসের কাজে  প্রোডাক্টিভিটি বাড়ানো",
      
      
      "আলটিমেট প্রোডাক্টিভিটি প্লান এক্সিকিউট করতে পারবেন ।",
      
    ];

const Gift = () => {
      
          return (
                    <div className='mt-6 '>
                      
                    <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            
            ফাইলগুলো থেকে
যেভাবে বেনেফিটেড হবেন --
                        </h2>
                        <ul
              role="list"
              className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-3"
            >
              {benefitss.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-x-3 text-xl text-slate-400"
                >
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none text-yellow-500  "
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
                        
                        
                </div>
          );
};

export default Gift;