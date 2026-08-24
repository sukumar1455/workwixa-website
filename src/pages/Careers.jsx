import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import PageHero from '../components/common/PageHero'
import PageImage from '../components/common/PageImage'
import { jobs, benefits, values } from '../data/careers'
import { contact } from '../data/contact'
import usePageTitle from '../hooks/usePageTitle'

export default function Careers() {
  usePageTitle(
    'Careers',
    'Careers at WorkWixa — join the Hyderabad team building ethical workforce management software.'
  )

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the command center for modern workforces"
        subtitle="We are hiring in Hyderabad for people who care about fair, practical software for HR, managers, and teams."
        image="/images/careers-office.png"
        imageAlt="Engineers collaborating in the Hyderabad office"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <PageImage src="/images/careers-office.png" alt="Collaborative desks in the WorkWixa office" className="h-64 md:h-80" />
            <SectionHeading
              align="left"
              eyebrow="Why WorkWixa"
              title="What you can expect here"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Current openings"
            subtitle="Do not see a perfect fit? Send your profile anyway — we hire for craft, not just titles."
          />
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{job.title}</h2>
                    <p className="text-sm text-brand-600 dark:text-brand-400 mt-1">{job.team}</p>
                  </div>
                  <Button
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    size="sm"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4">{job.summary}</p>
                <ul className="space-y-1.5">
                  {job.requirements.map((req) => (
                    <li
                      key={req}
                      className="text-sm text-gray-700 dark:text-gray-300 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-500"
                    >
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Do not see the right role?"
        subtitle="Tell us what you do well. We will reach out if there is a match."
        buttonText="Get in touch"
        buttonTo="/contact"
      />
    </>
  )
}
