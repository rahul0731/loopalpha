import { cn } from '@/lib/utils'
import { Reveal } from './motion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  center?: boolean
  light?: boolean
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-2xl', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider',
            light ? 'bg-white/10 text-sky-200' : 'bg-primary/10 text-primary',
          )}
        >
          <span className={cn('size-1.5 rounded-full', light ? 'bg-sky-300' : 'bg-primary')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed', light ? 'text-slate-300' : 'text-secondary')}>{subtitle}</p>
      )}
    </Reveal>
  )
}
