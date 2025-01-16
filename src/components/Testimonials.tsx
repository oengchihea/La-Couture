'use client'

import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useCustomNavigation } from '@/utils/navigation'

const testimonials = [
  {
    id: 1,
    name: "Rith Sinawatra",
    role: "Designer",
    image: "/images/testimonials/profile 1.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes; they're confidence boosters."
  },
  {
    id: 2,
    name: "Lim Phanith",
    role: "Developer",
    image: "/images/testimonials/profile 2.png",
    rating: 4,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes; they're confidence boosters."
  }
]

export default function Testimonials() {
  const { navigate } = useCustomNavigation()
  
  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/testimonials')}
            className="group bg-[#000000] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <span>Book Your Experience Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#d9d9d9] p-8 rounded-lg relative"
            >
              <div className="absolute top-4 right-4 bg-[#000000] text-white text-sm px-3 py-1 rounded-full">
                Our Client
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{testimonial.name}</h3>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mt-4">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

