"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, X, ArrowLeft, Eye, ShoppingBag, Heart, ZoomIn } from "lucide-react"
import { useCustomNavigation } from "@/utils/navigation"
import { useCart } from "../contexts/cart-context"
import { toast } from "sonner"

interface GalleryItem {
  id: number
  name: string
  price: number
  image: string
  category: "men" | "women"
  isNew: boolean
  isPopular: boolean
}

const allItems: GalleryItem[] = [
  {
    id: 1,
    name: "Classic Brown Three-Piece",
    price: 125.0,
    image: "/images/gallery/suit 1.png",
    category: "men",
    isNew: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Modern Black Business",
    price: 140.0,
    image: "/images/gallery/suit 2.png",
    category: "men",
    isNew: true,
    isPopular: false,
  },
  {
    id: 3,
    name: "Navy Professional",
    price: 145.0,
    image: "/images/gallery/suit 3.png",
    category: "men",
    isNew: true,
    isPopular: true,
  },
  {
    id: 4,
    name: "Black Tie Formal",
    price: 110.0,
    image: "/images/gallery/suit 4.png",
    category: "men",
    isNew: true,
    isPopular: false,
  },
  {
    id: 5,
    name: "Modern Black Essential",
    price: 160.0,
    image: "/images/gallery/suit 5.png",
    category: "men",
    isNew: true,
    isPopular: true,
  },
  {
    id: 6,
    name: "Navy Evening",
    price: 180.0,
    image: "/images/gallery/suit 6.png",
    category: "men",
    isNew: true,
    isPopular: false,
  },
  {
    id: 7,
    name: "Elegant White Gown",
    price: 500.0,
    image: "/images/gallery/gown 1.png",
    category: "women",
    isNew: true,
    isPopular: true,
  },
  {
    id: 8,
    name: "Lace Mermaid Gown",
    price: 600.0,
    image: "/images/gallery/gown 2.png",
    category: "women",
    isNew: false,
    isPopular: true,
  },
  {
    id: 9,
    name: "Bohemian Wedding Dress",
    price: 450.0,
    image: "/images/gallery/gown 3.png",
    category: "women",
    isNew: false,
    isPopular: false,
  },
  {
    id: 10,
    name: "Modern Minimalist Gown",
    price: 550.0,
    image: "/images/gallery/gown 4.png",
    category: "women",
    isNew: true,
    isPopular: true,
  },
  {
    id: 11,
    name: "Vintage Inspired Dress",
    price: 480.0,
    image: "/images/gallery/gown 5.png",
    category: "women",
    isNew: false,
    isPopular: false,
  },
  {
    id: 12,
    name: "Romantic Ball Gown",
    price: 700.0,
    image: "/images/gallery/gown 6.png",
    category: "women",
    isNew: true,
    isPopular: true,
  },
]

