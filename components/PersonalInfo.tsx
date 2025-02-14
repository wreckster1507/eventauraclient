// import type React from "react"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"

// interface PersonalInfoProps {
//   formData: {
//     name: string
//     email: string
//     phone: string
//   }
//   updateFormData: (data: Partial<PersonalInfoProps["formData"]>) => void
//   onSubmit: () => void
//   onPrevious: () => void
// }

// export const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, updateFormData, onSubmit, onPrevious }) => {
//   return (
//     <div className="space-y-4 bg-black p-4 rounded-lg">
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input
//           id="name"
//           value={formData.name}
//           onChange={(e) => updateFormData({ name: e.target.value })}
//           placeholder="Enter your name"
//         />
//       </div>
//       <div>
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           type="email"
//           value={formData.email}
//           onChange={(e) => updateFormData({ email: e.target.value })}
//           placeholder="Enter your email"
//         />
//       </div>
//       <div>
//         <Label htmlFor="phone">Phone Number</Label>
//         <Input
//           id="phone"
//           type="tel"
//           value={formData.phone}
//           onChange={(e) => updateFormData({ phone: e.target.value })}
//           placeholder="Enter your phone number"
//         />
//       </div>
//       <div className="flex justify-between">
//         <Button onClick={onPrevious} variant="outline">
//           Previous
//         </Button>
//         <Button onClick={onSubmit}>Continue to Payment</Button>
//       </div>
//     </div>
//   )
// }






// import type React from "react"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// interface PersonalInfoProps {
//   formData: {
//     name: string
//     email: string
//     phone: string
//   }
//   updateFormData: (data: Partial<PersonalInfoProps["formData"]>) => void
//   onSubmit: () => void
//   onPrevious: () => void
// }

// export const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, updateFormData, onSubmit, onPrevious }) => {
//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Personal Information</CardTitle>
//         <CardDescription>Please provide your personal details</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input
//             id="name"
//             value={formData.name}
//             onChange={(e) => updateFormData({ name: e.target.value })}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             value={formData.email}
//             onChange={(e) => updateFormData({ email: e.target.value })}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input
//             id="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={(e) => updateFormData({ phone: e.target.value })}
//             placeholder="Enter your phone number"
//           />
//         </div>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button onClick={onPrevious} variant="outline">
//           Previous
//         </Button>
//         <Button onClick={onSubmit}>Continue to Payment</Button>
//       </CardFooter>
//     </Card>
//   )
// }



import type React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface PersonalInfoProps {
  formData: {
    name: string
    email: string
    phoneNumber: string
  }
  updateFormData: (data: Partial<PersonalInfoProps["formData"]>) => void
  onSubmit: () => void
  onPrevious: () => void
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, updateFormData, onSubmit, onPrevious }) => {
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
        <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm text-zinc-600 dark:text-zinc-400">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-zinc-600 dark:text-zinc-400">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm text-zinc-600 dark:text-zinc-400">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
        </div>

        <Button
          onClick={onSubmit}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-sm font-medium",
            "bg-indigo-600 text-white",
            "hover:bg-indigo-700",
            "transition-colors duration-300",
            "flex items-center justify-center gap-2",
          )}
        >
          Continue to Payment
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

