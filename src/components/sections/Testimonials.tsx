import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { SectionHeading } from '../SectionHeading'
import { cn } from '@/lib/utils'

type Testimonial = {
  quote: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Loopalpha helped us hire skilled IT professionals quickly and efficiently. Their screening process and turnaround time were impressive.',
    role: 'CTO, Technology Company',
  },
  {
    quote:
      'We needed flexible staffing support for a critical project, and Loopalpha delivered exactly what we needed. Highly reliable and professional.',
    role: 'Project Manager, Software Firm',
  },
  {
    quote:
      'The team at Loopalpha understands technical requirements very well. The candidates provided were job-ready and aligned with our expectations.',
    role: 'Founder, Startup Company',
  },
  {
    quote:
      'From hiring to payroll support, Loopalpha managed everything smoothly. Their service made scaling our team completely hassle-free.',
    role: 'Operations Head, IT Services Company',
  },
]

const slide: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 64 : -64, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -64 : 64, opacity: 0 }),
}

// Client testimonials on the site are anonymous (role only, no named person or
// headshot). Rather than invent a fake face, we show a monogram avatar built from
// the role so the section still reads as "a real client said this".
const monogram = (role: string) =>
  role
    .replace(/,/g, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export function Testimonials() {
  const reduce = useReducedMotion()
  const count = TESTIMONIALS.length
  // Track [index, direction] together so AnimatePresence gets the right slide side.
  const [[index, direction], setState] = useState<[number, number]>([0, 0])

  const go = useCallback(
    (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]),
    [count],
  )
  const goTo = useCallback((i: number) => setState(([prev]) => [i, i > prev ? 1 : -1]), [])

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setState(([i]) => [(i + 1) % count, 1]), 6500)
    return () => clearInterval(t)
  }, [count, reduce])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="container">
        <SectionHeading center eyebrow="Testimonials" title="What our clients say" />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-border bg-white shadow-lift sm:min-h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.figure
                key={index}
                custom={direction}
                variants={reduce ? undefined : slide}
                initial={reduce ? { opacity: 0 } : 'enter'}
                animate={reduce ? { opacity: 1 } : 'center'}
                exit={reduce ? { opacity: 0 } : 'exit'}
                transition={{ x: { type: 'spring', stiffness: 320, damping: 34 }, opacity: { duration: 0.25 } }}
                className="absolute inset-0 flex flex-col justify-center px-8 py-12 text-center sm:px-14"
              >
                <Quote className="mx-auto size-9 text-primary/25" />
                <blockquote className="mt-5 text-lg leading-relaxed text-secondary sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex flex-col items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary to-sky-400 font-heading text-sm font-bold text-white shadow-card">
                    {monogram(t.role)}
                  </span>
                  <span className="font-heading font-bold text-navy">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-navy shadow-card transition-all hover:bg-primary hover:text-white sm:-left-5"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-navy shadow-card transition-all hover:bg-primary hover:text-white sm:-right-5"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="mt-7 flex justify-center gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === index ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-secondary/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
