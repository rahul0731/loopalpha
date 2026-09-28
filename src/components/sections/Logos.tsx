const CLIENTS = ['Oracle', 'Deloitte', 'PwC', 'EY', 'Birlasoft', 'Infosys', 'Wipro', 'TCS']

export function Logos() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <section aria-label="Trusted by" className="border-y border-border bg-white py-8">
      <div className="container">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by teams hiring across leading enterprises
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-heading text-2xl font-bold text-slate-400 transition-colors hover:text-navy"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
