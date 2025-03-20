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
      <div
        className={`bg-white dark:bg-black dark:text-white ${dark && "dark"}`}
      >
        Dark mode disabled
      </div>

      <br />

      {/* JS Toggle dark mode */}
      <div className={`card ${dark && "dark"}`}>
        <h3>Writes Upside-Down</h3>
        <p>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>

        <button className="btn-toggle" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>

      <br />

      {/* Custom styles */}
      <div className="bg-white p-2 mt-2">
        <p className="text-chestnut  font-extrabold text-2xl mt-2">
          Hello World
        </p>

        <button className="btn">Hello Button</button>
      </div>

      <br />
    </>
  );
}
