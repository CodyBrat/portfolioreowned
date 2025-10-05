import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={i}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: rotationEnd,
          scrub: 1,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
}
