import SectionHeading from '../common/SectionHeading'
import FeatureCard from '../common/FeatureCard'
import Container from '../common/Container'
import { pillars } from '../../data/modules'

export default function SolutionPillars() {
  return (
    <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          eyebrow="The Solution"
          title="One Platform. Three Pillars."
          subtitle="WorkWixa unifies attendance, administration, and collaboration into a single enterprise-grade platform."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <FeatureCard
              key={pillar.id}
              icon={pillar.icon}
              name={pillar.title}
              description={pillar.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
