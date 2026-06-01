import { motion } from 'framer-motion'

export default function RiskMeter({ value = 0, label = 'Risk Score' }) {
  const clamped = Math.max(0, Math.min(100, value))
  const color = clamped > 65 ? '#f97316' : clamped > 35 ? '#facc15' : '#22C55E'

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-200">{label}</span>
        <span className="font-black" style={{ color }}>{clamped}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #06B6D4, ${color})` }}
        />
      </div>
    </div>
  )
}
