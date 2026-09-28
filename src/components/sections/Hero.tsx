import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { Button, buttonVariants } from '@/components/ui/button'
import { staggerContainer, staggerItem } from '../motion'
import { cn } from '@/lib/utils'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-[#05070d] md:min-h-[calc(100svh-104px)]"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-1/4" fill="#38bdf8" size={560} />

      {/* 3D scene sits on the right; its left edge is masked so it dissolves into the
          background instead of showing a hard panel seam ("two screens"). */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block [mask-image:linear-gradient(to_right,transparent_0%,#000_40%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_40%)]">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="pointer-events-auto h-full w-full"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_82%_18%,rgba(3,105,161,0.22),transparent_60%)]"
      />

      <div className="container relative z-10 py-16 lg:py-0">
        <motion.div
          className="max-w-xl"
          variants={staggerContainer}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-sky-200"
          >
            <span className="size-1.5 rounded-full bg-sky-400" />
            IT Staffing & Talent Solutions
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Build a{' '}
            <span className="bg-gradient-to-r from-sky-300 to-primary bg-clip-text text-transparent">
              High-Performance
            </span>{' '}
            Tech Team with Loopalpha
          </motion.h1>

          <motion.p variants={staggerItem} className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
            We are a team of experienced recruiters and technology experts helping businesses scale with confidence.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3.5">
            <a href="#contact">
              <Button size="lg" className="group">
                Get In Touch
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services" className={cn(buttonVariants({ variant: 'ghostLight', size: 'lg' }))}>
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* 3D scene on mobile — stacked below the copy */}
        <div className="relative mt-10 h-[320px] w-full sm:h-[380px] lg:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
