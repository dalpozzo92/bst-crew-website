import { useEffect } from 'react'

export function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    script.id = 'elfsight-platform'
    
    if (!document.getElementById('elfsight-platform')) {
      document.body.appendChild(script)
    }

    return () => {
      const existingScript = document.getElementById('elfsight-platform')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div 
          className="elfsight-app-5895d259-493c-4cc8-8694-5de6f404c6a2" 
          data-elfsight-app-lazy
        />
      </div>
    </section>
  )
}