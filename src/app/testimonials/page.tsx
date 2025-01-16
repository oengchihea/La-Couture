'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useCustomNavigation } from '@/utils/navigation'

const testimonials = [
  {
    id: 1,
    name: "Weison",
    role: "CEO Company",
    image: "/images/testimonials/profile 1.jpg",
    signature: "/images/testimonials/signature1.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes, they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion, it's a game-changer!"
  },
  {
    id: 2,
    name: "Oeng Chihea",
    role: "Designer",
    image: "/images/testimonials/profile 2.jpg",
    signature: "/images/testimonials/signature2.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes, they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion, it's a game-changer!"
  },
  {
    id: 3,
    name: "Lim Phanith",
    role: "Developer",
    image: "/images/testimonials/profile 3.jpg",
    signature: "/images/testimonials/signature1.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes, they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion, it's a game-changer!"
  },
  {
    id: 4,
    name: "Rith Sinawatra",
    role: "Fashion Blogger",
    image: "/images/testimonials/profile 4.jpg",
    signature: "/images/testimonials/signature2.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes, they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion, it's a game-changer!"
  },
  {
    id: 5,
    name: "Sopheak Rithmunny",
    role: "Stylist",
    image: "/images/testimonials/profile 5.jpg",
    signature: "/images/testimonials/signature2.png",
    rating: 5,
    text: "La Couture has revolutionized my wardrobe! The perfect fit, exquisite craftsmanship, and attention to detail make each piece feel custom-made. Their designs are not just clothes, they're confidence boosters. The exceptional customer service is the cherry on top. I've never felt more stylish or comfortable in my outfits. La Couture isn't just fashion, it's a game-changer!"
  }
]

export default function TestimonialsPage() {
  const { navigate } = useCustomNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSmallIndex, setActiveSmallIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextSmallTestimonial = () => {
    setActiveSmallIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSmallTestimonial = () => {
    setActiveSmallIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      <div className="container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-[#000000] text-white px-6 py-2 rounded-full mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-light text-center mb-16"
        >
          Testimonials
        </motion.h1>

        {/* Small Testimonials Section */}
        <div className="relative mb-24">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeSmallIndex * 33.33}%)`,
                gap: '2rem',
                padding: '0 1rem'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`small-${testimonial.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-1/3 bg-[#d9d9d9] p-6 rounded-lg relative"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <h3 className="text-xl font-light">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <p className="text-sm text-[#1e1e1e] italic text-center">
                    {testimonial.text.substring(0, 150)}...
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevSmallTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-[#000000] text-white w-12 h-12 rounded-full flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSmallTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-[#000000] text-white w-12 h-12 rounded-full flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity rotate-180"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Large Testimonials Section */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-[#d9d9d9] rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-12 space-y-6">
                    <p className="text-[#1e1e1e] italic leading-relaxed">
                      {testimonials[currentIndex].text}
                    </p>
                    <div className="space-y-2">
                      <p className="text-2xl font-light">{testimonials[currentIndex].name}</p>
                      <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <div className="pt-4">
                      <Image
                        src={testimonials[currentIndex].signature || "/placeholder.svg"}
                        alt={`${testimonials[currentIndex].name}'s signature`}
                        width={150}
                        height={60}
                        className="opacity-80"
                      />
                    </div>
                  </div>
                  <div className="relative h-[600px]">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#000000] text-white text-sm px-3 py-1 rounded-full">
                      Our Client
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#000000] text-white w-12 h-12 rounded-full flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#000000] text-white w-12 h-12 rounded-full flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity rotate-180"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-12"
        >
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-[#000000]' : 'bg-[#d9d9d9]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

