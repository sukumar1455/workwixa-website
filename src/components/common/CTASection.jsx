import { motion } from 'framer-motion'
import Button from './Button'
import Container from './Container'

export default function CTASection({
  title = 'See WorkWixa in action',
  subtitle = 'Discover how unified workforce management can transform your operations.',
  buttonText = 'Request a Demo',
  buttonTo = '/contact',
}) {
  return (
    <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-5 py-10 text-center shadow-lift sm:rounded-3xl sm:px-8 lg:px-12 lg:py-14"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white mb-4 sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="text-base md:text-lg text-brand-100 leading-relaxed max-w-2xl mx-auto mb-6">{subtitle}</p>
            <Button to={buttonTo} size="lg">
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
