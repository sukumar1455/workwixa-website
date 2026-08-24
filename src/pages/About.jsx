import { motion } from 'framer-motion'
import { Target, Shield, TrendingDown, Eye, Zap, Focus, Heart, BarChart3 } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import PageImage from '../components/common/PageImage'
import usePageTitle from '../hooks/usePageTitle'

const businessGoals = [
  {
    icon: Target,
    title: 'Operational Excellence',
    description:
      'Streamline every workforce process — from check-in to payroll — into automated, error-free workflows.',
  },
  {
    icon: Shield,
    title: 'Automated Governance',
    description:
      'Enforce consistent policies with multi-level approval chains, audit trails, and compliance-ready records.',
  },
  {
    icon: TrendingDown,
    title: 'Sustainable Cost Optimization',
    description:
      'Reduce manual HR overhead, eliminate payroll errors, and catch budget overruns before they escalate.',
  },
  {
    icon: Eye,
    title: 'Empowerment Through Transparency',
    description:
      'Give every stakeholder — from employees to executives — clear, fair visibility into workforce data.',
  },
]

const customerBenefits = [
  {
    icon: Zap,
    title: 'Immediate ROI',
    description:
      'Reduce payroll processing time by up to 90% and eliminate manual timesheet errors from day one.',
  },
  {
    icon: Focus,
    title: 'Enhanced Strategic Focus',
    description:
      'Free HR and managers from administrative busywork to focus on people, culture, and strategy.',
  },
  {
    icon: Heart,
    title: 'Higher Retention',
    description:
      'Fair, transparent performance tracking and faster leave approvals improve employee satisfaction.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Executive Intelligence',
    description:
      'Live dashboards consolidate attendance, project health, and KPIs for faster, data-driven decisions.',
  },
]

export default function About() {
  usePageTitle(
    'About',
    'About WorkWixa — our vision, strategic alignment, business goals, and the customer benefits we deliver.'
  )

  return (
    <>
      <PageHero
        eyebrow="About WorkWixa"
        title="Vision and strategic alignment"
        subtitle="Building a trusted workforce management platform — one team at a time."
        image="/images/about-team.png"
        imageAlt="WorkWixa team collaborating in a conference room"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <PageImage src="/images/about-team.png" alt="Product and operations team in discussion" className="h-72 md:h-96" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3">
                Our mission
              </p>
              <p className="text-xl lg:text-2xl text-gray-900 dark:text-gray-50 leading-relaxed font-medium">
                WorkWixa exists to unify HR administration, attendance tracking, and productivity
                management into a single platform — giving organizations the operational clarity they need
                to manage modern, distributed workforces with confidence and integrity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            eyebrow="Business Goals"
            title="What We Help Organizations Achieve"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {businessGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4">
                  <goal.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="Customer Benefits"
            title="Value Delivered to Your Organization"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {customerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-50 dark:bg-accent-900/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
