import { useState } from "react";
import LightRays from "./components/LightRays.jsx";
import Dither from "./components/Dither.jsx";
import avatarImage from "./assets/avatar.png";
import swagCursor from "./assets/invisible.png"; // your hover cursor
import HoverScrollCard from "./components/HoverScrollCard.jsx";
import SkyElement from "./components/skyelements.jsx";
import longcloud from "./assets/elements/longcloud.png";
import redmoon from "./assets/elements/redmoon.png";
import moon from "./assets/elements/moon.png";
import dragoncloud from "./assets/elements/dragoncloud.png";
import greendragoncloud from "./assets/elements/greendragoncloud.png";
import smallcloud from "./assets/elements/smallcloud.png";
import yellowmoon from "./assets/elements/yellowmoon.png";
import twinkle from "./assets/elements/twinkle.png";
import fox from "./assets/elements/fox.png";
import cat from "./assets/elements/cat.png";

import ScrollReveal from "./components/ScrollReveal.jsx";

import openToWork from "./assets/elements/opentowork.png";
import SmoothCursor, { DefaultCursorSVG } from "./components/cursors/cursor.jsx";
import "./App.css";

function App() {
  const [hoveringAvatar, setHoveringAvatar] = useState(false);

  return (
    <div className="relative w-screen min-h-screen bg-black">
      {/* Cursor */}
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

      {/* Background */}
      <div className="fixed inset-0 z-0">
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

      {/* Hero Section */}
      <div className="bg-gif min-h-screen w-screen flex items-center justify-center z-10 relative">
        <h1 className="text-[18rem] font-bold text-white drop-shadow-lg -mr-40 -mb-25 font-ethnic">
          CODY
        </h1>
        <div
          className="relative flex items-center justify-center"
          >
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-120 h-120 object-contain -mt-5 -mb-10 z-10"
            // onMouseEnter={() => setHoveringAvatar(true)}
            // onMouseLeave={() => setHoveringAvatar(false)}
          />
          {/*openToWork badge*/}
          <img
            src={openToWork}
            alt="Open To Work"
            className="absolute object-contain 
                       w-[260px] h-[260px] 
                       -top-45 left-1/2 -translate-x-0.5 z-10
                       hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <h1 className="text-[18rem] font-bold text-white drop-shadow-lg -ml-47 -mb-53 font-ethnic">
          BRAT
        </h1>
      </div>

      {/* Scrollable Cards */}
      <div className=" w-full relative flex flex-col items-center gap-40 -mt-40" style={{ height: "200rem" }}>
        <HoverScrollCard className="w-[90rem] bg-white text-black" height="200rem">
          {/* 🌌 Scene Elements */}

          {/* Moons at the sky top */}
          <SkyElement src={redmoon} top="80px" right="470px" width="150px" height="150px" />
          <SkyElement src={longcloud} top="50px" left="45%" width="240px" height="240px"/>

          <SkyElement src={dragoncloud} top="140px" left="20px" width="280px" height="280px" />
          <SkyElement src={greendragoncloud} top="150px" right="20px" width="280px" height="280px" />

          <SkyElement src={twinkle} top="40px" left="150px" width="80px" height="80px" />
          <SkyElement src={twinkle} top="40px" right="150px" width="80px" height="80px" />
          <SkyElement src={twinkle} top="450px" right="80px" width="70px" height="70px" />
          <SkyElement src={twinkle} top="450px" left="80px" width="70px" height="70px" />

          <SkyElement src={longcloud} top="50px" left="50%" width="500px" height="200px"  />
          <SkyElement src={smallcloud} top="100px" left="350px" width="120px" height="120px" />
          <SkyElement src={smallcloud} top="300px" left="550px" width="160px" height="110px" />

          <div className="absolute top-[500px] left-1/2 -translate-x-1/2 text-center w-[1200px] px-6">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={10}
              containerClassName="text-center"
              textClassName="text-black font-press"
            >
              I CRAFT IMMERSIVE DIGITAL WORLDS THAT SHATTER MONOTONY, BLENDING PLAYFULNESS AND PURPOSE TO SPARK AUTHENTIC CONNECTIONS WITH TECHNOLOGY
            </ScrollReveal>
          </div>
            {/* Animals below the ScrollReveal text */}
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

            <div className="font-press text-[5rem]">
              RECENT WORK
            </div>
        </HoverScrollCard>
      </div>
    </div>
  );
}

export default App;
