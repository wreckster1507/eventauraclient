// 'use client'
// import React, { useState } from 'react'

// const Page = () => {
//     const [currentStep, setCurrentStep] = useState({
//         "hackathonName": "Code Innovate 2025",
//         "hackathonDescription": "A 48-hour hackathon focused on AI and IoT solutions.",
//         "hackathonVenue": "Tech Park, Bangalore",
//         "hackathonVenueUrl": "https://maps.example.com/techpark",
//         "hackathonDate": "2025-06-15T00:00:00.000Z",
//         "hackathonPrice": "₹500",
//         "hackathonStatus": true,
//         "hackathonManagerMail": "manager@example.com",
//         "hackathonManagerPhone": "+91-9876543210",
//         "hackathonPaymentUpi": "upi-id@exampleupi",
//         "hackathonHostedBy": "Tech Innovators",
//         "hackathonMailDescription": "Welcome to Code Innovate 2025! Get ready for an exciting hackathon.",
//         "hackathonRegistrationLimit": 200,
//         "hackathonRate": 4.8,
//         "clerkId": "clerk_12345"
//     });

//     return (
//         <div className='text-white p-5'>
//             <h1 className="text-xl font-bold">Hackathon Details</h1>
//             <pre className="bg-gray-900 p-4 rounded-lg">{JSON.stringify(currentStep, null, 2)}</pre>
//         </div>
//     );
// }

// export default Page;



"use client"
import HackathonCard from "@/components/ui/HackathonCard"

const Page = () => {
  const hackathons = [
    {
        id: "hackathon_1",
      hackathonName: "Code Innovate 2025",
      hackathonDescription: "A 48-hour hackathon focused on AI and IoT solutions.",
      hackathonVenue: "Tech Park, Bangalore",
      hackathonVenueUrl: "https://maps.example.com/techpark",
      hackathonDate: "2025-06-15T00:00:00.000Z",
      hackathonPrice: "₹500",
      hackathonStatus: true,
      hackathonRate: 4.8,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: "hackathon_2",
      hackathonName: "Web3 Wonders 2025",
      hackathonDescription: "Explore the future of decentralized applications in this 36-hour coding marathon.",
      hackathonVenue: "Innovation Hub, Mumbai",
      hackathonVenueUrl: "https://maps.example.com/innovation-hub",
      hackathonDate: "2025-07-22T00:00:00.000Z",
      hackathonPrice: "₹750",
      hackathonStatus: true,
      hackathonRate: 4.6,
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: "hackathon_3",
      hackathonName: "Green Tech Challenge",
      hackathonDescription: "Build sustainable solutions in this 24-hour eco-friendly hackathon.",
      hackathonVenue: "Eco Center, Delhi",
      hackathonVenueUrl: "https://maps.example.com/eco-center",
      hackathonDate: "2025-09-05T00:00:00.000Z",
      hackathonPrice: "₹600",
      hackathonStatus: false,
      hackathonRate: 4.9,
      image:
        "https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ]

  return (
    <div className="p-5 bg-zinc-100 dark:bg-zinc-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-white">Upcoming Hackathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </div>
  )
}

export default Page

