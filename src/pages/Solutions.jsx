import { motion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import { useCases, userRoles } from '../data/useCases'
import usePageTitle from '../hooks/usePageTitle'

export default function Solutions() {
  usePageTitle(
    'Solutions',
    'Industry use cases and role-based solutions for software teams, marketing, consulting, retail, and more.'
  )

  return (
    <>
      <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Solutions"
            title="Real-World Use Cases by Industry"
            subtitle="See how WorkWixa solves specific operational challenges across industries and team structures."
          />
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container className="space-y-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              <div className="bg-brand-700 dark:bg-brand-800 px-6 lg:px-8 py-4">
                <h2 className="text-xl font-bold text-white">{useCase.industry}</h2>
              </div>
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{useCase.painPoint}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                    How WorkWixa Helps
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{useCase.solution}</p>
                </div>
                <div className="md:col-span-2 border-l-4 border-brand-500 bg-brand-50/60 dark:bg-brand-900/20 rounded-r-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300 mb-1">
                    Example Scenario
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{useCase.exampleScenario}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            eyebrow="User Roles"
            title="Built for Every Stakeholder"
            subtitle="WorkWixa provides tailored views and permissions for every role in your organization."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {userRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{role.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{role.description}</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">{role.permissions}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
