import type React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface PersonalInfoProps {
  formData: {
    name: string
    email: string
    phone: string
  }
  updateFormData: (data: Partial<PersonalInfoProps["formData"]>) => void
  onSubmit: () => void
  onPrevious: () => void
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, updateFormData, onSubmit, onPrevious }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={onPrevious} variant="outline">
          Previous
        </Button>
        <Button onClick={onSubmit}>Continue to Payment</Button>
      </div>
    </div>
  )
}

