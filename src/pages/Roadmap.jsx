import { motion } from 'framer-motion'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import { roadmapPhases } from '../data/roadmap'
import usePageTitle from '../hooks/usePageTitle'

const phaseStyles = {
  accent: {
    badge: 'bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    dot: 'bg-accent-500',
    border: 'border-gray-200 dark:border-gray-800',
  },
  brand: {
    badge: 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300',
    dot: 'bg-brand-500',
    border: 'border-gray-200 dark:border-gray-800',
  },
  gray: {
    badge: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    dot: 'bg-gray-400 dark:bg-gray-500',
    border: 'border-gray-200 dark:border-gray-800',
  },
}

export default function Roadmap() {
  usePageTitle(
    'Roadmap',
    'WorkWixa product roadmap — current features, upcoming enhancements, and future vision.'
  )

  return (
    <>
      <PageHero
        eyebrow="Product roadmap"
        title="Future enhancements and product roadmap"
        subtitle="We are continuously evolving WorkWixa. Here is what is available now and what is coming next."
        image="/images/product-erp.png"
        imageAlt="Leaders reviewing operational plans on dual monitors"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, phaseIndex) => {
              const styles = phaseStyles[phase.color]
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: phaseIndex * 0.12 }}
                  className={`rounded-2xl border ${styles.border} bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
                >
                  <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-800">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.badge}`}>
                      {phase.label}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mt-3">{phase.phase}</h2>
                  </div>
                  <ul className="p-6 md:p-8 space-y-5">
                    {phase.items.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <div className={`w-2 h-2 rounded-full ${styles.dot} mt-2 shrink-0`} />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-50 text-sm">{item.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
