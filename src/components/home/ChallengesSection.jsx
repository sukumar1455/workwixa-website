import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Container from '../common/Container'
import { challenges } from '../../data/modules'

export default function ChallengesSection() {
  return (
    <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Operational Challenges Holding Teams Back"
          subtitle="Traditional workforce management creates friction at every level — from the front desk to the executive suite."
        />

        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Traditional Approach
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{challenge.traditional}</p>
                </div>
                <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center">
                      <X className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Business Impact
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{challenge.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-full bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-sm font-medium border border-accent-100 dark:border-accent-800/40">
            <Check className="w-4 h-4" />
            WorkWixa replaces every pain point above with a unified, automated solution
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
