export interface GalleryItem {
  id: number
  name: string
  price: number
  image: string
  category: 'men' | 'women'
  isNew: boolean
  isPopular: boolean
}

