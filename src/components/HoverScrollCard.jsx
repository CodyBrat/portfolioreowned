import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HoverScrollCard({ children, className, height }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Create an even faster animation
    const animation = gsap.fromTo(
      el,
      { y: 100, scale: 0.9, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.1, // Added explicit duration for faster animation
        ease: "power1.in", // Changed to power1.in for even faster animation
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=200", // Start animation much earlier
          end: "top center", // Even shorter animation distance
          scrub: 0.1, // Minimal scrub time for immediate response
          markers: false,
          onLeave: () => {
            gsap.to(el, { opacity: 1, duration: 0.1 }); // Ultra-fast opacity transition
          },
          onEnterBack: () => {
            gsap.to(el, { opacity: 1, duration: 0.1 }); // Ultra-fast opacity transition
          }
        },
      }
    );

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ 
        height: height || "auto",
        minHeight: "100vh", // Ensure minimum height
        paddingBottom: "50px" // Add padding at the bottom
      }}
      className={`rounded-[4rem] shadow-xl flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
