import { Zap, ShieldCheck, Users, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { Stagger, StaggerItem } from '../motion'

const REASONS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Pre-Vetted IT Talent',
    desc: 'Carefully screened professionals evaluated by experienced recruiters and technical experts.',
  },
  {
    icon: Zap,
    title: 'Fast & Flexible Hiring',
    desc: 'Quick turnaround with full-time, contract, and project-based hiring options.',
  },
  {
    icon: Users,
    title: 'Reliable Partnership',
    desc: 'Transparent processes, replacement assurance, and long-term support for your growth.',
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="bg-background py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Why Businesses Choose Us"
          title="Why Choose Loopalpha"
          subtitle="We help businesses hire the right technology talent faster and more efficiently. With expert screening, flexible hiring models, and a client-first approach, we deliver staffing solutions you can trust."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {REASONS.map((r) => (
            <ReasonCard key={r.title} {...r} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function ReasonCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <StaggerItem className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-primary text-white shadow-soft">
        <Icon className="size-7" />
      </span>
      <h3 className="mt-6 font-heading text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-secondary">{desc}</p>
    </StaggerItem>
  )
}
