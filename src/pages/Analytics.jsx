import GlassCard from '../components/ui/GlassCard'
import RiskMeter from '../components/ui/RiskMeter'
import SectionHeader from '../components/ui/SectionHeader'
import MonthlyTrendChart from '../components/charts/MonthlyTrendChart'
import RecoveryRadarChart from '../components/charts/RecoveryRadarChart'
import RiskDistributionChart from '../components/charts/RiskDistributionChart'

const widgets = [
  { label: 'Accuracy', value: '86.67%', note: 'Random Forest model' },
  { label: 'Precision', value: '88.46%', note: 'positive prediction quality' },
  { label: 'Recall', value: '82.14%', note: 'sensitivity score' },
  { label: 'F1 Score', value: '85.19%', note: 'balanced model metric' },
]

export default function Analytics() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="Heart Analytics" title="Deeper health intelligence" subtitle="Explore risk distribution, monthly trends, Recovery And Model Profile, and interactive health widgets." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Risk Distribution</h3><div className="mt-5 h-80"><RiskDistributionChart /></div></GlassCard>
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Monthly Health Trends</h3><div className="mt-5 h-80"><MonthlyTrendChart /></div></GlassCard>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.85fr]">
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Recovery And Model Profile</h3><div className="mt-5 h-80"><RecoveryRadarChart /></div></GlassCard>
          <div className="grid gap-5">
            {widgets.map((widget) => <GlassCard key={widget.label} className="p-6"><p className="text-sm text-slate-400">{widget.label}</p><p className="mt-2 text-4xl font-black text-cardioGreen">{widget.value}</p><p className="mt-2 text-sm font-semibold text-slate-300">{widget.note}</p></GlassCard>)}
            <GlassCard className="p-6"><RiskMeter value={22} label="Composite Risk Index" /></GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

