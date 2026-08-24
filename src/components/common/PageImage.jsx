export default function PageImage({ src, alt, className = '' }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800 md:rounded-3xl ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
