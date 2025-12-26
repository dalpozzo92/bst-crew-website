import { useEffect, useRef, useState } from 'react'

/**
 * Animated Background Component
 *
 * WaterPlane effect - optimized canvas implementation
 * Colors: Purple/Blue (#5606ff), Pink (#fe8989), Black
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    let time = 0
    let animationId: number

    // WaterPlane shader parameters
    const params = {
      frequency: 5.5,
      density: 0.9,
      strength: 1.7,
      brightness: 1.1,
      speed: 0.1,
      rotation: (235 * Math.PI) / 180
    }

    const animate = () => {
      time += params.speed * 0.01

      const width = canvas.width
      const height = canvas.height

      // Clear with black
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      // Pixel density for performance
      const step = isMobile ? 3 : 2

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          // Normalize and rotate coordinates
          let nx = (x / width) - 0.5
          let ny = (y / height) - 0.5

          const rotX = nx * Math.cos(params.rotation) - ny * Math.sin(params.rotation)
          const rotY = nx * Math.sin(params.rotation) + ny * Math.cos(params.rotation)

          nx = rotX + 0.5
          ny = rotY + 0.5

          // Create wave pattern
          const wave1 = Math.sin(nx * params.frequency + time * 10) * Math.cos(ny * params.frequency + time * 8)
          const wave2 = Math.sin((nx + ny) * params.frequency * 0.5 + time * 6) * params.strength * 0.1
          const wave3 = Math.cos(nx * params.frequency * 0.8 - time * 5) * Math.sin(ny * params.frequency * 0.8)

          const waveValue = (wave1 + wave2 + wave3) * params.density * 0.3

          // Map to colors
          let r: number, g: number, b: number, a: number

          if (waveValue > 0.3) {
            // Purple/Blue (#5606ff)
            r = 86 + waveValue * 100
            g = 6 + waveValue * 50
            b = 255
            a = Math.min(1, waveValue * 1.5 + 0.3)
          } else if (waveValue > -0.1) {
            // Pink (#fe8989)
            r = 254
            g = 137 + waveValue * 100
            b = 137 + waveValue * 100
            a = Math.min(1, Math.abs(waveValue) * 1.2 + 0.25)
          } else {
            // Black fade
            r = 0
            g = 0
            b = 0
            a = 0.08
          }

          // Apply brightness
          r = Math.min(255, r * params.brightness)
          g = Math.min(255, g * params.brightness)
          b = Math.min(255, b * params.brightness)

          ctx.fillStyle = `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${a})`
          ctx.fillRect(x, y, step, step)
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('resize', checkMobile)
      cancelAnimationFrame(animationId)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        filter: isMobile ? 'blur(6px)' : 'blur(10px)',
        opacity: 0.7
      }}
    />
  )
}
