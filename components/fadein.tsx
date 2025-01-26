"use client";
import React from "react";
import { motion } from "framer-motion";

interface StaggeredFadeProps {
  text?: string;
  className?: string;
}

const StaggeredFade: React.FC<StaggeredFadeProps> = ({
  text = "",
  className = "",
}) => {
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className={`text-justify ${className}`} // Added text-justify here
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export { StaggeredFade };
