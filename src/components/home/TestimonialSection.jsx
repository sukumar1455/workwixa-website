import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Container from '../common/Container'
import { useCases } from '../../data/useCases'

const testimonials = [
  {
    id: 1,
    quote:
      'We cut payroll processing from three days to under an hour. WorkWixa paid for itself in the first month.',
    author: 'Sarah Chen',
    role: 'HR Director',
    company: 'TechFlow Solutions',
  },
  {
    id: 2,
    quote:
      'Finally, one platform where I can see attendance, tasks, and project budgets without switching between five tools.',
    author: 'Marcus Rivera',
    role: 'Operations Manager',
    company: 'BrightPath Consulting',
  },
  {
    id: 3,
    quote:
      'Our remote team finally has fair, data-driven performance reviews instead of visibility bias favoring in-office staff.',
    author: 'Priya Sharma',
    role: 'VP of Engineering',
    company: 'CloudNest Inc.',
  },
]

export default function TestimonialSection() {
  const teaserCases = useCases.slice(0, 3)

  return (
    <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for Every Industry"
          subtitle="See how teams across software, marketing, consulting, and retail use WorkWixa to streamline operations."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {teaserCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to="/case-studies"
                className="block h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{useCase.industry}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{useCase.painPoint}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                  View scenario <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Forward-Thinking Teams"
          subtitle="Placeholder testimonials — replace with real customer quotes when available."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <Quote className="w-8 h-8 text-brand-300 dark:text-brand-700 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-50">{t.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
