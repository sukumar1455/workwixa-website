export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = '', children }) {
  return (
    <section className="relative isolate flex min-h-[280px] items-end overflow-hidden sm:min-h-[340px] md:min-h-[420px]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-900/78 to-brand-950/35 dark:from-black/90 dark:via-gray-950/80 dark:to-black/45" />
      <div className="relative z-10 w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl text-white">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-200">{eyebrow}</p>
            )}
            <h1 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">{subtitle}</p>
            )}
            {children && <div className="mt-5">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
