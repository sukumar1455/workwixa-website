import { motion } from 'framer-motion'

export default function StatCard({ value, label, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 shadow-sm hover:shadow-lift hover:-translate-y-1 transition-all duration-300 text-center"
    >
      <p className="text-4xl lg:text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">{value}</p>
      <p className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{label}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
