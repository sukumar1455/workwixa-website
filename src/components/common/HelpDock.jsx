import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X } from 'lucide-react'

export default function HelpDock() {
  const [open, setOpen] = useState(true)

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-500 text-white shadow-lift hover:bg-brand-600 hover:scale-105 transition-all"
        aria-label="Open help"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-xs animate-fadeup">
      <div className="relative rounded-2xl bg-white dark:bg-gray-900 shadow-float border border-gray-100 dark:border-gray-800 p-4 pr-10">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          aria-label="Dismiss help"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">Got any questions?</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">We are happy to walk you through WorkWixa.</p>
        <Link
          to="/contact"
          className="inline-flex text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
        >
          Talk to us
        </Link>
      </div>
    </div>
  )
}
