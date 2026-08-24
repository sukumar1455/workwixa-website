import { motion } from 'framer-motion'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import { workflowSteps } from '../data/roadmap'
import usePageTitle from '../hooks/usePageTitle'

export default function HowItWorks() {
  usePageTitle(
    'How It Works',
    'End-to-end workflow: from digital check-in to executive dashboards — see how WorkWixa operates.'
  )

  return (
    <>
      <PageHero
        eyebrow="Workflow"
        title="End-to-end application workflow"
        subtitle="From the first check-in to the executive dashboard — here is how WorkWixa connects every step of workforce management."
        image="/images/home-hero.png"
        imageAlt="Team reviewing a workforce dashboard together"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-brand-200 dark:bg-brand-800 hidden sm:block" />

              <div className="space-y-5 lg:space-y-6">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative flex gap-6 lg:gap-8"
                  >
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-brand-700 dark:bg-brand-500 text-white flex items-center justify-center text-lg lg:text-xl font-bold shadow-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-6 md:p-8 flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{step.title}</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
