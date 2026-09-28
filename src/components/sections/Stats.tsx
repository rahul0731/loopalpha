import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks'
import { staggerContainer, staggerItem } from '../motion'

const STATS = [
  { value: 500, suffix: '+', label: 'IT Professionals Network' },
  { value: 300, suffix: '+', label: 'Successful Hiring Closures' },
  { value: 50, suffix: '+', label: 'Technology Skills Covered' },
  { value: 100, suffix: '+', label: 'Trusted Clients & Partners' },
]

export function Stats() {
  const [active, setActive] = useState(false)

  return (
    <section className="bg-navy py-14">
      <motion.div
        className="container grid grid-cols-2 gap-8 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        onViewportEnter={() => setActive(true)}
      >
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </motion.div>
    </section>
  )
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(value, active)
  return (
    <motion.div className="text-center" variants={staggerItem}>
      <div className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
        {n}
        <span className="text-sky-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-400">{label}</div>
    </motion.div>
  )
}
