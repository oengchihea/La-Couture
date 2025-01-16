'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCustomNavigation } from '@/utils/navigation'

export default function AboutUs() {
  const { navigate } = useCustomNavigation()

  return (
    <section id="about" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-center mb-12"
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/aboutus/about 1.jpg"
                alt="Wedding rings detail"
                fill
                className="object-cover grayscale rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[#1e1e1e] leading-relaxed">
              At La Couture, we are the custodians of a rich tapestry woven from luxury and tradition. 
              Our boutique stands as a testament to the timeless elegance of Khmer aesthetics, 
              seamlessly interwoven with the pulse of contemporary fashion. With an unwavering 
              commitment to craftsmanship, we curate an experience that transcends mere clothing. 
              Our expertise lies in bridging the gap between Cambodia cultural heritage and modern 
              sartorial expression, creating pieces that are not just worn, but lived in and cherished.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/aboutus')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
              About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative aspect-[3/4]"
              >
                <Image
                  src="/images/aboutus/about 2.jpg"
                  alt="Couple on stairs"
                  fill
                  className="object-cover grayscale rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative aspect-[3/4]"
              >
                <Image
                  src="/images/aboutus/about 3.jpg"
                  alt="Couple dancing"
                  fill
                  className="object-cover grayscale rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

