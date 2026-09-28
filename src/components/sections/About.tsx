import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../motion'

const POINTS = ['Trusted IT Staffing Partner', 'High-Quality Talent Solutions']

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal y={0} className="relative" style={{ willChange: 'transform' }}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="The Loopalpha team collaborating on a hiring plan"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Loopalpha"
            title="Loopalpha Private Limited"
            subtitle="Loopalpha Private Limited is a trusted IT staffing and technology services company helping businesses build strong, scalable teams with ease. We specialize in providing high-quality IT resources, project-based teams, and complete workforce solutions. From startups to growing enterprises, we bridge the gap between business goals and skilled technology talent. Our approach blends industry expertise, technical screening, and a vast talent pool to deliver reliable professionals who make an immediate impact."
          />
          <ul className="mt-7 grid gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-[15px] font-medium leading-relaxed text-navy">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#services"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-navy"
          >
            Know More <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
