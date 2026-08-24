import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import usePageTitle from '../hooks/usePageTitle'

const projects = [
  {
    id: 'erp',
    category: 'Enterprise Platform',
    name: 'WorkWixa ERP',
    description:
      'A full-suite enterprise resource planning platform unifying HR, payroll, recruitment, performance, projects, assets, and helpdesk into one intelligent system.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloud', 'AI'],
    image: '/images/product-erp.png',
    link: '/products/erp',
  },
  {
    id: 'ets',
    category: 'Workforce Intelligence',
    name: 'WorkWixa ETS',
    description:
      'An enterprise workforce intelligence platform for digital attendance, leave management, project tracking, productivity analytics, and real-time executive dashboards.',
    tags: ['React', 'Tailwind', 'REST API', 'Analytics'],
    image: '/images/product-ets.png',
    link: '/products/ets',
  },
  {
    id: 'cloud',
    category: 'Cloud & DevOps',
    name: 'Cloud Governance Suite',
    description:
      'Multi-cloud cost visibility, Kubernetes intelligence, and Terraform drift detection tools that help engineering teams govern infrastructure at scale.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
    image: '/images/services-consult.png',
    link: '/contact',
  },
  {
    id: 'talent',
    category: 'Talent & HR',
    name: 'Talent Acquisition Portal',
    description:
      'End-to-end recruitment pipeline management from requisition through offer — integrated with the WorkWixa ERP employee lifecycle.',
    tags: ['Recruitment', 'ATS', 'Workflow', 'Integration'],
    image: '/images/about-team.png',
    link: '/talent-solutions',
  },
]

const stats = [
  { value: '5+', label: 'Enterprise platforms built' },
  { value: '8+', label: 'Industries served' },
  { value: '24/7', label: 'Enterprise support' },
  { value: 'AI', label: 'Powered architecture' },
]

export default function Portfolio() {
  usePageTitle('Portfolio', 'WorkWixa portfolio — enterprise platforms and intelligent solutions we have built.')

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Intelligent platforms we have built"
        subtitle="From enterprise ERP to cloud governance tools — here is a selection of the solutions developed and delivered by the WorkWixa team."
        image="/images/case-studies.png"
        imageAlt="Operations team reviewing platform outputs"
      />

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
        <Container className="py-10 md:py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-brand-600 dark:text-brand-400">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 py-12 dark:bg-gray-900 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="What we have shipped"
            subtitle="Each project started with a real business problem and ended with a platform teams rely on every day."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    Learn more <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to see a live demo?"
        subtitle="Schedule a walkthrough of any of our platforms with the product team."
        buttonText="Book a demo"
      />
    </>
  )
}
