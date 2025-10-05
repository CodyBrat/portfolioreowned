import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HoverScrollCard({ children, className, height }) {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.9 0"], // tweak for smoother start/end
  });

  // Animate the whole card
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, -50, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity, height: height || "auto" }}
      className={`rounded-[4rem] shadow-xl flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
