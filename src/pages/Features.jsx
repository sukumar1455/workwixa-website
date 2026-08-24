import { useState } from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import MockBrowser, { mockVariantForCategory } from '../components/common/MockBrowser'
import PageHero from '../components/common/PageHero'
import { features, featureCategories } from '../data/features'
import usePageTitle from '../hooks/usePageTitle'

function FeatureDetail({ feature, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      id={feature.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-10 ${
        index > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''
      }`}
    >
      <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
        <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-4">
          {feature.category}
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
          {feature.name}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
          {feature.description}
        </p>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-2">
              How It Works
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">{feature.howItWorks}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-2">
              User Benefits
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">{feature.userBenefits}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-2">
              Business Benefits
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">{feature.businessBenefits}</p>
          </div>
        </div>

        <div className="border-l-4 border-accent-500 bg-accent-50/60 dark:bg-accent-900/20 rounded-r-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-700 dark:text-accent-400 mb-1">
            Example Scenario
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature.exampleScenario}</p>
        </div>
      </div>

      <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
        <MockBrowser variant={mockVariantForCategory(feature.category)} title={feature.name} />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('All')

  usePageTitle(
    'Features',
    'Explore WorkWixa core modules and deep-dive feature catalog — attendance, leave, projects, payroll, and analytics.'
  )

  const filtered =
    activeCategory === 'All'
      ? features
      : features.filter((f) => f.category === activeCategory)

  return (
    <>
      <PageHero
        eyebrow="Feature catalog"
        title="Everything you need to manage your workforce, in one platform"
        subtitle="From digital check-ins to executive dashboards — explore every module that powers WorkWixa."
        image="/images/product-ets.png"
        imageAlt="Hybrid team using live attendance and project boards"
      />

      <section className="sticky top-16 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <Container className="py-4">
          <div className="flex flex-wrap gap-2">
            {featureCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 min-h-11 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-700 text-white dark:bg-brand-500'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10 bg-white dark:bg-gray-950">
        <Container>
          {filtered.map((feature, index) => (
            <FeatureDetail key={feature.id} feature={feature} index={index} />
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  )
}
