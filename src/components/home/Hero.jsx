import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Users, Calendar } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'

const logos = ['Northline', 'BrightPath', 'Helix Ops', 'Summit HR', 'Cove Retail', 'Aether Labs']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 pb-12 pt-8 sm:pt-10 md:pb-16 md:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/home-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-900/80 to-emerald-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(155,110,244,0.5),_transparent_55%)] opacity-40" />
        <svg
          className="absolute bottom-0 left-0 h-20 w-full text-emerald-800/30 sm:h-24"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0,96 C240,160 480,32 720,80 C960,128 1200,48 1440,96 L1440,160 L0,160 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Hero text */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur sm:text-sm"
          >
            Modern workforce platform for growing teams
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            The enterprise command center for your workforce
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
          >
            WorkWixa unifies HR administration, attendance, and productivity for in-office,
            remote, and hybrid teams — with visibility that respects people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Button to="/contact" size="lg">Get a free demo</Button>
            <Button to="/case-studies" variant="secondary" size="lg">
              See it in action
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 max-w-4xl md:mt-12"
        >
          <div className="animate-floaty">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-float md:rounded-3xl">
              <div className="flex">
                {/* Sidebar — hidden on very small screens */}
                <aside className="hidden w-14 shrink-0 flex-col items-center gap-3 bg-brand-900 py-4 sm:flex md:w-18 md:gap-4 md:py-5">
                  <div className="h-7 w-7 rounded-lg bg-brand-500 md:h-8 md:w-8" />
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="h-7 w-7 rounded-lg bg-white/10 md:h-8 md:w-8" />
                  ))}
                </aside>

                {/* Main content */}
                <div className="min-w-0 flex-1 bg-gray-50 p-3 sm:p-4 md:p-6">
                  {/* Search bar */}
                  <div className="mb-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm md:mb-4">
                    <div className="h-3 w-3 rounded-full bg-gray-200 md:h-4 md:w-4" />
                    <div className="h-2 w-32 rounded bg-gray-100 md:w-40" />
                  </div>

                  {/* Stats row */}
                  <div className="mb-3 grid grid-cols-3 gap-2 md:mb-4 md:gap-3">
                    {[
                      { icon: Users, label: 'Active Today', value: '847' },
                      { icon: Calendar, label: 'On Leave', value: '23' },
                      { icon: BarChart3, label: 'Tasks Done', value: '1,204' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white p-2 shadow-sm md:rounded-2xl md:p-4">
                        <stat.icon className="mb-1 h-3 w-3 text-brand-500 md:mb-2 md:h-4 md:w-4" />
                        <p className="font-display text-sm font-bold text-gray-900 md:text-2xl">{stat.value}</p>
                        <p className="text-[9px] text-gray-500 md:text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart + payroll */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    <div className="col-span-2 flex h-20 items-end gap-0.5 rounded-xl bg-white p-3 shadow-sm md:h-36 md:rounded-2xl md:gap-1.5 md:p-4">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col justify-center rounded-xl bg-white p-3 shadow-sm md:rounded-2xl md:p-4">
                      <p className="text-[9px] font-semibold text-brand-600 md:text-xs">Payroll Ready</p>
                      <p className="mt-0.5 text-[10px] font-semibold text-gray-900 md:text-sm">1-click export</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100 md:h-2">
                        <div className="h-full w-4/5 rounded-full bg-brand-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust line + marquee */}
        <p className="relative z-10 mt-6 text-center text-xs text-white/60 sm:text-sm">
          Built for HR, operations, and leadership teams
        </p>
        <div className="relative z-10 mt-3 overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 pr-8 md:gap-10 md:pr-10">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-base font-semibold tracking-wide whitespace-nowrap text-white/40 md:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
