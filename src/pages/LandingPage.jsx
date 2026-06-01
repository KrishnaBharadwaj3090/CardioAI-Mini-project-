import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
import AnimatedHeart from '../components/AnimatedHeart'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import { features, stats, testimonials } from '../data/mockData'

export default function LandingPage() {
  return (
    <>
      <section className="section-pad overflow-hidden pt-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cardioCyan/30 bg-cardioCyan/10 px-4 py-2 text-sm font-bold text-cardioCyan">AI-powered heart health companion</div>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">CardioAI</h1>
            <p className="mt-4 max-w-2xl text-xl font-semibold text-slate-200 sm:text-2xl">Smart Heart Health Assistant for predictive insights, guided reports, and beautiful cardio analytics.</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">A premium frontend healthcare SaaS demo built for internship presentation and portfolio showcase, powered entirely by local mock data.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/dashboard">Open Dashboard <FiArrowRight /></Button>
              <Button to="/prediction" variant="secondary"><FiPlayCircle /> Try AI Prediction</Button>
            </div>
          </motion.div>
          <AnimatedHeart />
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader eyebrow="Platform" title="Premium AI healthcare workflows" subtitle="Every module is designed to look production-ready while remaining frontend-only and easy to demonstrate." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return <GlassCard key={feature.title} delay={index * 0.06} className="p-6 transition hover:-translate-y-1 hover:border-cardioCyan/40"><Icon className="text-3xl text-cardioCyan" /><h3 className="mt-5 text-xl font-black text-white">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p></GlassCard>
          })}
        </div>
      </section>

      <section className="section-pad bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <GlassCard key={stat.label} className="p-6 text-center"><p className="text-4xl font-black text-cardioGreen">{stat.value}</p><p className="mt-2 text-sm font-semibold text-slate-300">{stat.label}</p></GlassCard>)}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader eyebrow="Testimonials" title="Built for impressive project demos" subtitle="A polished, coherent user journey from first impression to printable report." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-3">
          {testimonials.map((item) => <GlassCard key={item.name} className="p-6"><p className="text-lg leading-8 text-slate-200">"{item.quote}"</p><div className="mt-6"><p className="font-black text-white">{item.name}</p><p className="text-sm text-cardioCyan">{item.role}</p></div></GlassCard>)}
        </div>
      </section>
    </>
  )
}
