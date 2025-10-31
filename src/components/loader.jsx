"use client";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 600); // small delay for smooth exit
          return 100;
        }
        return prev + 4;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-white text-black font-press transition-opacity duration-700">
      {/* Mario Coin GIF */}
      <img
        src="https://i.pinimg.com/originals/8f/7e/67/8f7e676cc3fc73c3032aa8545907e870.gif"
        alt="coin"
        className="w-28 h-28 mb-8 animate-bounce"
      />

      {/* Loading Text */}
      <h1 className="text-[4rem] drop-shadow-[3px_3px_0px_#000] mb-6">
        LOADING...
      </h1>

      {/* Progress Bar */}
      <div className="w-[40rem] h-[2.5rem] border-4 border-black bg-white shadow-[4px_4px_0px_#000] relative">
        <div
          className="absolute left-0 top-0 h-full bg-red-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-6 text-[1.8rem] font-press">{progress}%</p>

      {/* Pixelated footer text */}
      <p className="absolute bottom-10 text-[1.2rem] opacity-70 font-press">
        “Loading Priyabrata's Portfolio...”
      </p>
    </div>
  );
}
