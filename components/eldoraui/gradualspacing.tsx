"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface GradualSpacingProps {
  text?: string;
  className?: string;
}

export const GradualSpacing: React.FC<GradualSpacingProps> = ({
  text = "",
  className = "",
}) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={clsx("flex flex-wrap space-x-1 justify-center", className)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className={clsx(
              "flex flex-wrap text-center font-display font-bold drop-shadow-sm",
              "text-3xl md:text-3xl lg:text-3xl xl:text-5xl",
              "tracking-[-0.02em]",
              "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
            )}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};
