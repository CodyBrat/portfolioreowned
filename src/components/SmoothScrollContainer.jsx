import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollContainer({ children }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Set container to fixed and full size
    gsap.set(container, { y: 0 });

    // Animate container y based on window scroll with smoother easing
    const updateY = () => {
      gsap.to(container, {
        y: -window.scrollY,
        ease: "power2.out", // Smoother easing
        duration: 0.5, // Faster for better responsiveness
        overwrite: "auto", // Prevent animation queue buildup
      });
    };

    // Initial update
    updateY();
    window.addEventListener("scroll", updateY);
    window.addEventListener("resize", updateY);

    // Set body height = content height (so scrollbar works)
    const setBodyHeight = () => {
      // Get the actual height of all content
      const height = content.scrollHeight;
      setContentHeight(height);
      document.body.style.height = `${height}px`;
    };
    
    // Initial height setup
    setBodyHeight();
    
    // Use ResizeObserver for more reliable size detection
    const resizeObserver = new ResizeObserver(() => {
      setBodyHeight();
      ScrollTrigger.refresh();
    });
    
    resizeObserver.observe(content);
    window.addEventListener("resize", setBodyHeight);

    // ScrollTrigger scrollerProxy
    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        if (arguments.length) window.scrollTo(0, value);
        return window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: "transform",
    });

    ScrollTrigger.defaults({ scroller: container });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("scroll", updateY);
      window.removeEventListener("resize", updateY);
      window.removeEventListener("resize", setBodyHeight);
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "visible", // Changed from hidden to visible
          willChange: "transform", // Performance optimization
        }}
      >
        <div ref={contentRef} style={{ minHeight: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
