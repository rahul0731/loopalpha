import { Database, Layers, Smartphone, Cloud, Boxes, BadgeCheck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { Stagger, StaggerItem } from '../motion'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DOMAINS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Database,
    title: 'Data Science & Data Engineering',
    desc: 'Skilled experts in analytics, AI/ML, big data processing, and scalable data pipelines to turn data into actionable insights.',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    desc: 'End-to-end developers proficient in MEAN, MERN, Java, and .NET, capable of building robust and scalable applications.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Experienced mobile developers specializing in React Native and hybrid app development for high-performance cross-platform solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Certified professionals in AWS, Azure, GCP, Kubernetes, and Terraform to optimize infrastructure, automation, and deployment pipelines.',
  },
  {
    icon: Boxes,
    title: 'ERP & Platforms',
    desc: 'Domain specialists in SAP, Salesforce, ServiceNow, and Microsoft D365, delivering seamless enterprise integration and customization.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    desc: 'Dedicated QA professionals offering manual and automation testing to ensure performance, security, and reliability at every stage.',
  },
]

export function Bench() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_0%,rgba(3,105,161,0.35),transparent_60%)]"
      />
      <div className="container relative">
        <SectionHeading
          center
          light
          eyebrow="Ready-To-Deploy Talent"
          title="Qualified Consultants Available on Bench"
          subtitle="Pre-vetted, experienced IT professionals across multiple technology domains, ready to join your project immediately and deliver results from day one."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <DomainCard key={d.title} {...d} />
          ))}
        </Stagger>
        <div className="mt-12 text-center">
          <a href="#contact" className={cn(buttonVariants({ size: 'lg' }))}>
            Get Bench Resources Now
          </a>
        </div>
      </div>
    </section>
  )
}

function DomainCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <StaggerItem className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07]">
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-sky-500/15 text-sky-300 transition-colors group-hover:bg-sky-500 group-hover:text-white">
        <Icon className="size-6" />
      </span>
      <div>
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
      </div>
    </StaggerItem>
  )
}
