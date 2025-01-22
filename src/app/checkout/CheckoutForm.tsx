"use client"

import { useState } from "react"
import { useCustomNavigation } from "@/utils/navigation"

interface CheckoutFormProps {
  total: number
  onSuccess: () => void
}

export default function CheckoutForm({ total, onSuccess }: CheckoutFormProps) {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { navigate } = useCustomNavigation()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setProcessing(true)

    try {
      // Call the payment API
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Payment failed")
      }

      // After successful processing, trigger exit animation and callback
      document.body.classList.add("page-exit")
      onSuccess()
    } catch (err) {
      setError("Payment failed. Please try again.")
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="1234 5678 9012 3456"
            disabled={processing}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="MM/YY"
              disabled={processing}
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="123"
              disabled={processing}
            />
          </div>
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <button
        type="submit"
        disabled={processing}
        className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  )
}

