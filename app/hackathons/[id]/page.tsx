/* eslint-disable */
"use client"

import Link from "next/link"
import { Calendar, MapPin, Clock, Mail, Phone, CreditCard, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns"
import React from "react"
import { motion } from "framer-motion"

const isHackathonClosed = (hackathonDate: string) => {
  const hackathonDateObj = new Date(hackathonDate)
  const currentDate = new Date()
  return currentDate > hackathonDateObj
}

const HackathonDetail = ({ params }) => {
  const hackathon = {
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
    hackathonManagerMail: "contact@codeinnovate.com",
    hackathonManagerPhone: "+91 98765 43210",
    hackathonHostedBy: "Tech Innovators Inc.",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{hackathon.hackathonName}</h1>
          <div className="flex items-center space-x-2 text-blue-100">
            <Calendar className="w-5 h-5" />
            <span>{format(new Date(hackathon.hackathonDate), "MMMM d, yyyy")}</span>
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
                  <CardTitle>About the Hackathon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-line">{hackathon.hackathonDescription}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-gray-700">{hackathon.hackathonVenue}</p>
                      <a
                        href={hackathon.hackathonVenueUrl}
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
              transition={{ duration: 0.5, delay: 0.6 }}
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
                      <span className="font-semibold">{hackathon.hackathonPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Date</span>
                      </div>
                      <span className="font-semibold">{format(new Date(hackathon.hackathonDate), "MMMM d, yyyy")}</span>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{hackathon.hackathonManagerMail}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{hackathon.hackathonManagerPhone}</span>
                      </div>
                    </div>
                    {isHackathonClosed(hackathon.hackathonDate) ? (
                      <div className="text-red-500 font-semibold text-center">Hackathon Registration Closed</div>
                    ) : (
                      <Link href={`/hackathons/${hackathon.id}/register`}>
                        <span className="inline-block w-full rounded-md shadow-sm">
                          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Register Now</Button>
                        </span>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 font-medium">{hackathon.hackathonRate}</span>
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
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${hackathon.hackathonHostedBy}`} />
                      <AvatarFallback>
                        {hackathon.hackathonHostedBy
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700 font-medium">{hackathon.hackathonHostedBy}</span>
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

export default HackathonDetail