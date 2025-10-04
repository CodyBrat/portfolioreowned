import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HoverScrollCard({ children, className }) {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 0"], // start when 20% enters, end when 80% leaves
  });

  // Smooth hover effect (up in middle, down at end)
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, -50, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className={`rounded-3xl shadow-xl flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
