'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { NeonGradientCard } from './ui/NeonCard'
import { ColourfulText } from './ui/colourful-text'
import { NumberTicker } from './ui/number-ticker'

export default function PricingCalculator() {
  const [isPaid, setIsPaid] = useState(true)
  const [ticketPrice, setTicketPrice] = useState(1600)
  const [totalTickets, setTotalTickets] = useState(100)
  
  // Calculate fees and totals
  const calculateFees = () => {
    if (!isPaid) return { payout: 0, attendeesPay: 0, ticketingFee: 0 }
    
    const baseAmount = ticketPrice * totalTickets
    const platformFeePerTicket = (ticketPrice * 0.02) + 5 // 2% + ₹5 per ticket
    const totalFee = platformFeePerTicket * totalTickets
    
    return {
      payout: baseAmount - totalFee,
      attendeesPay: baseAmount,
      ticketingFee: totalFee
    }
  }

  const { payout, attendeesPay, ticketingFee } = calculateFees()

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Card className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Is your event paid or free?
            </h2>
            <div className="flex gap-4">
              <Button
                variant={isPaid ? "default" : "outline"}
                className={`w-full ${isPaid ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                onClick={() => setIsPaid(true)}
              >
                Paid
              </Button>
              <Button
                variant={!isPaid ? "default" : "outline"}
                className={`w-full ${!isPaid ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                onClick={() => setIsPaid(false)}
              >
                Free
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-700">
                Ticket price
              </label>
              <Input
                type="number"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                min="0"
                className="text-lg"
                disabled={!isPaid}
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-700">
                Total tickets
              </label>
              <Input
                type="number"
                value={totalTickets}
                onChange={(e) => setTotalTickets(Number(e.target.value))}
                min="1"
                className="text-lg"
              />
            </div>
          </div>
        </div>
            
        {/* <div className="bg-blue-500 rounded-xl p-8 text-white"> */}
        <NeonGradientCard>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">
                Your estimated payout
              </h3>
              <motion.div
                key={payout}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold "
              >
                {/* <ColourfulText text={`₹ ${payout.toFixed(2)}`} /> */}
                ₹ <NumberTicker value={payout} />
                {/* ₹ {payout.toFixed(2)} */}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-400">
                
              <div>
                <div className="text-blue-500">Attendees pay</div>
                <motion.div
                  key={attendeesPay}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xl font-semibold"
                >
                  ₹ {attendeesPay.toFixed(2)}
                </motion.div>
              </div>
              <div>
                <div className="text-blue-500">Ticketing fee</div>
                <motion.div
                  key={ticketingFee}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xl font-semibold"
                >
                  ₹ {ticketingFee.toFixed(2)}
                </motion.div>
              </div>
            </div>
          </div>
        </NeonGradientCard>
        {/* </div> */}
        

      </Card>
    </div>
  )
}

