import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HoverScrollCard({ children, className, height }) {
  const cardRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Create a scroll-linked tween and keep a ref to it
    tweenRef.current = gsap.fromTo(
      el,
      { y: 100, scale: 0.95, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // adjust to taste
          end: "top 40%",   // adjust to taste
          scrub: 0.6,       // smooth follow
          markers: false,
        },
      }
    );

    return () => {
      // Kill only this tween and its associated ScrollTrigger
      if (tweenRef.current) {
        if (tweenRef.current.scrollTrigger) {
          tweenRef.current.scrollTrigger.kill();
        }
        tweenRef.current.kill();
        tweenRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        height: height || "auto",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
      className={`rounded-[4rem] shadow-xl flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
