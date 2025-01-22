"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useCustomNavigation } from "@/utils/navigation"

export default function SuccessPage() {
  const { navigate } = useCustomNavigation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }}>
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        </motion.div>

        <h1 className="text-2xl font-light mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been confirmed.</p>

        <button
          onClick={() => navigate("/gallery")}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </button>
      </motion.div>
    </motion.div>
  )
}

