import React, { useState } from "react";

const TopNote = () => {
    const [showAd, setShowAd] = useState(true);
  return (
    <div className={ ` ${showAd ? "":"hidden"} relative max-w-full h-10 bg-indigo-600 dark:bg-indigo-900 flex items-center justify-center gap-1 text-white`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-sparkles"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
      </svg>
      <p className="text-sm">The all new CyberSpace v6 version live now. Enjoy!</p>
      <button onClick={() => setShowAd(false)} className="absolute right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x bg-indigo-900 dark:bg-indigo-900 w-6 h-6 rounded-md"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default TopNote;
