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
    <div className="relative w-full max-w-6xl mx-auto p-4">
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
                className="relative w-full h-[36rem] bg-[#FFCB05] cursor-pointer overflow-hidden shadow-2xl flex flex-col transition-transform duration-300 transform hover:scale-105 border-8 border-black"
              >
                {/* Project Image */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Title Bar */}
                <div className="absolute bottom-0 left-0 w-full text-center bg-red-600 text-white font-bold text-lg p-4 flex justify-center items-center font-pixel border-t-4 border-black">
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
          className="bg-red-600 text-white font-bold px-6 py-3 border-4 border-black rounded-sm hover:bg-red-500 shadow-lg font-pixel"
          style={{ left: "-6rem", position: "absolute" }}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="bg-red-600 text-white font-bold px-6 py-3 border-4 border-black rounded-sm hover:bg-red-500 shadow-lg font-pixel"
          style={{ right: "-6rem", position: "absolute" }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};
