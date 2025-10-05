import { useState } from "react";
import SmoothScrollContainer from "./components/SmoothScrollContainer.jsx";
import Dither from "./components/Dither.jsx";
import HoverScrollCard from "./components/HoverScrollCard.jsx";
import SkyElement from "./components/skyelements.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";

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

import SmoothCursor, { DefaultCursorSVG } from "./components/cursors/cursor.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

export default function App() {
  const [hoveringAvatar, setHoveringAvatar] = useState(false);

  return (
    <>
      {/* Background - Moved outside SmoothScrollContainer */}
      <div className="fixed inset-0 z-0 w-full h-full" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
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
      
      <SmoothScrollContainer>
        <div className="relative w-screen min-h-screen">
          {/* Cursor */}
          <SmoothCursor
            defaultCursor={<DefaultCursorSVG />}
            hoverCursor={<img src={swagCursor} alt="Swag Cursor" className="w-20 h-20 object-contain" />}
            isHovering={hoveringAvatar}
          />

        {/* Hero Section with Page-Flip Animation */}
        <div className="bg-gif min-h-screen w-screen flex items-center justify-center z-10 relative" ref={heroRef => {
          if (heroRef) {
            // Create page-flip animation effect
            gsap.registerPlugin(ScrollTrigger);
            
            // CODY text animation
            gsap.fromTo(
              heroRef.querySelector('.cody-text'),
              { 
                y: 0, 
                opacity: 1, 
                rotationX: 0,
                transformOrigin: "center bottom"
              },
              {
                y: -100,
                opacity: 0,
                rotationX: -90,
                ease: "power2.in",
                scrollTrigger: {
                  trigger: heroRef,
                  start: "top top",
                  end: "center top",
                  scrub: 0.5
                }
              }
            );
            
            // Avatar animation
            gsap.fromTo(
              heroRef.querySelector('.avatar-container'),
              { 
                y: 0, 
                opacity: 1,
                scale: 1,
                rotationX: 0,
                transformOrigin: "center center"
              },
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
                  scrub: 0.3
                }
              }
            );
            
            // BRAT text animation
            gsap.fromTo(
              heroRef.querySelector('.brat-text'),
              { 
                y: 0, 
                opacity: 1,
                rotationX: 0,
                transformOrigin: "center top"
              },
              {
                y: -100,
                opacity: 0,
                rotationX: 90,
                ease: "power2.in",
                scrollTrigger: {
                  trigger: heroRef,
                  start: "top top",
                  end: "center top",
                  scrub: 0.5
                }
              }
            );
          }
        }}>
          <h1 className="cody-text text-[18rem] font-bold text-white drop-shadow-lg -mr-40 -mb-25 font-ethnic">CODY</h1>

          <div className="avatar-container relative flex items-center justify-center">
            <img src={avatarImage} alt="Avatar" className="w-120 h-120 object-contain -mt-5 -mb-10 z-10" />
            <img src={openToWork} alt="Open To Work" className="absolute object-contain w-[260px] h-[260px] -top-45 left-1/2 -translate-x-0.5 z-10 hover:scale-110 transition-transform duration-300" />
          </div>

          <h1 className="brat-text text-[18rem] font-bold text-white drop-shadow-lg -ml-47 -mb-53 font-ethnic">BRAT</h1>
        </div>

        {/* Scrollable Cards */}
        <div className="w-full relative flex flex-col items-center gap-40 -mt-50">
          <HoverScrollCard className="w-[90rem] bg-white text-black" height="200rem">
            {/* 🌌 Scene Elements */}
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

            <div className="absolute top-[500px] left-1/2 -translate-x-1/2 text-center w-[1200px] px-6">
              <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={0} blurStrength={10} containerClassName="text-center" textClassName="text-black font-press">
                I CRAFT IMMERSIVE DIGITAL WORLDS THAT SHATTER MONOTONY, BLENDING PLAYFULNESS AND PURPOSE TO SPARK AUTHENTIC CONNECTIONS WITH TECHNOLOGY
              </ScrollReveal>
            </div>

            {/* Animals */}
            <div className="absolute top-[1400px] w-[1300px]">
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

            <div className="font-press text-[5rem]">RECENT WORK</div>
          </HoverScrollCard>
        </div>
        </div>
      </SmoothScrollContainer>
    </>
  );
}
