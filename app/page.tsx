"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Add dark mode toggle
  const [dark, setDark] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <>
      {/* First Class interactions */}
      <div className="bg-violet-200 h-10 w-full border-2 border-violet-600 rounded-md my-4 p-6 flex items-center justify-center">
        <h1 className="text-center text-lg text-cyan-400 font-mono font-extrabold">
          Hello World
        </h1>
      </div>

      <br />

      {/* Flexbox */}
      <div className="flex flex-col items-center justify-center space-y-6 mt-2">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>

      <br />

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2 mt-2 mx-2">
        <div className="h-16 rounded-full bg-blue-500"></div>
        <div className="h-16 rounded-full bg-orange-500"></div>
        <div className="h-16 rounded-full bg-green-500"></div>
      </div>

      <br />

      {/* Responsiveness and media queries */}
      <div className="block max-sm:bg-amber-500 max-md:bg-amber-700 mt-4">
        <p className="text-white">I appear on screens larger than 768px</p>
      </div>

      <br />

      {/* Implement dark mode */}
      <div className="bg-white dark:bg-black dark:text-white">
        Dark mode disabled
      </div>

      <br />

      {/* JS Toggle dark mode */}
      <div
        className={`m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black ${
          dark && "dark"
        }`}
      >
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
          Writes Upside-Down
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>

        <button
          id="toggleDark"
          className="px-4 py-2 text-sm font-medium mt-8 text-blue-900 bg-blue-100 rounded-md"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      <br />

      {/* Image component */}
      
    </>
  );
}
