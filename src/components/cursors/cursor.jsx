import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SmoothCursor({
  defaultCursor,
  hoverCursor,
  isHovering = false,
}) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rotation = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothX = useSpring(cursorX, { stiffness: 400, damping: 45 });
  const smoothY = useSpring(cursorY, { stiffness: 400, damping: 45 });
  const smoothRotation = useSpring(rotation, { stiffness: 300, damping: 60 });
  const smoothScale = useSpring(scale, { stiffness: 500, damping: 35 });

  const lastMouse = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      const dt = now - lastMouse.current.time || 16;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;

      // Use pageX/pageY instead of clientX/clientY to account for scroll position
      cursorX.set(e.pageX);
      cursorY.set(e.pageY);

      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      rotation.set(angle);

      scale.set(0.95);
      setTimeout(() => scale.set(1), 120);

      lastMouse.current = { x: e.clientX, y: e.clientY, time: now };
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY, rotation, scale]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: smoothX,
        top: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: smoothRotation,
        scale: smoothScale,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      {isHovering && hoverCursor ? hoverCursor : defaultCursor}
    </motion.div>
  );
}

// Default cursor SVG
export const DefaultCursorSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={54}
    viewBox="0 0 50 54"
    fill="none"
    style={{ scale: 0.5 }}
  >
    <g filter="url(#filter0_d_91_7928)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="black"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="white"
        strokeWidth={2.25825}
      />
    </g>
  </svg>
);
