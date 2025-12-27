import { useCounterAnimation } from '@/hooks/useCounterAnimation'

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
  duration?: number
}

/**
 * Componente contatore animato per statistiche
 * Animazione automatica quando entra in viewport
 */
export function StatCounter({ end, suffix = '', label, duration = 2000 }: StatCounterProps) {
  const { count, elementRef } = useCounterAnimation({ end, duration, startOnView: true })

  return (
    <div ref={elementRef} className="bg-white/[0.02] px-4 py-4 rounded-xl text-center border border-white/[0.05]">
      <div className="text-3xl font-medium text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-gray-500 font-normal">{label}</div>
    </div>
  )
}
