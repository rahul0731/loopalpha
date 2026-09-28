const NAV_COLS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Loopalpha?', href: '#why' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'IT Staffing (Full-Time Hiring)', href: '#services' },
      { label: 'Contract-Based Hiring', href: '#services' },
      { label: 'End-to-End Project Support', href: '#services' },
      { label: 'Payroll & Compliance Management', href: '#services' },
    ],
  },
]

function Social({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy pt-16">
      <div className="container grid gap-10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-sky-400">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M4 12a8 8 0 1 1 8 8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2.6" fill="#fff" />
              </svg>
            </span>
            <span className="font-heading text-[22px] font-extrabold tracking-tight text-white">
              Loop<span className="text-sky-400">alpha</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-400">
            Trusted IT staffing and workforce solutions helping businesses build strong, scalable, and future-ready
            teams. We connect the right talent with the right opportunities through expert screening and flexible
            hiring models.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            Mahadev Vihar Colony, Road No-2, Beur, Patna – 800002
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Social label="LinkedIn" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H10z" />
              </svg>
            </Social>
            <Social label="X (Twitter)" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2zM17.8 20h1.7L7.3 3.8H5.5z" />
              </svg>
            </Social>
            <Social label="Facebook" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.07 1.47-4.07 4.17v2.24H7.8V13h2.7v8z" />
              </svg>
            </Social>
            <Social label="Instagram" href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </Social>
            <Social label="Telegram" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M21.9 4.3 18.6 19.6c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1 .5l.36-5.14L18.1 6.6c.4-.36-.09-.56-.63-.2L6.9 13.2l-4.98-1.56c-1.08-.34-1.1-1.08.23-1.6L20.5 2.86c.9-.33 1.7.22 1.4 1.44z" />
              </svg>
            </Social>
          </div>
        </div>

        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[15px] text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Loopalpha Private Limited. All Rights Reserved.</p>
          <p>Designed &amp; Developed by BWD</p>
        </div>
      </div>
    </footer>
  )
}
