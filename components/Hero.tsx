

'use client';
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ColourfulText } from "./ui/colourful-text";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import FeaturesCard from "./FeaturesCard";
import StepsOne from "./animated-steps";
import { PreviewGradient } from "./Pricing";
import PricingCalculator from "./PricingCalculator";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => ["Simplify", "Elevate", "Transform", "Connect", "Effortless"], []);

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
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
            {/* Reduced blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.1] via-transparent to-rose-500/[0.1] blur-lg" />

            {/* <div className="absolute inset-0 overflow-hidden"> */}
                {/* <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.3]" // Increased opacity
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.3]" // Increased opacity
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.3]" // Increased opacity
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.3]" // Increased opacity
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.3]" // Increased opacity
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div> */}

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
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
                                        className="absolute font-semibold text-white"
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

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-gray-600">
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
            </div>

            <div className="my-5">
                <FeaturesCard />
            </div>

            <div className="my-5">
                <StepsOne />
            </div>

            <div>
                <PreviewGradient />
            </div>

            <div>
                <PricingCalculator />
            </div>

            {/* Optional: Reduce or remove this overlay if it's too strong */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/50 via-transparent to-[#030303]/50 pointer-events-none" />
        </div>
    );
}

export default Hero;




// import { Button } from "@/components/ui/button"

// export default function Hero() {
//   return (
//     <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
//           Everything App
//           <br />
//           <span className="text-gray-400">for your teams</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
//           Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
//         </p>
//         <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
//           <span className="relative z-10">Try it free</span>
//           <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
//         </Button>
//       </div>
//     </div>
//   )
// }

