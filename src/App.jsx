import { useState } from "react";
import LightRays from "./components/LightRays.jsx";
import Dither from "./components/Dither.jsx";
import avatarImage from "./assets/avatar.png";
import swagCursor from "./assets/invisible.png"; // your hover cursor
import HoverScrollCard from "./components/HoverScrollCard.jsx";
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
      <div className="h-[200vh] w-full relative flex flex-col items-center gap-40 pt-0.25">
        <HoverScrollCard className="w-[85rem] h-[85rem] bg-white text-black">
          <h2 className="text-6xl font-bold mb-6">About Me</h2>
          <p className="text-2xl max-w-3xl text-center">
            A passionate developer crafting digital experiences 🚀
          </p>
        </HoverScrollCard>
      </div>
    </div>
  );
}

export default App;
