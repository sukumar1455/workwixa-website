import Hero from '../components/home/Hero'
import ChallengesSection from '../components/home/ChallengesSection'
import SolutionPillars from '../components/home/SolutionPillars'
import ModulesOverview from '../components/home/ModulesOverview'
import ROISection from '../components/home/ROISection'
import TestimonialSection from '../components/home/TestimonialSection'
import CTASection from '../components/common/CTASection'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle(
    null,
    'WorkWixa — The enterprise command center for workforce management. Unified HR, attendance, and productivity for modern teams.'
  )

  return (
    <>
      <Hero />
      <ChallengesSection />
      <SolutionPillars />
      <ModulesOverview />
      <ROISection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
