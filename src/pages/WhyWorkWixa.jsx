import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import usePageTitle from '../hooks/usePageTitle'

const comparisonRows = [
  {
    dimension: 'Real-time visibility',
    workwixa: true,
    spreadsheets: false,
    pointSolutions: 'partial',
  },
  {
    dimension: 'Automated payroll export',
    workwixa: true,
    spreadsheets: false,
    pointSolutions: false,
  },
  {
    dimension: 'Unified platform',
    workwixa: true,
    spreadsheets: false,
    pointSolutions: false,
  },
  {
    dimension: 'Budget tracking',
    workwixa: true,
    spreadsheets: 'partial',
    pointSolutions: false,
  },
  {
    dimension: 'Ease of adoption',
    workwixa: true,
    spreadsheets: 'partial',
    pointSolutions: 'partial',
  },
  {
    dimension: 'Multi-level approvals',
    workwixa: true,
    spreadsheets: false,
    pointSolutions: 'partial',
  },
  {
    dimension: 'Objective KPI scoring',
    workwixa: true,
    spreadsheets: false,
    pointSolutions: 'partial',
  },
]

function CellValue({ value }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-accent-600 dark:text-accent-400" />
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />
      </div>
    )
  }
  return <p className="text-center text-sm text-gray-500 dark:text-gray-400">Partial</p>
}

const differentiators = [
  {
    title: 'Unified, Not Fragmented',
    description:
      'One platform for attendance, leave, projects, payroll, and analytics — eliminating tool sprawl and data silos.',
  },
  {
    title: 'Ethical by Design',
    description:
      'Privacy-respecting monitoring that gives leaders visibility without invasive surveillance of remote employees.',
  },
  {
    title: 'Built for Hybrid Work',
    description:
      'Equally effective for in-office, remote, and hybrid teams — fair performance metrics regardless of location.',
  },
  {
    title: 'Enterprise-Grade Automation',
    description:
      'Automated workflows for leave, approvals, and payroll exports that reduce manual HR work by up to 90%.',
  },
]

export default function WhyWorkWixa() {
  usePageTitle(
    'Why WorkWixa',
    'Why choose WorkWixa over spreadsheets and point solutions — unified workforce management with measurable ROI.'
  )

  return (
    <>
      <PageHero
        eyebrow="Why WorkWixa"
        title="The smarter alternative to spreadsheets and point solutions"
        subtitle="See how WorkWixa compares across the dimensions that matter most to enterprise workforce management."
        image="/images/about-team.png"
        imageAlt="Leadership team comparing operational approaches"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-50">Dimension</th>
                  <th className="px-6 py-4 text-sm font-semibold text-brand-700 dark:text-brand-300 text-center">WorkWixa</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">
                    Spreadsheets & Manual
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">
                    Generic Point Solutions
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.dimension}
                    className={index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50/70 dark:bg-gray-900/50'}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">{row.dimension}</td>
                    <td className="px-6 py-4 bg-brand-50/40 dark:bg-brand-900/20">
                      <CellValue value={row.workwixa} />
                    </td>
                    <td className="px-6 py-4">
                      <CellValue value={row.spreadsheets} />
                    </td>
                    <td className="px-6 py-4">
                      <CellValue value={row.pointSolutions} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            eyebrow="Differentiators"
            title="What Sets WorkWixa Apart"
          />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Our Vision</p>
            <blockquote className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-relaxed">
              &ldquo;To become the world&apos;s most trusted, ethical, and intelligent workforce management
              ecosystem — empowering organizations to achieve operational excellence through transparency,
              automation, and data-driven decision-making.&rdquo;
            </blockquote>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
