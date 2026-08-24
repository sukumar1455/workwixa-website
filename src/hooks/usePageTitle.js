import { useEffect } from 'react'

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | WorkWixa` : 'WorkWixa — Employee Tracking & Workforce Management'

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) {
      ogTitle.setAttribute('content', `${title} | WorkWixa`)
    }

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc && description) {
      ogDesc.setAttribute('content', description)
    }
  }, [title, description])
}
