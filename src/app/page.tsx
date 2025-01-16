import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import Aesthetics from '@/components/Aesthetics'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Gallery />
      <AboutUs />
      <Aesthetics />
      <Contact />
      <Footer />
    </main>
  )
}

