'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCustomNavigation } from '@/utils/navigation'

export default function Hero() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const { navigate } = useCustomNavigation()

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <Image
        src="/images/hero/hero 1.jpg"
        alt="Wedding couple with vintage car"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
        quality={85}
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-6xl md:text-7xl font-light"
          >
            La Couture
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white text-xl md:text-2xl font-light"
          >
            La Couture Always Brings You the Next Level Wedding.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onHoverStart={() => setIsHovered('book')}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/testimonials')}
              className="relative overflow-hidden rounded-full bg-white text-black px-8 py-4 transition-colors hover:bg-opacity-90"
            >
              <motion.span className="flex items-center gap-2">
                Book Your Experience Today
                <motion.div
                  animate={isHovered === 'book' ? { x: [0, 5, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </motion.button>

            <motion.button
              onHoverStart={() => setIsHovered('gallery')}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/gallery')}
              className="rounded-full border-2 border-white text-white px-8 py-4 transition-colors hover:bg-white hover:text-black w-full sm:w-auto"
            >
              <motion.span className="flex items-center gap-2">
                View Our Gallery
                <motion.div
                  animate={isHovered === 'gallery' ? { x: [0, 5, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <motion.p
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-sm font-light"
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
