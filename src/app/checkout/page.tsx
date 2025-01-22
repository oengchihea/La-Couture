"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useCart } from "../contexts/cart-context"
import { ArrowLeft, Trash2 } from "lucide-react"
import { useCustomNavigation } from "@/utils/navigation"
import CheckoutForm from "./CheckoutForm"

export default function CheckoutPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart()
  const { navigate } = useCustomNavigation()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleInitiateCheckout = async () => {
    setIsProcessing(true)
    setShowForm(true)
    setIsProcessing(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/gallery")}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Gallery
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h1 className="text-3xl font-light mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-6">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 p-4 border rounded-lg"
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="rounded-md border p-2"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:text-red-700">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t pt-8">
                <div className="flex justify-between text-xl font-medium mb-8">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {!showForm ? (
                  <button
                    onClick={handleInitiateCheckout}
                    disabled={isProcessing}
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? "Processing..." : "Proceed to Checkout"}
                  </button>
                ) : (
                  <CheckoutForm
                    total={total}
                    onSuccess={() => {
                      clearCart()
                      navigate("/checkout/success")
                    }}
                  />
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

