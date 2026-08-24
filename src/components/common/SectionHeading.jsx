import { motion } from 'framer-motion'

export default function SectionHeading({
  as: Tag = 'h2',
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-gray-900 dark:text-gray-50'
  const subtitleColor = light ? 'text-brand-100' : 'text-gray-600 dark:text-gray-400'
  const eyebrowColor = light ? 'text-brand-200' : 'text-brand-600 dark:text-brand-400'
  const isPageTitle = Tag === 'h1'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={`max-w-3xl space-y-2 ${isPageTitle ? 'mb-0' : 'mb-8 md:mb-10'} ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-wider ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight leading-tight ${titleColor}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
