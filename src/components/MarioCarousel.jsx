"use client";
import { useState } from "react";

export const MarioCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 select-none">
      {/* Carousel */}
      <div className="overflow-hidden relative">
        <ul
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <li key={index} className="flex-shrink-0 w-full px-2">
              <div
                onClick={() => window.open(slide.link, "_blank")}
                className="relative w-full h-[42rem] overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer flex flex-col transition-transform duration-300 transform border-8 border-black rounded-sm bg-gradient-to-b from-green-500 to-green-700 hover:scale-105"
              >
                {/* Minecraft-style "blocky" effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/minecraft_block_texture.png')] bg-cover opacity-60 pointer-events-none"></div>

                {/* Project Image */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Title Bar */}
                <div className="absolute bottom-0 left-0 w-full text-center bg-yellow-400 text-black font-bold text-xl p-4 flex justify-center items-center border-t-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-pixel h-4">
                  {slide.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 px-4">
        <button
          onClick={handlePrevious}
          className="bg-red-600 text-white font-bold px-6 py-3 border-4 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-700 font-pixel"
          style={{ left: "-8rem", position: "absolute" }}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="bg-red-600 text-white font-bold px-6 py-3 border-4 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-700 font-pixel"
          style={{ right: "-6rem", position: "absolute" }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};
