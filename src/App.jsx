import { useState } from "react";
import SmoothScrollContainer from "./components/SmoothScrollContainer.jsx";
import Dither from "./components/Dither.jsx";
import HoverScrollCard from "./components/HoverScrollCard.jsx";
import SkyElement from "./components/skyelements.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import { MarioCarousel } from "./components/MarioCarousel.jsx";
import Loader from "./components/loader.jsx";

import avatarImage from "./assets/avatar.png";
import swagCursor from "./assets/invisible.png";
import openToWork from "./assets/elements/opentowork.png";

import longcloud from "./assets/elements/longcloud.png";
import redmoon from "./assets/elements/redmoon.png";
import dragoncloud from "./assets/elements/dragoncloud.png";
import greendragoncloud from "./assets/elements/greendragoncloud.png";
import smallcloud from "./assets/elements/smallcloud.png";
import twinkle from "./assets/elements/twinkle.png";
import fox from "./assets/elements/fox.png";
import cat from "./assets/elements/cat.png";
import projects from "./components/projects/projects.js";

import SmoothCursor, { DefaultCursorSVG } from "./components/cursors/cursor.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

export default function App() {
  const [hoveringAvatar, setHoveringAvatar] = useState(false);
  const [loading, setLoading] = useState(true);
  if (loading) return <Loader onFinish={() => setLoading(false)} />;
  return (
    <>
      {/* === Background === */}
      <div
        className="fixed inset-0 z-0 w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <Dither
          waveColor={[0.3, 0.3, 0.3]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* === Smooth Scroll Container === */}
      <SmoothScrollContainer>
        <div className="relative w-screen min-h-screen">
          {/* === Custom Cursor === */}
          <SmoothCursor
            defaultCursor={<DefaultCursorSVG />}
            hoverCursor={
              <img
                src={swagCursor}
                alt="Swag Cursor"
                className="w-20 h-20 object-contain"
              />
            }
            isHovering={hoveringAvatar}
          />

          {/* === HERO SECTION === */}
          <div
            className="bg-gif min-h-screen w-screen flex items-center justify-center z-10 relative"
            ref={(heroRef) => {
              if (heroRef) {
                gsap.registerPlugin(ScrollTrigger);

                gsap.fromTo(
                  heroRef.querySelector(".cody-text"),
                  { y: 0, opacity: 1, rotationX: 0 },
                  {
                    y: -100,
                    opacity: 0,
                    rotationX: -90,
                    ease: "power2.in",
                    scrollTrigger: {
                      trigger: heroRef,
                      start: "top top",
                      end: "center top",
                      scrub: 0.5,
                    },
                  }
                );

                gsap.fromTo(
                  heroRef.querySelector(".avatar-container"),
                  { y: 0, opacity: 1, scale: 1 },
                  {
                    y: -50,
                    opacity: 0,
                    scale: 0.8,
                    rotationX: -60,
                    ease: "power1.in",
                    scrollTrigger: {
                      trigger: heroRef,
                      start: "top top",
                      end: "center top",
                      scrub: 0.3,
                    },
                  }
                );

                gsap.fromTo(
                  heroRef.querySelector(".brat-text"),
                  { y: 0, opacity: 1, rotationX: 0 },
                  {
                    y: -100,
                    opacity: 0,
                    rotationX: 90,
                    ease: "power2.in",
                    scrollTrigger: {
                      trigger: heroRef,
                      start: "top top",
                      end: "center top",
                      scrub: 0.5,
                    },
                  }
                );
              }
            }}
          >
            <h1 className="cody-text text-[22rem] font-bold text-white drop-shadow-lg -mr-40 -mb-25 font-ethnic">
              CODY
            </h1>

            <div className="avatar-container relative flex items-center justify-center">
              <img
                src={avatarImage}
                alt="Avatar"
                className="w-140 h-140 object-contain -mt-11 -mb-10 z-10"
              />
              <img
                src={openToWork}
                alt="Open To Work"
                className="absolute object-contain w-[270px] h-[270px] -top-45 left-1/2 -translate-x-0.5 z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h1 className="brat-text text-[22rem] font-bold text-white drop-shadow-lg -ml-47 -mb-53 font-ethnic">
              BRAT
            </h1>
          </div>

          {/* === FIRST SCROLL CARD (Main Content) === */}
          <div className="w-full relative flex flex-col items-center gap-40 -mt-50">
            <HoverScrollCard className="w-[95rem] bg-white text-black" height="300rem">
              {/* 🌌 Sky Elements */}
              <SkyElement src={redmoon} top="80px" right="470px" width="150px" height="150px" />
              <SkyElement src={longcloud} top="50px" left="45%" width="240px" height="240px" />
              <SkyElement src={dragoncloud} top="140px" left="20px" width="280px" height="280px" />
              <SkyElement src={greendragoncloud} top="150px" right="20px" width="280px" height="280px" />
              <SkyElement src={twinkle} top="40px" left="150px" width="80px" height="80px" />
              <SkyElement src={twinkle} top="40px" right="150px" width="80px" height="80px" />
              <SkyElement src={twinkle} top="450px" right="80px" width="70px" height="70px" />
              <SkyElement src={twinkle} top="450px" left="80px" width="70px" height="70px" />
              <SkyElement src={longcloud} top="50px" left="50%" width="500px" height="200px" />
              <SkyElement src={smallcloud} top="100px" left="350px" width="120px" height="120px" />
              <SkyElement src={smallcloud} top="300px" left="550px" width="160px" height="110px" />

              {/* Text Section */}
              <div className="absolute top-[500px] left-1/2 -translate-x-1/2 text-center w-[1200px] px-6">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={10}
                  containerClassName="text-center"
                  textClassName="text-black font-press text-[3rem]"
                >
                  I CRAFT IMMERSIVE DIGITAL WORLDS THAT SHATTER MONOTONY, BLENDING PLAYFULNESS AND
                  PURPOSE TO SPARK AUTHENTIC CONNECTIONS WITH TECHNOLOGY
                </ScrollReveal>
              </div>

              {/* 🦊 Animals */}
              <div className="absolute w-[1300px] -mt-[2000px]">
                <SkyElement src={fox} bottom="200px" left="5%" width="60px" height="60px" />
                <SkyElement src={fox} bottom="60px" left="25%" width="60px" height="60px" />
                <SkyElement src={fox} bottom="200px" right="53%" width="60px" height="60px" />
                <SkyElement src={fox} bottom="60px" right="25%" width="60px" height="60px" />
                <SkyElement src={fox} bottom="200px" right="5%" width="60px" height="60px" />
                <SkyElement src={cat} bottom="60px" right="5%" width="60px" height="60px" />
                <SkyElement src={cat} bottom="60px" left="50%" width="60px" height="60px" />
                <SkyElement src={cat} bottom="250px" right="30%" width="60px" height="60px" />
                <SkyElement src={cat} bottom="250px" left="20%" width="60px" height="60px" />
                <SkyElement src={cat} bottom="60px" left="50px" width="60px" height="60px" />
              </div>

              {/* === Projects Section === */}
              <h1 className="text-black font-press text-[5rem] mb-12 text-center mt-12">
                RECENT WORK
              </h1>
              <MarioCarousel slides={projects} />

              {/* === Experience === */}
              <h1 className="text-black font-press text-[5rem] text-center mt-32">
                1 YEAR IN DESIGN
              </h1>

              {/* === Skills Section === */}
            <div className="relative flex justify-center items-center mt-20 w-full px-20">
                {/* Left-side animated elements */}
                <div className="absolute left-10 top-[0.6%] flex flex-col gap-12 items-start">
                  <img
                    src="https://i.pinimg.com/originals/69/bc/aa/69bcaade16a38429e4064ef419c598d2.gif"
                    alt="rocky"
                    className="w-50 h-50 hover:scale-110 transition-transform duration-300 ml-6"
                  />
                  <img
                    src="https://i.pinimg.com/originals/f4/09/4b/f4094bcfda630760b9446590dbcf76dc.gif"
                    alt="Star spin"
                    className="w-40 h-40 hover:rotate-12 transition-transform duration-500 ml-1 mt-16"
                  />
                  <img
                    src="https://i.pinimg.com/736x/24/28/12/2428127dc99b4745ff3b8a7f80eab850.jpg"
                    alt="Pixel fire"
                    className="w-40 h-40 hover:scale-125 transition-transform duration-300 ml-10 mt-20"
                  />
                </div>

                {/* Right-side animated elements */}
                <div className="absolute right-6 top-[0.6%] flex flex-col gap-10 items-end">
                  <img
                    src="https://i.pinimg.com/originals/57/f8/f4/57f8f4940cce10b3daa19f5b50f63d60.gif"
                    alt="Pixel fire"
                    className="w-40 h-40 hover:scale-125 transition-transform duration-300 mr-10"
                  />
                  <img
                    src="https://i.pinimg.com/originals/b7/cf/dd/b7cfdd6d49b483b4c2f4afe3886dac35.gif"
                    alt="Shiny sparkle"
                    className="w-40 h-40 hover:scale-110 transition-transform duration-300 mr-12 mt-12"
                  />
                  <img
                    src="https://i.pinimg.com/originals/67/00/a5/6700a5c64d66f46ff71111d4a700b2ff.gif"
                    alt="Pixel heart"
                    className="w-55 h-55 hover:scale-125 transition-transform duration-300 mr-20 mt-24"
                  />
                </div>

                {/* Center Reveal */}
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={10}
                  enableHoverPop={true}
                  containerClassName="text-center"
                  textClassName="text-black text-[3.5rem] font-press whitespace-pre-line leading-[1.2]"
                >
                  {`UI/UX 
                  WEB-DESIGN 
                  VISUAL-DESIGN 
                  MOTION-DESIGN 
                  PRODUCT-MINDSET
                  DESIGN-SYSTEM
                  ACCESSIBILITY 
                  PROTOTYPING
                  ILLUSTRATION
                  NO-CODE`}
                </ScrollReveal>
              </div>
            </HoverScrollCard>

            {/* === NEW CONTACT SCROLL CARD === */}
            {/* <HoverScrollCard className="w-[95rem] bg-[#FFE8C2] text-black mt-[-85rem]" height="110rem"> */}
            <HoverScrollCard className="w-[95rem] bg-yellow-100 text-black mt-[-85rem]" height="115rem">
            <div className="flex flex-col justify-center items-center text-center h-full px-10">
              
              {/* Header */}
              <h1 className="text-[6rem] font-press mb-12 text-black drop-shadow-[4px_4px_0px_#000] ">
                LET’S CREATE MAGIC ✨
              </h1>

              <p className="text-[2rem] font-press mb-12 max-w-[60%] leading-tight">
                Got a dream project or idea? Let’s build it together — Mario-style! 
                Fill in your details below and hit that POWER-UP button 🚀
              </p>

              {/* Form Container */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  // ⚡ You can connect this with your backend here (API POST request)
                  alert("Form submitted! 🚀");
                }}
                className="w-[70%] bg-[#FFD966] border-8 border-black p-10 rounded-none shadow-[6px_6px_0px_#000] font-press text-left space-y-8 relative"
              >
                {/* Floating coins for style */}
                <div className="absolute -top-8 -right-10 animate-bounce">
                  <img 
                    src="https://i.pinimg.com/originals/8f/7e/67/8f7e676cc3fc73c3032aa8545907e870.gif"
                    alt="coin"
                    className="w-14 h-14"
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-[2rem] text-black mb-2 drop-shadow-[2px_2px_0px_#000]">
                    YOUR NAME
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Mario, Peach, or maybe YOU!"
                    className="w-full text-[1.8rem] p-4 border-4 border-black bg-[#fff6d9] shadow-[4px_4px_0px_#000] focus:outline-none focus:bg-yellow-200"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[2rem] text-black mb-2 drop-shadow-[2px_2px_0px_#000]">
                    YOUR EMAIL
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@castle.com"
                    className="w-full text-[1.8rem] p-4 border-4 border-black bg-[#fff6d9] shadow-[4px_4px_0px_#000] focus:outline-none focus:bg-yellow-200"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[2rem] text-black mb-2 drop-shadow-[2px_2px_0px_#000]">
                    YOUR MESSAGE
                  </label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Tell me your quest, hero!"
                    className="w-full text-[1.8rem] p-4 border-4 border-black bg-[#fff6d9] shadow-[4px_4px_0px_#000] focus:outline-none focus:bg-yellow-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-10">
                  <button 
                    type="submit"
                    className="bg-red-600 text-white border-4 border-black px-12 py-4 text-[2.4rem] rounded-sm 
                              shadow-[6px_6px_0px_#000] hover:bg-yellow-400 hover:text-black 
                              hover:translate-y-[-4px] active:translate-y-[2px] active:shadow-[3px_3px_0px_#000] 
                              transition-all duration-150"
                  >
                    ⚡ POWER UP!
                  </button>
                </div>
              </form>

              {/* Bottom Text */}
              <p className="mt-16 text-[1.6rem] text-black font-press opacity-80">
                “Every adventure starts with a message.” — Mario 🧢
              </p>
            </div>
          </HoverScrollCard>

          </div>
        </div>
      </SmoothScrollContainer>
    </>
  );
}
