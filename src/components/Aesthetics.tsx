'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCustomNavigation } from '@/utils/navigation'

export default function Aesthetics() {
  const { navigate } = useCustomNavigation()

  const handleShopNowClick = () => {
    navigate('/gallery')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-center mb-12"
        >
          Aesthetics
        </motion.h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3]"
            >
              <Image
                src="/images/aesthetic/aesthetic 1.jpg"
                alt="Couple ascending spiral stairs"
                fill
                className="object-cover grayscale rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3]"
            >
              <Image
                src="/images/aesthetic/aesthetic 2.jpg"
                alt="Couple with flowing veil"
                fill
                className="object-cover grayscale rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/images/aesthetic/aesthetic 3.jpg"
                alt="Artistic hand composition"
                fill
                className="object-cover grayscale rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed">
                At La Couture, we are the custodians of a rich tapestry woven from luxury 
                and tradition. Our boutique stands as a testament to the timeless elegance 
                of Khmer aesthetics, seamlessly interwoven with the pulse of contemporary fashion. 
                With an unwavering commitment to craftsmanship, we curate an experience that 
                transcends mere clothing, creating pieces that are not just worn, but lived in 
                and cherished.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShopNowClick}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Shop now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

