import { useEffect } from 'react'
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
  // Same-page navigation: intercept clicks on in-page links and smooth-scroll
  // to the target section WITHOUT writing "#section" into the URL bar.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href') || ''
      if (!href.startsWith('#')) return
      e.preventDefault()
      const id = href.slice(1)
      if (!id) return // bare "#" placeholder → no scroll, no URL change
      const target = document.getElementById(id)
      if (!target) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

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
