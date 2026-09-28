'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

/** Container that staggers its <StaggerItem> children as they scroll into view. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

type DivProps = ComponentPropsWithoutRef<typeof motion.div>

/** Single element that fades and slides up once when it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & DivProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Wraps a group whose children animate in sequence. Pair with <StaggerItem>. */
export function Stagger({ children, className, ...rest }: { children: ReactNode; className?: string } & DivProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...rest }: { children: ReactNode; className?: string } & DivProps) {
  return (
    <motion.div className={className} variants={staggerItem} {...rest}>
      {children}
    </motion.div>
  )
}
