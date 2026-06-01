import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      className={`glass-card rounded-3xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
