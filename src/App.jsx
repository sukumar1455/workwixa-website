import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import Roadmap from './pages/Roadmap'
import FAQ from './pages/FAQ'
import WhyWorkWixa from './pages/WhyWorkWixa'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Careers from './pages/Careers'
import CaseStudies from './pages/CaseStudies'
import WorkWixaERP from './pages/WorkWixaERP'
import WorkWixaETS from './pages/WorkWixaETS'
import Portfolio from './pages/Portfolio'
import TalentSolutions from './pages/TalentSolutions'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="solutions" element={<Navigate to="/case-studies" replace />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="why-workwixa" element={<WhyWorkWixa />} />
            <Route path="services" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products/erp" element={<WorkWixaERP />} />
            <Route path="products/ets" element={<WorkWixaETS />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="talent-solutions" element={<TalentSolutions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
