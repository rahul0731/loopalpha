import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Loopalpha?', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

const SERVICES = [
  'IT Staffing (Full-Time Hiring)',
  'Contract-Based Hiring',
  'End-to-End Project Support',
  'Payroll & Compliance Management',
]

function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="Loopalpha home" className={cn('flex items-center gap-2.5', className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-navy to-primary shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M4 12a8 8 0 1 1 8 8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.6" fill="#fff" />
        </svg>
      </span>
      <span className="font-heading text-[22px] font-extrabold tracking-tight text-navy">
        Loop<span className="text-primary">alpha</span>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="hidden bg-navy text-[13px] text-slate-300 md:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex gap-6">
            <a href="mailto:hr@loopalpha.co.in" className="transition-colors hover:text-white">
              hr@loopalpha.co.in
            </a>
            <a href="tel:+917903961107" className="transition-colors hover:text-white">
              +91 79039 61107
            </a>
          </div>
          <span className="text-slate-400">Patna, India · Serving clients worldwide</span>
        </div>
      </div>

      <div className="container flex items-center justify-between gap-4 py-3.5">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 2).map((n) => (
            <NavLink key={n.href} {...n} />
          ))}
          <div className="group relative">
            <a
              href="#services"
              className="flex items-center gap-1 rounded-xl px-3.5 py-2.5 font-medium text-secondary transition-colors hover:bg-muted hover:text-navy"
            >
              Services <ChevronDown className="size-4" />
            </a>
            <div className="invisible absolute left-0 top-[calc(100%+6px)] w-72 translate-y-2 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-lift transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {SERVICES.map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-secondary transition-colors hover:bg-muted hover:text-navy"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {NAV.slice(2).map((n) => (
            <NavLink key={n.href} {...n} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:block">
            <Button>Get Started</Button>
          </a>
          <button
            className="grid size-11 place-items-center rounded-xl border border-border text-navy lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-white px-4 pb-4 shadow-lift lg:hidden">
          {[NAV[0], NAV[1], { label: 'Services', href: '#services' }, ...NAV.slice(2)].map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3.5 font-medium text-secondary hover:bg-muted"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block">
            <Button className="w-full">Get Started</Button>
          </a>
        </nav>
      )}
    </header>
  )
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-xl px-3.5 py-2.5 font-medium text-secondary transition-colors hover:bg-muted hover:text-navy"
    >
      {label}
    </a>
  )
}
