




import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import axios from "axios"
import { useState } from "react"

interface PaymentStepProps {
  eventDetails: {
    eventName: string
    eventDate: string
    eventPrice: number
    _id: string // Assuming this is the event ID
  }
  onPrevious: () => void
  onPayment: () => void
  formData: {
    name: string
    email: string
    phoneNumber: string
  }
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ eventDetails, onPrevious, onPayment, formData }) => {
  const [loading, setLoading] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)
  // const navigate = useNavigate()

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const total = eventDetails.eventPrice

  const handlePayment = async () => {
    if (eventDetails.eventPrice === 0) {
      try {
        const response = await axios.post(
          // `https://api.eventaura.tech/registration/${eventDetails._id}`,
          `http://localhost:8080/registration/${eventDetails._id}`,
          formData
        )
        console.log(response.data)
        if (response && response.data.message === true) {
          return
        }
      } catch (error) {
        console.log(error)
      }
      return
    }
    try {
      const response = await axios.post(
        // `https://api.eventaura.tech/api/phone-pay/registration/user/${eventDetails._id}`,
        `http://localhost:8080/api/phone-pay/registration/user/${eventDetails._id}`,
        formData
      )
      window.open(response.data, "_self")
    } catch (error) {
      console.log(error)
    }
  }
  

  // const handlePayment = async () => {
   
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8080/phone-pay/registration/user/${eventDetails._id}`,
  //       formData
  //     )
  //     window.open(response.data, "_self")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

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
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Total</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{formatPrice(total)}</span>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={loading}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-sm font-medium",
            "bg-indigo-600 text-white",
            "hover:bg-indigo-700",
            "transition-colors duration-300",
            "flex items-center justify-center gap-2",
          )}
        >
          {loading ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <>
              Pay {formatPrice(total)} with PhonePay
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </Button>

        {/* Render iframe if payment URL is available */}
        {paymentUrl && (
          <iframe
            src={paymentUrl}
            title="Payment Gateway"
            width="100%"
            height="500px"
            frameBorder="0"
            onLoad={handlePaymentSuccess} // Trigger redirection after payment is done
          ></iframe>
        )}
      </CardContent>
      <CardFooter className="flex justify-start border-t border-zinc-200 dark:border-zinc-800 pt-4">
        <Button onClick={onPrevious} variant="outline">
          Previous
        </Button>
      </CardFooter>
    </Card>
  )
}





