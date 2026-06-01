import { motion } from 'framer-motion'
import GlassCard from '../components/ui/GlassCard'
import RiskMeter from '../components/ui/RiskMeter'
import SectionHeader from '../components/ui/SectionHeader'
import WeeklyVitalsChart from '../components/charts/WeeklyVitalsChart'
import MonthlyTrendChart from '../components/charts/MonthlyTrendChart'
import { overviewCards, riskScores } from '../data/mockData'

export default function Dashboard() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="Dashboard" title="Personal heart health overview" subtitle="Monitor simulated vitals, risk signals, and weekly wellness trends in a premium clinical workspace." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card, index) => {
            const Icon = card.icon
            return <GlassCard key={card.label} delay={index * 0.05} className="p-5"><div className="flex items-center justify-between"><span className="rounded-2xl bg-cardioCyan/15 p-3 text-cardioCyan"><Icon /></span><span className="rounded-full bg-cardioGreen/10 px-3 py-1 text-xs font-bold text-cardioGreen">{card.status}</span></div><p className="mt-5 text-sm text-slate-400">{card.label}</p><p className="mt-2 text-3xl font-black text-white">{card.value}</p><p className="mt-2 text-sm font-semibold text-cardioGreen">{card.trend} this week</p></GlassCard>
          })}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <GlassCard className="p-6">
            <h3 className="text-xl font-black text-white">Risk Score Cards</h3>
            <div className="mt-6 space-y-6">{riskScores.map((risk) => <RiskMeter key={risk.label} label={risk.label} value={risk.score} />)}</div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-xl font-black text-white">Weekly Analytics</h3>
            <div className="mt-5 h-80"><WeeklyVitalsChart /></div>
          </GlassCard>
        </div>
        <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Monthly Performance</h3><div className="mt-5 h-80"><MonthlyTrendChart /></div></GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
