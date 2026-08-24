import { motion } from 'framer-motion'
import { Users, Search, Award, Briefcase, TrendingUp, Shield } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import usePageTitle from '../hooks/usePageTitle'

const offerings = [
  {
    icon: Search,
    title: 'Talent Acquisition',
    description:
      'End-to-end recruitment pipeline from job posting to offer — with structured interviews, scorecards, and integration into your HR system.',
  },
  {
    icon: Users,
    title: 'Workforce Planning',
    description:
      'Data-driven headcount planning aligned to project demand, budget cycles, and organizational growth targets.',
  },
  {
    icon: Award,
    title: 'Performance & Development',
    description:
      'Goal-setting, continuous feedback, 360-degree reviews, and development plans that retain top performers.',
  },
  {
    icon: Briefcase,
    title: 'Contract & Contingent Staffing',
    description:
      'Flexible staffing solutions for short-term projects, peak demand, and specialized skill requirements.',
  },
  {
    icon: TrendingUp,
    title: 'HR Analytics',
    description:
      'People analytics dashboards covering attrition risk, engagement trends, hiring funnel health, and diversity metrics.',
  },
  {
    icon: Shield,
    title: 'Compliance & Governance',
    description:
      'Labour law compliance, statutory filing support, and audit-ready records across all employment types.',
  },
]

const process = [
  { step: '01', title: 'Understand', description: 'We start by understanding your business goals, team structure, and current hiring or HR challenges.' },
  { step: '02', title: 'Design', description: 'We design a talent strategy — workflows, role profiles, assessment frameworks, and tech stack — aligned to your organization.' },
  { step: '03', title: 'Execute', description: 'Our team activates sourcing, screening, and selection processes while keeping your hiring managers in the loop at every step.' },
  { step: '04', title: 'Measure', description: 'We track time-to-hire, quality-of-hire, retention, and cost-per-hire so you always know what is working.' },
]

export default function TalentSolutions() {
  usePageTitle('Talent Solutions', 'WorkWixa Talent Solutions — recruitment, workforce planning, HR analytics, and compliance for modern organizations.')

  return (
    <>
      <PageHero
        eyebrow="Talent Solutions"
        title="Build the workforce your business needs"
        subtitle="From finding the right candidates to developing and retaining them — WorkWixa Talent Solutions covers every stage of the employee lifecycle."
        image="/images/careers-office.png"
        imageAlt="Team collaborating in a modern office environment"
      />

      {/* Offerings */}
      <section className="bg-white py-12 dark:bg-gray-950 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="End-to-end talent services"
            subtitle="A complete set of talent capabilities — delivered as standalone services or as part of a full workforce transformation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30">
                  <item.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 dark:bg-gray-900 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Our talent engagement process"
            subtitle="A structured four-step approach that gets the right people into the right roles — fast."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              >
                <p className="mb-3 font-display text-3xl font-bold text-brand-100 dark:text-brand-900">{item.step}</p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image + text */}
      <section className="bg-white py-12 dark:bg-gray-950 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-team.png"
                alt="Talent team in discussion"
                className="h-72 w-full object-cover sm:h-80"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Why WorkWixa Talent</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-3xl">
                Integrated talent intelligence, not another silo
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                WorkWixa Talent Solutions is built on the same platform as WorkWixa ERP — so every hire, review, and development plan feeds into payroll, attendance, and performance data automatically. No re-entry. No reconciliation. Just one accurate workforce picture.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Connected to WorkWixa ERP and ETS from day one',
                  'Structured hiring workflows with scorecards and approvals',
                  'Live analytics from sourcing through onboarding',
                  'Compliance-ready records for every employment type',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to build a stronger workforce?"
        subtitle="Talk to the WorkWixa Talent team about your hiring goals and current HR challenges."
        buttonText="Talk to us"
      />
    </>
  )
}
