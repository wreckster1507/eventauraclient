





// "use server"

// import axios from "axios"
// import { format } from "date-fns"
// import Link from "next/link"
// import { CalendarIcon, MapPinIcon, TicketIcon, ClockIcon, UserIcon, UsersIcon } from "lucide-react"

// interface EventProps {
//   _id: string
//   eventName: string
//   eventDescription: string
//   eventVenue: string
//   eventVenueUrl: string
//   eventDate: string
//   eventPrice: string
//   eventLastDate: string
//   eventHostedBy: string
//   eventSpeaker: string
// }

// function InfoItem({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
//   const content = (
//     <div className="flex items-center space-x-2 text-gray-600">
//       {icon}
//       <span>{text}</span>
//     </div>
//   )

//   return link ? (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
//       {content}
//     </a>
//   ) : (
//     content
//   )
// }

// const EventDetailPage = async ({ params }: { params: { id: string } }) => {
//   const { id } = params
//   console.log(id)

//   let event: EventProps | null = null
//   try {
//     const response = await axios.get(`https://api.eventaura.tech/event/${id}`)
//     event = response.data.data
//     console.log(event)
//   } catch (error) {
//     console.error("Error fetching events:", error)
//   }

//   if (!event) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl">Event not found or error loading data.</div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
//           <h1 className="text-4xl font-bold mb-2">{event.eventName}</h1>
//           <p className="text-lg opacity-90">{format(new Date(event.eventDate), "EEEE, MMMM d, yyyy")}</p>
//         </div>

//         <div className="p-6 space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InfoItem
//               icon={<CalendarIcon className="h-5 w-5 text-blue-500" />}
//               text={format(new Date(event.eventDate), "MMMM d, yyyy")}
//             />
//             <InfoItem
//               icon={<ClockIcon className="h-5 w-5 text-blue-500" />}
//               text={format(new Date(event.eventDate), "h:mm a")}
//             />
//             <InfoItem
//               icon={<MapPinIcon className="h-5 w-5 text-blue-500" />}
//               text={event.eventVenue}
//               link={event.eventVenueUrl}
//             />
//             <InfoItem icon={<TicketIcon className="h-5 w-5 text-blue-500" />} text={`₹${event.eventPrice}`} />
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">About the Event</h2>
//             <p className="text-gray-600 whitespace-pre-line">{event.eventDescription}</p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">Speakers</h2>
//             <div className="flex items-center text-gray-600">
//               <UserIcon className="h-5 w-5 mr-2 text-blue-500" />
//               <p>{event.eventSpeaker}</p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hosted By</h2>
//             <div className="flex items-center text-gray-600">
//               <UsersIcon className="h-5 w-5 mr-2 text-blue-500" />
//               <p>{event.eventHostedBy}</p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//             <p className="text-sm text-gray-500">
//               Registration closes on {format(new Date(event.eventLastDate), "MMMM d, yyyy")}
//             </p>
//             <Link
//               href={`/events/${event._id}/register`}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
//             >
//               Register Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EventDetailPage



"use server"

import { Calendar, MapPin, Users, Clock, Mail, Phone, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { format } from "date-fns";


const EventDetail = async ({ params }: { params: { id: string } })=> {
  const { id } = await params;
  

  let event
  try {
    const response = await axios.get(`https://api.eventaura.tech/event/${id}`);
    event = response.data.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw new Error("Failed to fetch event details.");
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#D3E4FD] to-blue-50 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-scale-in">
            {event.eventName}
          </h1>
          <div className="flex items-center text-[#1EAEDB] space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{format(new Date(event.eventDate), "h:mm a")}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.eventDescription}</p>
            </Card>

            {/* Speakers */}
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in delay-100">
              <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
              <div className="flex flex-wrap gap-4">
                {event.eventSpeaker.split(",").map((speaker, index) => (
                  <div
                    key={index}
                    className="bg-[#D3E4FD] text-[#0FA0CE] px-4 py-2 rounded-full text-sm"
                  >
                    {speaker.trim()}
                  </div>
                ))}
              </div>
            </Card>

            {/* Venue */}
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in delay-200">
              <h2 className="text-2xl font-semibold mb-4">Venue</h2>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#33C3F0] mt-1" />
                <div>
                  <p className="text-gray-700">{event.eventVenue}</p>
                  <a
                    href={event.eventVenueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1EAEDB] hover:text-[#0FA0CE] mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="p-6 border-[#D3E4FD] hover:shadow-lg transition-shadow animate-fade-in delay-300">
              <h3 className="text-xl font-semibold mb-4">Registration Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-[#33C3F0]" />
                    <span className="text-gray-600">Price</span>
                  </div>
                  <span className="font-semibold">₹{event.eventPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#33C3F0]" />
                    <span className="text-gray-600">Last Date</span>
                  </div>
                  <span className="font-semibold">{format(new Date(event.eventLastDate),"h:mm a")}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-[#33C3F0]" />
                    <span className="text-gray-600">{event.eventManagerMail}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-[#33C3F0]" />
                    <span className="text-gray-600">{event.eventManagerPhone}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#1EAEDB] to-[#0FA0CE] text-white hover:shadow-lg">
                  Register Now
                </Button>
              </div>
            </Card>

            {/* Hosted By */}
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in delay-400">
              <h3 className="text-xl font-semibold mb-4">Hosted By</h3>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#33C3F0]" />
                <span className="text-gray-700">{event.eventHostedBy}</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
