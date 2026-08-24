import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FeatureCard({ icon: Icon, name, description, href, index = 0 }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 shadow-sm hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 mb-5 transition-transform duration-300 group-hover:scale-110">
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      {href && (
        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-brand-600 dark:text-brand-400">
          Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      )}
    </motion.div>
  )

  if (href) {
    return (
      <Link to={href} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
