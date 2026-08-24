import { useState } from 'react'
import { motion } from 'framer-motion'
import AccordionItem from '../components/common/AccordionItem'
import CTASection from '../components/common/CTASection'
import Container from '../components/common/Container'
import PageHero from '../components/common/PageHero'
import { faqs } from '../data/faqs'
import usePageTitle from '../hooks/usePageTitle'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  usePageTitle(
    'FAQ',
    'Frequently asked questions about WorkWixa — attendance, privacy, integrations, implementation, and support.'
  )

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about WorkWixa. Cannot find your answer? Contact our team."
        image="/images/services-consult.png"
        imageAlt="Advisor answering implementation questions"
      />

      <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm px-6 lg:px-8"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      <CTASection
        title="Still have questions?"
        subtitle="Our team is ready to walk you through WorkWixa and answer any questions specific to your organization."
      />
    </>
  )
}
