
/* eslint-disable */
"use client"

import Link from "next/link"

import { Calendar, MapPin, Clock, Mail, Phone, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import axios from "axios"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define the Event interface
interface Event {
  _id: string
  eventName: string
  eventDate: string
  eventDescription: string
  eventSpeaker: string
  eventVenue: string
  eventVenueUrl: string
  eventPrice: number
  eventLastDate: string
  eventManagerMail: string
  eventManagerPhone: string
  eventHostedBy: string
}

interface EventDetailProps {
  params: {
    id: string
  }
  searchParams?: Record<string, string | string[] | undefined>;
  

}


// Helper function to check if the event is closed
const isEventClosed = (lastDate: string) => {
  const lastDateObj = new Date(lastDate)
  const currentDate = new Date()
  return currentDate > lastDateObj
}

const EventDetail = ({ params }:EventDetailProps ) => {
  // const unWrappedParams = React.use(params)
  // const { id } = unWrappedParams
  const { id } = params
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get<{ data: Event }>(`https://api.eventaura.tech/event/${id}`)
        setEvent(response.data.data)
      } catch (error) {
        console.error("Error fetching event details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEventDetails()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-gray-600">Error fetching event details.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-20 text-white"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.eventName}</h1>
          <div className="flex items-center space-x-2 text-blue-100">
            <Calendar className="w-5 h-5" />
            <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About the Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-line">{event.eventDescription}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Speakers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Speakers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {event.eventSpeaker.split(",").map((speaker, index) => {
                      const colors = ["amber-500", "blue-500", "green-500", "purple-500", "pink-500", "indigo-500"]
                      const color = colors[index % colors.length]
                      return (
                        <span
                          key={index}
                          className={`inline-flex items-center rounded-md bg-${color}/15 px-2 py-1 text-${color} text-sm font-medium ring-1 ring-inset ring-${color}/20`}
                        >
                          {speaker.trim()}
                        </span>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-gray-700">{event.eventVenue}</p>
                      <a
                        href={event.eventVenueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Registration Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Price</span>
                      </div>
                      <span className="font-semibold">₹{event.eventPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Last Date</span>
                      </div>
                      <span className="font-semibold">{format(new Date(event.eventLastDate), "MMMM d, yyyy")}</span>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{event.eventManagerMail}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{event.eventManagerPhone}</span>
                      </div>
                    </div>
                    {isEventClosed(event.eventLastDate) ? (
                      <div className="text-red-500 font-semibold text-center">Event Registration Closed</div>
                    ) : (
                      <Link href={`/events/${event._id}/register`}>
                        <span className="inline-block w-full rounded-md shadow-sm">
                          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Register Now</Button>
                        </span>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hosted By */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Hosted By</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${event.eventHostedBy}`} />
                      <AvatarFallback>
                        {event.eventHostedBy
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700 font-medium">{event.eventHostedBy}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
