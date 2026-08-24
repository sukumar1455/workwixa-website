import SectionHeading from '../common/SectionHeading'
import StatCard from '../common/StatCard'
import Container from '../common/Container'
import { roiStats } from '../../data/modules'

export default function ROISection() {
  return (
    <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          eyebrow="Business Impact"
          title="Measurable ROI from Day One"
          subtitle="WorkWixa delivers tangible operational improvements — not just software, but a transformation in how your workforce runs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {roiStats.map((stat, index) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
