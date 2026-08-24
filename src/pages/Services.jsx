import { motion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import FeatureCard from '../components/common/FeatureCard'
import PageHero from '../components/common/PageHero'
import { services, serviceProcess } from '../data/services'
import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

export default function Services() {
  usePageTitle(
    'Services',
    'WorkWixa services — implementation, integrations, training, support, and workforce governance for your team.'
  )

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Implementation, training, and support that make WorkWixa stick"
        subtitle="Software only creates value when people actually use it. Our services get your workforce live, trained, and operating with confidence."
        image="/images/services-consult.png"
        imageAlt="Consultant walking a client through a workforce implementation plan"
      />

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="Platforms"
            title="Choose the product, then we implement it with you"
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {[
              {
                to: '/products/erp',
                image: '/images/product-erp.png',
                name: 'WorkWixa ERP',
                text: 'HR, payroll, projects, assets, and operations in one enterprise platform.',
              },
              {
                to: '/products/ets',
                image: '/images/product-ets.png',
                name: 'WorkWixa ETS',
                text: 'Attendance, productivity, and workforce intelligence for hybrid teams.',
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <img src={item.image} alt="" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 group-hover:text-brand-700 dark:group-hover:text-brand-300">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <SectionHeading
            eyebrow="What we offer"
            title="Services built around workforce operations"
            subtitle="From first configuration to ongoing support — pick what you need or run the full program."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={service.id}
                icon={service.icon}
                name={service.name}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from discovery to go-live"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  Step {item.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="In detail"
            title="What each engagement includes"
          />
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{service.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-5">
                  {service.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm text-gray-700 dark:text-gray-300 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Talk through the right services mix"
        subtitle="Tell us about your team size, payroll cycle, and current tools — we will recommend a practical rollout plan."
      />
    </>
  )
}
