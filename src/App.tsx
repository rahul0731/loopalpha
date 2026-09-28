import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Process } from '@/components/sections/Process'
import { Bench } from '@/components/sections/Bench'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { FloatingContact } from '@/components/sections/FloatingContact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <Bench />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
