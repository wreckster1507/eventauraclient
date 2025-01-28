// import type React from "react"
// import { Button } from "@/components/ui/button"

// interface PaymentStepProps {
//   eventDetails: {
//     name: string
//     date: string
//     price: number
//   }
//   onPrevious: () => void
//   onPayment: () => void
// }

// export const PaymentStep: React.FC<PaymentStepProps> = ({ eventDetails, onPrevious, onPayment }) => {
//   return (
//     <div className="space-y-6">
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Event Details</h2>
//         <p>
//           <strong>Event:</strong> {eventDetails.name}
//         </p>
//         <p>
//           <strong>Date:</strong> {eventDetails.date}
//         </p>
//         <p>
//           <strong>Ticket Price:</strong> ₹{eventDetails.price.toFixed(2)}
//         </p>
//       </div>
//       <div className="flex justify-between">
//         <Button onClick={onPrevious} variant="outline">
//           Previous
//         </Button>
//         <Button onClick={onPayment} className="bg-green-600 hover:bg-green-700">
//           Pay ₹{eventDetails.price.toFixed(2)} with PhonePay
//         </Button>
//       </div>
//     </div>
//   )
// }




import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface PaymentStepProps {
  eventDetails: {
    eventName: string
    eventDate: string
    eventPrice: number
  }
  onPrevious: () => void
  onPayment: () => void
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ eventDetails, onPrevious, onPayment }) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const total = eventDetails.eventPrice

  return (
    <Card
      className={cn(
        "w-full max-w-[400px] mx-auto",
        "rounded-2xl",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "shadow-sm",
      )}
    >
      <CardHeader className="border-b border-zinc-200 dark:border-zinc-800">
        <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{eventDetails.eventName}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Date: {eventDetails.eventDate}</p>
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {formatPrice(eventDetails.eventPrice)}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Subtotal</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{formatPrice(eventDetails.eventPrice)}</span>
          </div>
          {/* <div className="flex justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Tax (8%)</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{formatPrice(tax)}</span>
          </div> */}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Total</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{formatPrice(total)}</span>
        </div>

        <Button
          onClick={onPayment}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-sm font-medium",
            "bg-indigo-600 text-white",
            "hover:bg-indigo-700",
            "transition-colors duration-300",
            "flex items-center justify-center gap-2",
          )}
        >
          Pay {formatPrice(total)} with PhonePay
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </CardContent>
      <CardFooter className="flex justify-start border-t border-zinc-200 dark:border-zinc-800 pt-4">
        <Button onClick={onPrevious} variant="outline">
          Previous
        </Button>
      </CardFooter>
    </Card>
  )
}



