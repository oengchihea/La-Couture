'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useCustomNavigation } from '@/utils/navigation'

export default function AboutUsPage() {
  const { navigate } = useCustomNavigation()

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="container mx-auto px-4 py-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-[#000000] text-white px-6 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>
      </div>

      <div className="space-y-24">
        {/* Hero Section */}
        <div className="bg-[#000000]">
          <div className="container mx-auto px-4 py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-light text-center text-white mb-24"
            >
              About Us
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-16 flex items-center"
              >
                <div className="max-w-xl">
                  <p className="text-white text-sm leading-loose">
                    "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes; they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion; it's a game-changer!"
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-[600px]"
              >
                <Image
                  src="/images/aboutus/about 4.png"
                  alt="Wedding couple on stairs"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#1e1e1e] text-sm leading-loose text-center">
              In the heart of Cambodia's evolving fashion landscape stands La Couture, a name that has become synonymous with unparalleled elegance and timeless sophistication. Our journey began with a singular vision: to transform the art of wedding fashion into an extraordinary experience that captures the essence of each couple's unique love story. At La Couture, we believe that a wedding dress is more than just a garment – it's a masterpiece that tells a story, carries dreams, and creates memories that will be cherished for generations.
            </p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-center my-24"
          >
            Our Story
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] h-[600px]"
            >
              <Image
                src="/images/aboutus/about 5.png"
                alt="Wedding preparation"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-[#1e1e1e] text-sm leading-loose">
                La Couture represents the pinnacle of bridal excellence, where traditional Khmer artistry meets contemporary elegance. Our atelier is a sanctuary where dreams take shape, guided by the skilled hands of master craftsmen who understand that every stitch carries the weight of a moment that will last forever. We take pride in our ability to blend cultural heritage with modern sophistication, creating designs that speak to both the heart and the eye.
              </p>
              <p className="text-[#1e1e1e] text-sm leading-loose">
                Each creation at La Couture is a testament to our commitment to perfection. We understand that a wedding dress is not merely worn – it's experienced. It's the gentle rustle of fabric as you walk down the aisle, the way it catches the light during your first dance, the gasps of admiration from your loved ones. These are the moments we craft for, the emotions we weave into every design. Our dedication to excellence extends beyond the final stitch, encompassing a complete bridal journey that's as memorable as the wedding day itself.
              </p>
              <p className="text-[#1e1e1e] text-sm leading-loose">
                As we continue to evolve and innovate, our core values remain unchanged. We believe in the power of personal connection, the importance of understanding each bride's unique vision, and the art of bringing that vision to life. La Couture is more than a brand – it's a promise of excellence, a commitment to creativity, and a dedication to making every bride feel extraordinary on her special day. This is the essence of La Couture, where every dress tells a story, and every bride becomes part of our continuing legacy of elegance and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

