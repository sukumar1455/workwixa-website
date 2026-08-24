import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-lift dark:bg-brand-500 dark:hover:bg-brand-400 disabled:opacity-60 disabled:pointer-events-none disabled:translate-y-0',
  secondary:
    'bg-white text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 shadow-sm dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 disabled:opacity-60 disabled:pointer-events-none disabled:translate-y-0',
  ghost:
    'border border-white/40 text-white hover:bg-white/10 disabled:opacity-60 disabled:pointer-events-none',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm min-h-11',
  md: 'px-6 py-3 text-sm min-h-11',
  lg: 'px-8 py-3.5 text-base min-h-12',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const style = variants[variant] || variants.primary
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${style} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
