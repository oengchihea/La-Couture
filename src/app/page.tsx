"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import AboutUs from "@/components/AboutUs"
import Aesthetics from "@/components/Aesthetics"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useCustomNavigation } from "@/utils/navigation"

export default function Home() {
  const { navigate } = useCustomNavigation()

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <Testimonials />
      <Gallery />
      <AboutUs />
      <Aesthetics />
      <Contact />
      <Footer />

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate("/gallery")}
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        View Full Gallery
      </motion.button>
    </motion.main>
  )
}

