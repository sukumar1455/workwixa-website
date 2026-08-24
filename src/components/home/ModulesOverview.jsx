import SectionHeading from '../common/SectionHeading'
import FeatureCard from '../common/FeatureCard'
import Button from '../common/Button'
import Container from '../common/Container'
import { modules } from '../../data/modules'

export default function ModulesOverview() {
  const previewModules = modules.slice(0, 6)

  return (
    <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          eyebrow="Core Modules"
          title="Everything Your Workforce Needs"
          subtitle="Six integrated modules that work together — no more juggling disconnected tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewModules.map((mod, index) => (
            <FeatureCard
              key={mod.id}
              icon={mod.icon}
              name={mod.name}
              description={mod.description}
              href={mod.href}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button to="/features" variant="secondary">
            View All Features
          </Button>
        </div>
      </Container>
    </section>
  )
}
