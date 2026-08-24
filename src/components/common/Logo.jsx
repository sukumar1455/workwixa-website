import { useId } from 'react'

const sizes = {
  sm: 36,
  md: 40,
  lg: 48,
}

/** Hex badge + geometric W — WorkWixa monogram */
export function LogoMark({ size = 'md', className = '' }) {
  const px = sizes[size] || sizes.md
  const uid = useId().replace(/:/g, '')

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-hex`} x1="8" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B6EF4" />
          <stop offset="0.55" stopColor="#7C46F1" />
          <stop offset="1" stopColor="#2B0A58" />
        </linearGradient>
        <linearGradient id={`${uid}-w`} x1="12" y1="12" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
        <filter id={`${uid}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M24 3.2L42.2 13.6V34.4L24 44.8L5.8 34.4V13.6L24 3.2Z"
        fill={`url(#${uid}-hex)`}
      />
      <path
        d="M24 6.4L39.4 15.2V32.8L24 41.6L8.6 32.8V15.2L24 6.4Z"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
      />
      <path
        d="M12.2 15.4L17.05 32.6C17.28 33.4 18.32 33.46 18.64 32.68L24 18.9L29.36 32.68C29.68 33.46 30.72 33.4 30.95 32.6L35.8 15.4H31.15L27.55 27.15L24 17.05C23.82 16.55 23.18 16.55 23 17.05L19.45 27.15L15.85 15.4H12.2Z"
        fill={`url(#${uid}-w)`}
      />
      <circle cx="24" cy="15.8" r="2.15" fill="#34D399" filter={`url(#${uid}-glow)`} />
    </svg>
  )
}

export default function Logo({ size = 'md', onDark = false, showWordmark = true, className = '' }) {
  const word = onDark ? 'text-white' : 'text-gray-900 dark:text-gray-50'
  const accent = onDark ? 'text-brand-300' : 'text-brand-600 dark:text-brand-400'
  const wordSize = size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-[1.05rem]' : 'text-lg'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className={`font-bold tracking-tight leading-none ${wordSize} ${word}`}>
          Work<span className={accent}>Wixa</span>
        </span>
      )}
    </span>
  )
}
