import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import PageImage from '../components/common/PageImage'
import usePageTitle from '../hooks/usePageTitle'

export default function ProductPage({ product }) {
  usePageTitle(product.name, product.metaDescription)

  return (
    <>
      <section className="relative isolate flex min-h-[280px] items-end overflow-hidden text-white sm:min-h-[340px] md:min-h-[420px]">
        <img src={product.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-900/80 to-brand-950/40 dark:from-black/90 dark:via-gray-950/80" />
        <Container className="relative z-10 py-10 sm:py-14 md:py-20">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            {product.heroBadge}
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">{product.name}</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base md:text-lg lg:text-xl">{product.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/contact" size="lg">Schedule a live demo</Button>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Talk to our experts
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 dark:bg-gray-950 md:py-14">
        <Container>
          <div className="grid gap-8 items-center mb-10 lg:grid-cols-2">
            <PageImage src={product.heroImage} alt={`${product.name} in use`} className="h-52 sm:h-64 md:h-80" />
            <SectionHeading
              align="left"
              as="h2"
              eyebrow={product.eyebrow}
              title={product.name}
              subtitle={product.intro}
            />
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            {product.sibling.label}{' '}
            <Link to={product.sibling.to} className="font-semibold text-brand-700 hover:underline dark:text-brand-300">
              {product.sibling.name}
              <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </p>
        </Container>
      </section>

      <section className="bg-gray-50 py-10 dark:bg-gray-900 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="Business challenges"
            title="Problems we solve"
            subtitle="Modern organizations should not lose time to disconnected systems and manual work."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 dark:bg-gray-950 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="Everything your organization needs"
            subtitle="A complete suite designed to simplify operations without a stack of disconnected tools."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-2xl border border-gray-200 p-6 hover:border-brand-200 hover:shadow-sm dark:border-gray-800 dark:hover:border-brand-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-10 dark:bg-gray-900 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="Why leaders choose it"
            title={`Why teams choose ${product.name}`}
            subtitle="Intelligent automation and real-time insight, without adding another silo."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.reasons.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 dark:bg-gray-950 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for every industry"
            subtitle="Designed for organizations of every size across multiple sectors."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {product.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title={product.ctaTitle} subtitle={product.ctaSubtitle} buttonText="Book a free demo" />
    </>
  )
}
