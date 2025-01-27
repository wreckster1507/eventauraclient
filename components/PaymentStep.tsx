import type React from "react"
import { Button } from "@/components/ui/button"

interface PaymentStepProps {
  eventDetails: {
    name: string
    date: string
    price: number
  }
  onPrevious: () => void
  onPayment: () => void
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ eventDetails, onPrevious, onPayment }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Event Details</h2>
        <p>
          <strong>Event:</strong> {eventDetails.name}
        </p>
        <p>
          <strong>Date:</strong> {eventDetails.date}
        </p>
        <p>
          <strong>Ticket Price:</strong> ₹{eventDetails.price.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between">
        <Button onClick={onPrevious} variant="outline">
          Previous
        </Button>
        <Button onClick={onPayment} className="bg-green-600 hover:bg-green-700">
          Pay ₹{eventDetails.price.toFixed(2)} with PhonePay
        </Button>
      </div>
    </div>
  )
}