export default function GalleryPage() {
  const [items, setItems] = React.useState<GalleryItem[]>(allItems)
  const [category, setCategory] = React.useState<"all" | "men" | "women">("all")
  const [sortBy, setSortBy] = React.useState<"default" | "popular" | "new" | "price-asc" | "price-desc">("default")
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [priceRange, setPriceRange] = React.useState<"all" | "under-200" | "200-500" | "over-500">("all")
  const [isZoomed, setIsZoomed] = React.useState(false)
  const { navigate } = useCustomNavigation()
  const { addToCart } = useCart()

  React.useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  React.useEffect(() => {
    let filteredItems = [...allItems]

    if (category !== "all") {
      filteredItems = filteredItems.filter((item) => item.category === category)
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    switch (priceRange) {
      case "under-200":
        filteredItems = filteredItems.filter((item) => item.price < 200)
        break
      case "200-500":
        filteredItems = filteredItems.filter((item) => item.price >= 200 && item.price <= 500)
        break
      case "over-500":
        filteredItems = filteredItems.filter((item) => item.price > 500)
        break
    }

    switch (sortBy) {
      case "popular":
        filteredItems = filteredItems.filter((item) => item.isPopular)
        break
      case "new":
        filteredItems = filteredItems.filter((item) => item.isNew)
        break
      case "price-asc":
        filteredItems.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredItems.sort((a, b) => b.price - a.price)
        break
    }

    setItems(filteredItems)
  }, [category, sortBy, searchTerm, priceRange])

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item)
    setIsZoomed(false)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setIsZoomed(false)
  }

  const handleAddToCart = (item: GalleryItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    toast.success("Added to cart!")

    // Animate to checkout after a brief delay
    setTimeout(() => {
      navigate("/checkout")
    }, 500)
  }

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/")}
        className="fixed left-4 top-4 z-50 bg-black text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-light text-center mb-12">Our Gallery</h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <motion.div
            className="flex space-x-4 mb-4 sm:mb-0 overflow-x-auto pb-2 w-full sm:w-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setCategory("all")}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${category === "all" ? "bg-black text-white" : "bg-white"}`}
            >
              All
            </button>
            <button
              onClick={() => setCategory("men")}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${category === "men" ? "bg-black text-white" : "bg-white"}`}
            >
              Men
            </button>
            <button
              onClick={() => setCategory("women")}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${category === "women" ? "bg-black text-white" : "bg-white"}`}
            >
              Women
            </button>
          </motion.div>

          <div className="relative">
            <motion.div
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full"
              >
                <span>Sort by</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    style={{ zIndex: 40 }}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {[
                        { label: "Default", value: "default" },
                        { label: "Popular", value: "popular" },
                        { label: "New", value: "new" },
                        { label: "Price: Low to High", value: "price-asc" },
                        { label: "Price: High to Low", value: "price-desc" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value as typeof sortBy)
                            setIsDropdownOpen(false)
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex gap-4 mb-8 overflow-x-auto pb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: "All Prices", value: "all" },
            { label: "Under $200", value: "under-200" },
            { label: "$200 - $500", value: "200-500" },
            { label: "Over $500", value: "over-500" },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value as typeof priceRange)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                priceRange === range.value ? "bg-black text-white" : "bg-white"
              }`}
            >
              {range.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-600 mb-4">
          Showing {items.length} items
        </motion.p>

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            {isLoading
              ? [...Array(6)].map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="bg-white rounded-lg overflow-hidden shadow-lg animate-pulse"
                  >
                    <div className="relative aspect-[3/4] bg-gray-200" />
                    <div className="p-4 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>
                ))
              : items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg group relative"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {item.isNew && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-black text-white px-3 py-1 text-sm font-light">New</span>
                        </div>
                      )}
                      {/* Quick Action Buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleItemClick(item)
                          }}
                          className="p-2 bg-white rounded-full"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white rounded-full"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(item)
                          }}
                          className="p-2 bg-white rounded-full"
                        >
                          <ShoppingBag className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-light mb-2">{item.name}</h3>
                      <p className="text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                  <X size={24} />
                </button>
                <div
                  className={`relative aspect-[3/4] mb-4 cursor-pointer transition-transform duration-300 ${
                    isZoomed ? "scale-125" : ""
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-2xl font-light mb-2">{selectedItem.name}</h3>
                <p className="text-xl mb-4">${selectedItem.price.toFixed(2)}</p>
                <div className="flex gap-4 mb-6">
                  <motion.button
                    className="flex-1 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(selectedItem)}
                  >
                    Add to Cart
                  </motion.button>
                  <button className="px-6 py-2 rounded-full border border-black hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Product Details</h4>
                  <p className="text-gray-600">
                    This premium piece exemplifies our commitment to quality and style. Crafted with meticulous
                    attention to detail, it features:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Premium fabric selection</li>
                    <li>Expert tailoring</li>
                    <li>Modern fit and design</li>
                    <li>Sustainable manufacturing</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

