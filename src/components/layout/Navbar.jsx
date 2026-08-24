import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Button from '../common/Button'
import ThemeToggle from '../common/ThemeToggle'
import Logo from '../common/Logo'

const productItems = [
  {
    label: 'WorkWixa ERP',
    to: '/products/erp',
    desc: 'HR, payroll, projects & operations',
  },
  {
    label: 'WorkWixa ETS',
    to: '/products/ets',
    desc: 'Attendance, productivity & workforce intelligence',
  },
]

const topLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  // Products handled separately as a dropdown
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Talent Solutions', to: '/talent-solutions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))
  const productActive = location.pathname.startsWith('/products')

  // close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileProductsOpen(false)
    setDesktopProductsOpen(false)
  }, [location.pathname])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // close desktop dropdown on outside click
  useEffect(() => {
    if (!desktopProductsOpen) return
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [desktopProductsOpen])

  const linkClass = (active) =>
    `relative px-3 py-2 min-h-11 inline-flex items-center rounded-full text-sm transition-colors ${
      active
        ? 'font-semibold text-brand-700 dark:text-brand-300'
        : 'font-medium text-gray-600 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 min-h-11" aria-label="WorkWixa home">
            <Logo size="md" />
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">

            {/* Home */}
            <Link to="/" className={linkClass(isActive('/') && location.pathname === '/')}>
              Home
              {location.pathname === '/' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />
              )}
            </Link>

            {/* About */}
            <Link to="/about" className={linkClass(isActive('/about'))}>
              About
              {isActive('/about') && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
            </Link>

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDesktopProductsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={desktopProductsOpen}
                className={linkClass(productActive)}
              >
                Products
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopProductsOpen ? 'rotate-180' : ''}`}
                />
                {productActive && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
              </button>

              {desktopProductsOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950">
                  <div className="p-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block rounded-xl px-4 py-3 transition-colors ${
                          isActive(item.to)
                            ? 'bg-brand-50 dark:bg-brand-900/30'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                        }`}
                      >
                        <span className="block text-sm font-semibold text-gray-900 dark:text-gray-50">{item.label}</span>
                        <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio */}
            <Link to="/portfolio" className={linkClass(isActive('/portfolio'))}>
              Portfolio
              {isActive('/portfolio') && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
            </Link>

            {/* Talent Solutions */}
            <Link to="/talent-solutions" className={linkClass(isActive('/talent-solutions'))}>
              Talent Solutions
              {isActive('/talent-solutions') && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
            </Link>

            {/* Careers */}
            <Link to="/careers" className={linkClass(isActive('/careers'))}>
              Careers
              {isActive('/careers') && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
            </Link>

            {/* Contact */}
            <Link to="/contact" className={linkClass(isActive('/contact'))}>
              Contact
              {isActive('/contact') && <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-500" />}
            </Link>
          </div>

          {/* Desktop right actions */}
          <div className="hidden xl:flex items-center gap-2">
            <ThemeToggle />
            <Button to="/contact" size="sm">Book a demo</Button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex xl:hidden items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-1">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center min-h-11 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                location.pathname === '/'
                  ? 'font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900'
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center min-h-11 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900'
              }`}
            >
              About
            </Link>

            {/* Products accordion */}
            <button
              type="button"
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
              className={`flex w-full items-center justify-between min-h-11 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                productActive
                  ? 'font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900'
              }`}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileProductsOpen && (
              <div className="ml-4 pl-4 border-l-2 border-brand-200 dark:border-brand-800 space-y-1">
                {productItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block min-h-11 px-3 py-3 rounded-xl text-sm transition-colors ${
                      isActive(item.to)
                        ? 'font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                        : 'font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    <span className="block font-semibold">{item.label}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 font-normal mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Portfolio */}
            {[
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'Talent Solutions', to: '/talent-solutions' },
              { label: 'Careers', to: '/careers' },
              { label: 'Contact', to: '/contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center min-h-11 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 pb-2">
              <Button to="/contact" size="md" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
