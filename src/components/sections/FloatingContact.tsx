import { useEffect, useState } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const ACTIONS = [
  { icon: Phone, label: 'Call us', href: 'tel:+917903961107', className: 'bg-primary hover:bg-primary/90' },
  { icon: Mail, label: 'Email us', href: 'mailto:hr@loopalpha.co.in', className: 'bg-navy hover:bg-navy/90' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/917903961107',
    className: 'bg-emerald-500 hover:bg-emerald-600',
  },
]

export function FloatingContact() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-50 flex flex-col gap-3 transition-all duration-300',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      {ACTIONS.map(({ icon: Icon, label, href, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={cn(
            'grid size-12 place-items-center rounded-full text-white shadow-lift transition-all hover:-translate-y-0.5',
            className,
          )}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  )
}
