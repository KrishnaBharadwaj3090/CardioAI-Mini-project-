import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.28em] text-cardioCyan">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
