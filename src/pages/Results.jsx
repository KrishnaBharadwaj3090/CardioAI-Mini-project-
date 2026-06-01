import { useEffect, useState } from 'react'
import { FiAlertCircle, FiCheckCircle, FiDownload, FiRefreshCcw } from 'react-icons/fi'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import RiskMeter from '../components/ui/RiskMeter'
import SectionHeader from '../components/ui/SectionHeader'
import { clinicalDefaults } from '../data/mockData'
import { calculateHeartRisk, getStoredPrediction, savePrediction } from '../utils/predictionEngine'

export default function Results() {
  const [prediction, setPrediction] = useState(null)

  useEffect(() => {
    const stored = getStoredPrediction()
    if (stored) setPrediction(stored)
  }, [])

  function createDemoResult() {
    const result = calculateHeartRisk(clinicalDefaults)
    savePrediction(result)
    setPrediction(result)
  }

  if (!prediction) {
    return (
      <section className="section-pad">
        <div className="mx-auto max-w-4xl">
          <SectionHeader centered={false} eyebrow="Results" title="No prediction result yet" subtitle="Run a clinical assessment first, or generate a demo result for your presentation." />
          <GlassCard className="mt-8 p-8 text-center"><FiAlertCircle className="mx-auto text-5xl text-cardioCyan" /><p className="mt-4 text-slate-300">Your latest local prediction will appear here.</p><Button className="mt-6" onClick={createDemoResult}><FiRefreshCcw /> Generate Demo Result</Button></GlassCard>
        </div>
      </section>
    )
  }

  const isLow = prediction.risk < 36
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="Prediction Results" title="ML risk result and care guidance" subtitle="A dedicated results workspace with probability, confidence score, risk level, and personalized recommendations." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard className="p-6">
            <div className={`rounded-3xl p-6 ${isLow ? 'bg-cardioGreen/10' : 'bg-amber-400/10'}`}>
              <p className="text-sm font-bold uppercase tracking-[.25em] text-slate-300">Risk Level</p>
              <p className={`mt-3 text-4xl font-black ${isLow ? 'text-cardioGreen' : 'text-amber-300'}`}>{prediction.level}</p>
              <p className="mt-2 text-slate-300">Model confidence: <span className="font-black text-cardioCyan">{prediction.confidence}%</span></p>
            </div>
            <div className="mt-6"><RiskMeter value={prediction.probability} label="Heart Disease Probability" /></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2"><Button to="/prediction" variant="secondary"><FiRefreshCcw /> Recalculate</Button><Button to="/reports"><FiDownload /> Create Report</Button></div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-xl font-black text-white">Personalized Recommendations</h3>
            <div className="mt-5 space-y-3">{prediction.recommendations.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-slate-200"><FiCheckCircle className="mt-1 shrink-0 text-cardioGreen" /> {item}</div>)}</div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[.05] p-5"><p className="font-black text-white">Model Information</p><p className="mt-2 text-sm leading-6 text-slate-300">{prediction.model} using local mock rules inspired by clinical risk factors. No data leaves the browser.</p></div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
