"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const features = [
  {
    title: "Payment Security",
    description:
      "Rest easy with our robust integration with PhonePay, ensuring secure transactions and peace of mind for both organizers and participants.",
    link: "#",
  },
  {
    title: "Automated Mailing System",
    description:
      "Effortlessly communicate event details to participants upon successful payment, including event information and unique QR codes for streamlined access.",
    link: "#",
  },
  {
    title: "Dynamic QR Ticketing",
    description:
      "Revolutionize event check-in with dynamic QR ticketing, enabling seamless onboarding and authentication for participants while simplifying the registration process.",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Empower event managers with comprehensive insights into attendee demographics, ticket sales, and engagement metrics, facilitating data-driven decision-making for enhanced event success.",
    link: "#",
  },
  {
    title: "Event Creation and Management",
    description:
      "Streamline event organization and participant registration with our intuitive platform, providing secure online registration and customizable event management tools.",
    link: "#",
  },
  {
    title: "Security and Data Privacy",
    description:
      "Protect attendee data with robust security measures and ensure compliance with data privacy regulations, safeguarding sensitive information and enhancing trust.",
    link: "#",
  },
  
];



const FeaturesCard = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-center gap-6  ">
        {features.map((feature, index) => (
            <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                {feature.title}
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                {feature.description}
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                {/* <CardItem
                    translateZ={20}
                    as="a"
                    href={feature.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-blue-500 hover:underline"
                >
                    Learn More →
                </CardItem>
                <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                    Sign Up
                </CardItem> */}
                </div>
            </CardBody>
            </CardContainer>
        ))}
        </div>
        <div>

        
        </div>
    </div>
  );
};

export default FeaturesCard;
