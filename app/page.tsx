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

      {/* Tips and tricks */}
      {/* Accenting html utilities like checkboxes */}
      <div className="my-2 w-full flex-center gap-6">
        <input type="checkbox" className="size-8" />
        <input type="checkbox" className="accent-pink-500 size-8" />
        <input type="checkbox" className="accent-green-400 size-8" />
      </div>

      <br />

      {/* Fluid Text */}
      <div className="text-[min(10vw,70px)] text-white mb-16">Fluid Text</div>

      <br />

      {/* File Inputs */}
      <div className="p-4 mb-16">
        <label className="my-4 block">
          <input
            type="file"
            className="block w-full text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 file:transition-all file:duration-150 file:ease-in-out"
          />
        </label>
      </div>

      <br />

      {/* Highlights */}
      <div className="selection:bg-green-400 selection:text-white p-4 mb-16">
        <h3 className="text-white">Highlights</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat aut
          dolore perferendis reiciendis necessitatibus pariatur distinctio,
          ipsum corrupti atque fuga nesciunt. Et quaerat voluptate cumque
          temporibus earum aut doloremque nam? Ut atque consequatur, voluptatem,
          ullam cum ex est facere totam recusandae quia necessitatibus nobis ea
          quasi a porro labore deleniti unde omnis explicabo, obcaecati
          perspiciatis debitis officiis sapiente. Quia, nulla!
        </p>
      </div>
    </>
  );
}
