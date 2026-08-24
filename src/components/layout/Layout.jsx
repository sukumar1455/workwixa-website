import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import HelpDock from '../common/HelpDock'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <HelpDock />
    </div>
  )
}
