"use client"

import { useState } from "react"
import { useCustomNavigation } from "@/utils/navigation"
import Image from "next/image"

interface CheckoutFormProps {
  total: number
  onSuccess: () => void
}

export default function CheckoutForm({ total, onSuccess }: CheckoutFormProps) {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showQR, setShowQR] = useState(false)
  const { navigate } = useCustomNavigation()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProcessing(true)
    setError(null)

    const form = event.currentTarget
    const cardNumber = form.cardNumber.value
    const expiry = form.expiry.value
    const cvc = form.cvc.value

    if (!cardNumber || !expiry || !cvc) {
      setError("Please fill in all fields")
      setProcessing(false)
      return
    }

    try {
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

      document.body.classList.add("page-exit")
      onSuccess()
    } catch (err) {
      setError("Payment failed. Please try again.")
    } finally {
      setProcessing(false)
    }
  }

  const togglePaymentMethod = () => {
    setShowQR(!showQR)
  }

  return (
    <div className="space-y-6">
      {!showQR ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="1234 5678 9012 3456"
                disabled={processing}
                required
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
                  name="expiry"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="MM/YY"
                  disabled={processing}
                  required
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="123"
                  disabled={processing}
                  required
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
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ew7SP8R4yc1YCbgm7XuIpldNMxxQT1.png"
            alt="ABA Pay QR Code"
            width={300}
            height={400}
            className="w-auto h-auto"
          />
          <p className="text-center text-gray-600">Scan this QR code to complete your payment</p>
        </div>
      )}

      <button
        onClick={togglePaymentMethod}
        className="w-full bg-gray-100 text-gray-800 py-3 rounded-full hover:bg-gray-200 transition-colors"
      >
        {showQR ? "Back to Card Payment" : "Pay with ABA Pay"}
      </button>
    </div>
  )
}

