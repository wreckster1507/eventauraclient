

'use client';
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ColourfulText } from "./ui/colourful-text";
import  InteractiveHoverButton  from "./ui/interactive-hover-button";
import FeaturesCard from "./FeaturesCard";
import StepsOne from "./animated-steps";
import { PreviewGradient } from "./Pricing";
import PricingCalculator from "./PricingCalculator";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Simplify", "Elevate", "Transform","Connect","Effortless"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  
  return (
    <div className="w-full">
      <div className="container mx-auto ">
        {/* Center the navbar */}
        
        
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col ml-12">
          <div className="flex gap-4 flex-col">
            <div className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              
              <ColourfulText text="Event Aura" />
              
            </div>
            <div className="text-5xl">
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              </div>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {/* EventAura is a platform that helps you to create, manage and promote your events with ease. */}
              Empowering student-driven communities and college clubs to innovate, collaborate, and succeed, 
              making their events successful with our event ticketing management and payment gateway.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <div className="relative justify-center">
            <InteractiveHoverButton />
            </div>
          </div>

        </div>
            <div className="my-5">
              <FeaturesCard />
            </div>
            
      </div>
      <div  className="my-5">
                <StepsOne />
      </div>
      <div>
        <PreviewGradient />
      </div>
      <div>
        <PricingCalculator/>
      </div>
    </div>
  );
}

export default Hero;
