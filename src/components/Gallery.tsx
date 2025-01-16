'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useCustomNavigation } from '@/utils/navigation'

const suits = [
  { 
    id: 1, 
    name: 'Classic Brown Three-Piece', 
    price: 125.00, 
    image: '/images/gallery/suit 1.png',
    category: 'men',
    isNew: true 
  },
  { 
    id: 2, 
    name: 'Modern Black Business', 
    price: 140.00, 
    image: '/images/gallery/suit 2.png',
    category: 'men',
    isNew: true 
  },
  { 
    id: 3, 
    name: 'Navy Professional', 
    price: 145.00, 
    image: '/images/gallery/suit 3.png',
    category: 'men',
    isNew: true 
  },
  { 
    id: 4, 
    name: 'Black Tie Formal', 
    price: 110.00, 
    image: '/images/gallery/suit 4.png',
    category: 'men',
    isNew: true 
  },
  { 
    id: 5, 
    name: 'Modern Black Essential', 
    price: 160.00, 
    image: '/images/gallery/suit 5.png',
    category: 'men',
    isNew: true 
  },
  { 
    id: 6, 
    name: 'Navy Evening', 
    price: 180.00, 
    image: '/images/gallery/suit 6.png',
    category: 'men',
    isNew: true 
  }
]

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { navigate } = useCustomNavigation()

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">Gallery</h2>
          <p className="text-gray-600">Explore our latest collection of bespoke suits</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suits.map((suit, index) => (
            <motion.div
              key={suit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(suit.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={suit.image}
                  alt={suit.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {suit.isNew && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black text-white px-3 py-1 text-sm font-light">
                      New
                    </span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                    hoveredId === suit.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-white">
                    <h3 className="text-xl font-light mb-2">{suit.name}</h3>
                    <p className="text-lg">${suit.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/gallery')}
            className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-gray-900 transition-colors"
          >
            View All Collection
            <Plus className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

