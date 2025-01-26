'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Zap } from 'lucide-react'
import { GradualSpacing } from '@/components/eldoraui/gradualspacing'
import { AuroraText } from '@/components/ui/AuroraText'
import TeamOne from '@/components/Team'
import { StaggeredFade } from '@/components/fadein'

const AboutPage = () => {
  return (
    <div className="min-h-screen">
    <header className="py-16">
    <div className="container mx-auto px-4 flex justify-center">
        
        <GradualSpacing
      className="flex font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Elevate your event experience with "
    />
    
      
    </div>
    <div>
    <motion.h1 className="flex justify-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
    >
        
       <AuroraText>EventAura</AuroraText>
    </motion.h1>
    </div>
  </header>
      <WhatWeDo />
      <OurHighlights />
      <TeamOne />
      <OurMission />
      
    </div>
  )
}



const WhatWeDo = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What We Do
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We specialize in creating innovative solutions that empower businesses to thrive in the digital age. Our team of experts combines cutting-edge technology with creative strategies to deliver exceptional results for our clients.
      </motion.p>
    </div>
  </section>
)

const OurHighlights = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Time is of the essence, and at EventAura, we prioritize efficiency at every stage. From setting up events to generating dynamic QR tickets, our platform ensures swift, hassle-free processes. With automated systems and streamlined workflows, we help you go live with your event in record time, giving you the competitive edge you need.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "At EventAura, you’re at the heart of everything we do. From intuitive tools to secure payment integrations and real-time analytics, our solutions are tailored to your unique needs. Whether organizing workshops or large conferences, we ensure seamless event management. Your success inspires us, and we’re here to make it stress-free.",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description:
        "EventAura combines innovative technology with exceptional service, earning industry recognition and client trust worldwide. Our secure, simple, and data-driven platform empowers organizers with real-time analytics, scalability, and customizable features. From small events to global conferences, we consistently deliver award-winning solutions that redefine event management and set new standards of excellence.",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Our Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <highlight.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {highlight.title}
              </h3>
              <StaggeredFade text={highlight.description} className="text-gray-800 text-justify" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const OurMission = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
        Elevate your event experience with EventAura, 
        the all-in-one platform that combines event management tools with seamless financial services. 
        Whether you&apos;re organizing paid conferences, workshops, or free gatherings, EventAura simplifies
         the process. Empower your student-driven communities and college clubs with effortless 
         registration, secure payments, and comprehensive event management features.
        </p>
        <motion.a 
          href="#" 
          className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors"
          whileHover={{ x: 5 }}
        >
          Learn more about our values <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
)



export default AboutPage

