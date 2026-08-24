import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import Logo from '../components/common/Logo'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found', 'The page you are looking for does not exist.')

  return (
    <section className="py-10 md:py-14 bg-white dark:bg-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center space-y-6"
        >
          <Logo size="lg" className="justify-center" />
          <p className="text-8xl font-bold text-brand-200 dark:text-brand-800">404</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <Button to="/" size="lg">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
