import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import usePageTitle from '../hooks/usePageTitle'
import { contact, mailtoDemo } from '../data/contact'
import PageHero from '../components/common/PageHero'
import PageImage from '../components/common/PageImage'

const inputClass =
  'w-full px-4 py-3 min-h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  usePageTitle(
    'Contact',
    'Request a demo or contact the WorkWixa team. We\'d love to show you how unified workforce management works.'
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Could not save your request. Please try again.')
      }
      setSubmitted(true)
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setError(err.message || 'Could not save your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a demo"
        subtitle="See WorkWixa in action. Fill out the form below and our team will reach out to schedule a personalized walkthrough."
        image="/images/contact-office.png"
        imageAlt="Modern office reception where visitors meet the WorkWixa team"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-accent-200 dark:border-accent-800/40 bg-accent-50 dark:bg-accent-900/20 p-8 lg:p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-accent-600 dark:text-accent-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-2">Thank You!</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-xl mx-auto">
                    Your demo request has been saved. Our team will be in touch within one business day
                    to schedule your personalized walkthrough.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6 md:p-8 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your team size and what you're looking for..."
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  )}
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Request a Demo'}
                  </Button>
                </motion.form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <PageImage src="/images/contact-office.png" alt="Hyderabad office lounge" className="h-48" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6 md:p-8"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Get in Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Phone</p>
                      {contact.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Office address</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
                      >
                        Open in Google Maps
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                <iframe
                  title="PGSN Soft Tech office location"
                  src={contact.mapsEmbedUrl}
                  className="w-full h-56 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Prefer email?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Send us a message directly and we&apos;ll respond within one business day.
                </p>
                <Button href={mailtoDemo} variant="secondary" size="sm">
                  Email Us Directly
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
