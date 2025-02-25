

// "use client"

// import React, { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { TermsAndConditions } from "@/components/TermsAndConditions"
// import { PersonalInfo } from "@/components/PersonalInfo"
// import { PaymentStep } from "@/components/PaymentStep"
// import axios from "axios"

// // Define the EventDetails interface
// interface EventDetails {
//   _id: string
//   eventName: string
//   eventDate: string
//   eventDescription: string
//   eventPrice: number
//   eventLastDate: string
//   eventManagerMail: string
//   eventManagerPhone: string
//   eventHostedBy: string
//   eventVenue: string
//   eventVenueUrl: string
//   eventSpeaker: string
// }

// const Index = ({ params }: { params: { id: string } }) => {
//   const [currentStep, setCurrentStep] = useState(0)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//   })
//   const [eventDetails, setEventDetails] = useState<EventDetails | null>(null)
//   const unWrappedParams = React.use(params)
//   const { id } = unWrappedParams

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       try {
//         const response = await axios.get<{ data: EventDetails }>(`https://api.eventaura.tech/event/${id}`)
//         setEventDetails(response.data.data)
//         console.log("Event details:", response.data.data)
//       } catch (error) {
//         console.error("Error fetching event details:", error)
//       }
//     }

//     fetchEventDetails()
//   }, [id])

//   const handleAcceptTerms = () => {
//     setCurrentStep(1)
//   }

//   const handlePersonalInfoSubmit = () => {
//     setCurrentStep(2)
//   }

//   const handlePrevious = () => {
//     setCurrentStep(currentStep - 1)
//   }

//   const updateFormData = (data: Partial<typeof formData>) => {
//     setFormData((prevData) => ({ ...prevData, ...data }))
//   }

//   return (
//     <div className="min-h-screen text-white p-4 md:p-8">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Event Registration</h1>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStep}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.3 }}
//           >
//             {currentStep === 0 && <TermsAndConditions onAccept={handleAcceptTerms} />}
//             {currentStep === 1 && (
//               <PersonalInfo
//                 formData={formData}
//                 updateFormData={updateFormData}
//                 onSubmit={handlePersonalInfoSubmit}
//                 onPrevious={handlePrevious}
//               />
//             )}
//             {currentStep === 2 && eventDetails && (
//               <PaymentStep
//                 eventDetails={eventDetails}
//                 onPrevious={handlePrevious}
//                 onPayment={() => {}}
//                 formData={formData}
//               />
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

// export default Index




"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TermsAndConditions } from "@/components/TermsAndConditions"
import { PersonalInfo } from "@/components/PersonalInfo"
import { PaymentStep } from "@/components/PaymentStep"
import axios from "axios"

// Define the EventDetails interface
interface EventDetails {
  _id: string
  eventName: string
  eventDate: string
  eventDescription: string
  eventPrice: number
  eventLastDate: string
  eventManagerMail: string
  eventManagerPhone: string
  eventHostedBy: string
  eventVenue: string
  eventVenueUrl: string
  eventSpeaker: string
}

const Index = ({ params }: { params: { id: string } }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  })
  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null)
  const unWrappedParams = React.use(params)
  const { id } = unWrappedParams

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get<{ data: EventDetails }>(`https://api.eventaura.tech/event/${id}`)
        setEventDetails(response.data.data)
        console.log("Event details:", response.data.data)
      } catch (error) {
        console.error("Error fetching event details:", error)
      }
    }

    fetchEventDetails()
  }, [id])

  const handleAcceptTerms = () => {
    setCurrentStep(1)
  }

  const handlePersonalInfoSubmit = () => {
    setCurrentStep(2)
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }))
  }

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Event Registration</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && <TermsAndConditions onAccept={handleAcceptTerms} />}
            {currentStep === 1 && (
              <PersonalInfo
                formData={formData}
                updateFormData={updateFormData}
                onSubmit={handlePersonalInfoSubmit}
                onPrevious={handlePrevious}
              />
            )}
            {currentStep === 2 && eventDetails && (
              <PaymentStep
                eventDetails={eventDetails}
                onPrevious={handlePrevious}
                onPayment={() => {}}
                formData={formData}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Index