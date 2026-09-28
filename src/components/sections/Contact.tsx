import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { Button } from '@/components/ui/button'

const INFO = [
  { icon: Phone, label: 'Call', value: '+91 7903961107', href: 'tel:+917903961107' },
  { icon: Mail, label: 'Mail', value: 'hr@loopalpha.co.in', href: 'mailto:hr@loopalpha.co.in' },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mahadev Vihar Colony, Road No-2, Beur, Patna – 800002',
    href: undefined,
  },
]

const REQUIREMENTS = [
  'IT Staffing',
  'Contract Hiring',
  'Full-Time Hiring',
  'Project Support',
  'Payroll Management',
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Front-end mock only — wire this to your CRM / email service in production.
    setSent(true)
  }

  return (
    <section id="contact" className="bg-muted/60 py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build your team"
            subtitle="We help connect businesses with the right talent and professionals with the right opportunities. Whether you're hiring or job hunting, Loopalpha is here for you."
          />
          <div className="mt-8 space-y-4">
            {INFO.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="font-medium text-navy">{value}</span>
                  </span>
                </>
              )
              return href ? (
                <a key={label} href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-white p-7 shadow-lift sm:p-9">
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-14 text-primary" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">Thank you!</h3>
              <p className="mt-2 max-w-sm text-secondary">
                Your message has been received. A Loopalpha specialist will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-navy">Send us a Message</h3>
                <p className="mt-1.5 text-[15px] text-secondary">
                  Let's discuss your requirements and find the right talent for your business.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" autoComplete="name" placeholder="Your full name" required />
                <Field label="Email Address" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone Number" name="phone" type="tel" autoComplete="tel" placeholder="+91 …" />
                <Field label="Company Name" name="company" autoComplete="organization" placeholder="Company name" />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="requirement" className="text-sm font-medium text-navy">
                  Your Requirement
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  defaultValue=""
                  className="rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {REQUIREMENTS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your requirement…"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <Button type="submit" size="lg" className="mt-1 w-full">
                Submit <Send />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  ...props
}: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-xl border border-border bg-background px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
        {...props}
      />
    </div>
  )
}
