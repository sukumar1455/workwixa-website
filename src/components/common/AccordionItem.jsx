import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-3.5 min-h-11 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-50">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-3.5 text-gray-600 dark:text-gray-400 leading-relaxed pr-8 max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
