import { motion } from 'framer-motion'

export default function AnimatedHeart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md"
    >
      <div className="absolute inset-4 rounded-full bg-cardioCyan/10 blur-3xl" />
      <div className="absolute inset-8 animate-pulseRing rounded-full border border-cardioCyan/35" />
      <motion.svg viewBox="0 0 420 420" className="relative h-full w-full drop-shadow-2xl" aria-label="Animated heart health illustration">
        <defs>
          <linearGradient id="heartGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="55%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="210" cy="210" r="168" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" />
        <motion.path
          d="M210 320C135 266 92 221 92 166c0-42 29-74 70-74 25 0 47 13 61 34 14-21 36-34 61-34 41 0 70 32 70 74 0 55-43 100-144 154z"
          fill="url(#heartGradient)"
          filter="url(#softGlow)"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center' }}
        />
        <path d="M78 220h72l24-48 46 96 35-72 22 24h65" fill="none" stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" />
        <path d="M78 220h72l24-48 46 96 35-72 22 24h65" fill="none" stroke="#06B6D4" strokeDasharray="22 198" strokeLinecap="round" strokeWidth="8" className="animate-flow" />
        {[70, 120, 315].map((x, index) => (
          <motion.circle key={x} cx={x} cy={index === 2 ? 104 : 316 - index * 145} r="5" fill="#22C55E" animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.35 }} />
        ))}
      </motion.svg>
    </motion.div>
  )
}
