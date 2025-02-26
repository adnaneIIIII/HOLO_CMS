"use client"
import { Button } from "@/components/ui/button"
import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { parseWithZod } from "@conform-to/zod"
import { useActionState } from "react"
import { createorder } from "@/app/actions/order"
import { useForm } from "@conform-to/react"
import { Purchase } from "@/app/lib/ZodSchema"
export default function CheckoutForm({ params }: { params: string }) {
  const [lastResult, action] = useActionState(createorder, undefined)
  const [from, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: Purchase })
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  })

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Your details</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <form id={from.id} onSubmit={from.onSubmit} action={action}>
          {/* Add hidden input for productId */}
          <input type="hidden" name={fields.productId.name} value={params} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                key={fields.firstname.key}
                name={fields.firstname.name}
                defaultValue={fields.firstname.initialValue}
                type="text"
                placeholder="First Name"
              />
              <p className="text-red-500">{fields.firstname.errors}</p>
              </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                key={fields.lastname.key}
                name={fields.lastname.name}
                defaultValue={fields.lastname.initialValue}
                type="text"
                placeholder="Last Name"
              />
              <p className="text-red-500">{fields.lastname.errors}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              key={fields.email.key}
              name={fields.email.name}
              defaultValue={fields.email.initialValue}
              placeholder="you@example.com"
            />
              <p className="text-red-500">{fields.email.errors}</p>
              </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Your Phone (WhatsApp)</Label>
            <Input
              id="phone"
              type="tel"
              key={fields.phone.key}
              name={fields.phone.name}
              defaultValue={fields.phone.initialValue}
            />
              <p className="text-red-500">{fields.phone.errors}</p>
              </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select key={fields.country.key} name={fields.country.name} defaultValue={fields.country.initialValue}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Choose..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United_States">United States</SelectItem>
                <SelectItem value="United_Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="Philippines">Philippines</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-red-500">{fields.country.errors}</p>
            </div>


          <Button size="lg" type="submit" className="w-full bg-primary mt-4">
            Place Order
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

