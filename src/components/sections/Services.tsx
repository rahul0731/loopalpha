import { Users, FileText, Layers, ShieldCheck, ArrowRight, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { Stagger, StaggerItem } from '../motion'

type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

const SERVICES: Service[] = [
  {
    icon: Users,
    title: 'IT Staffing (Full-Time Hiring)',
    desc: 'Build a strong in-house team with confidence. We provide technically vetted professionals who align with your company culture and long-term goals. Enjoy faster hiring, reliable talent, and replacement assurance.',
  },
  {
    icon: FileText,
    title: 'Contract-Based Hiring',
    desc: 'Get flexible access to skilled developers for short or long-term needs. Ideal for urgent projects, scaling teams, or cost-effective hiring without payroll hassles.',
  },
  {
    icon: Layers,
    title: 'End-to-End Project Support',
    desc: 'From planning to deployment, we support your complete project lifecycle. Our expertise spans web development, mobile apps, emerging technologies, and enterprise solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Payroll & Compliance Management',
    desc: 'Simplify workforce management. We handle payroll processing, compliance, documentation, and reporting so you can focus on growth.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-muted/60 py-20 lg:py-28">
      <div className="container">
        <SectionHeading center eyebrow="Our Services" title="What We Do" />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <StaggerItem className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-secondary">{service.desc}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-navy"
      >
        Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </StaggerItem>
  )
}
