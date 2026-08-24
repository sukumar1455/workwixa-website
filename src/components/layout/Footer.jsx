import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '../common/Container'
import Logo from '../common/Logo'
import { contact } from '../../data/contact'

const productLinks = [
  { label: 'WorkWixa ERP', to: '/products/erp' },
  { label: 'WorkWixa ETS', to: '/products/ets' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Talent Solutions', to: '/talent-solutions' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Why WorkWixa', to: '/why-workwixa' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.5h3.67l-8.02 9.17L24 22.5h-7.41l-5.8-7.58L4.2 22.5H.52l8.58-9.81L0 1.5h7.6l5.24 6.93L18.9 1.5zm-1.29 18.88h2.03L6.48 3.5H4.3l13.31 16.88z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0B1020] text-gray-400 border-t border-white/5">
      <Container className="pb-8 pt-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-flex items-center min-h-11" aria-label="WorkWixa home">
              <Logo onDark size="md" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm text-gray-400">
              The enterprise command center for workforce management. Unified HR, attendance,
              and productivity for in-office, remote, and hybrid teams.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="X"
              >
                <XIcon />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4">Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
                <div className="space-y-1">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} WorkWixa. All rights reserved.</p>
          <p>Employee Tracking &amp; Workforce Management</p>
        </div>
      </Container>
    </footer>
  )
}
