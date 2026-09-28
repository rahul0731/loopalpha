import { SectionHeading } from '../SectionHeading'
import { Stagger, StaggerItem } from '../motion'

const STEPS = [
  {
    n: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us your job description, required skills, experience level, budget, and preferred hiring model.',
  },
  {
    n: '02',
    title: 'Analyze & Match',
    desc: 'Our team evaluates candidates based on technology stack, experience, urgency, and job role, sourcing the best fit from our bench strength and extensive talent database.',
  },
  {
    n: '03',
    title: 'We shortlist consultants quickly',
    desc: 'Our internal team provides interview-ready, technically screened profiles, often within 2–3 hours.',
  },
  {
    n: '04',
    title: 'Interview & Onboard',
    desc: 'Shortlist candidates, conduct interviews (or let us handle technical rounds), and onboard seamlessly.',
  },
]

export function Process() {
  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="container">
        <SectionHeading center eyebrow="How It Works" title="Our Simple & Efficient Hiring Process" />
        <Stagger className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
          {STEPS.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <StaggerItem className="relative text-center">
      <div className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border-4 border-muted bg-primary font-heading text-lg font-bold text-white shadow-card">
        {n}
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{desc}</p>
    </StaggerItem>
  )
}
