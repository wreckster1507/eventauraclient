"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"

interface HackathonCardProps {
    id: string
  hackathonName: string
  hackathonDescription: string
  hackathonVenue: string
  hackathonVenueUrl: string
  hackathonDate: string
  hackathonPrice: string
  hackathonStatus: boolean
  hackathonRate: number
  image?: string
}

export default function HackathonCard({
    id,
  hackathonName,
  hackathonDescription,
  hackathonVenue,
  // hackathonVenueUrl,
  hackathonDate,
  hackathonPrice,
  hackathonStatus,
  hackathonRate,
  image = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
}: HackathonCardProps) {
  const formattedDate = new Date(hackathonDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <a href={`/hackathons/${id}`} className="block w-full max-w-[320px] group" >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-white/80 dark:bg-zinc-900/80",
          "backdrop-blur-xl",
          "border border-zinc-200/50 dark:border-zinc-800/50",
          "shadow-sm",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-md",
          "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
        )}
      >
        {/* Image Section */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={hackathonName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Overlay */}
        <div className={cn("absolute inset-0", "bg-gradient-to-t from-black/90 via-black/40 to-transparent")} />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-medium",
              "bg-white/90 text-zinc-800",
              "dark:bg-zinc-900/90 dark:text-zinc-200",
              "backdrop-blur-md",
              "shadow-sm",
              "border border-white/20 dark:border-zinc-800/50",
              hackathonStatus ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white",
            )}
          >
            {hackathonStatus ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 leading-snug">{hackathonName}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">{hackathonDescription}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
              <Calendar className="w-4 h-4 mr-2" />
              {formattedDate}
            </div>
            <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
              <MapPin className="w-4 h-4 mr-2" />
              {hackathonVenue}
            </div>
            <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              {hackathonRate.toFixed(1)}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{hackathonPrice}</span>
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-zinc-100 dark:bg-zinc-800",
                "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700",
                "transition-colors duration-300",
              )}
            >
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

