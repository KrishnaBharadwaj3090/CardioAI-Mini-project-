import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiActivity, FiArrowRight, FiCpu } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import RiskMeter from '../components/ui/RiskMeter'
import SectionHeader from '../components/ui/SectionHeader'
import { clinicalDefaults, clinicalFields } from '../data/mockData'
import { calculateHeartRisk, savePrediction } from '../utils/predictionEngine'

export default function Prediction() {
  const [form, setForm] = useState(clinicalDefaults)
  const [previewRisk, setPreviewRisk] = useState(28)
  const navigate = useNavigate()

  function updateField(name, value) {
    const next = { ...form, [name]: value }
    setForm(next)
    setPreviewRisk(calculateHeartRisk(next).risk)
  }

  function analyzeRisk(event) {
    event.preventDefault()
    const prediction = calculateHeartRisk(form)
    savePrediction(prediction)
    navigate('/results')
  }

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="Clinical Prediction" title="Heart disease risk assessment" subtitle="Enter clinical values to run a simulated ML-style prediction with probability, confidence, and recommendations." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <GlassCard className="p-6">
            <form onSubmit={analyzeRisk} className="grid gap-5 sm:grid-cols-2">
              {clinicalFields.map((field) => (
                <label key={field.name} className="space-y-2">
                  <span className="text-sm font-bold text-slate-200">{field.label}</span>
                  {field.type === 'select' ? (
                    <select value={form[field.name]} onChange={(event) => updateField(field.name, event.target.value)} className="focus-ring w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white outline-none">
                      {field.options.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  ) : (
                    <input type="number" min={field.min} max={field.max} step={field.step || 1} value={form[field.name]} onChange={(event) => updateField(field.name, event.target.value)} className="focus-ring w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white outline-none" />
                  )}
                </label>
              ))}
              <div className="sm:col-span-2"><Button className="w-full" type="submit"><FiCpu /> Analyze Risk <FiArrowRight /></Button></div>
            </form>
          </GlassCard>
          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cardioCyan/15 text-cardioCyan"><FiActivity /></span><div><p className="text-sm text-slate-400">Live Risk Preview</p><p className="text-2xl font-black text-white">{previewRisk}%</p></div></div>
              <div className="mt-6"><RiskMeter value={previewRisk} label="Estimated Risk" /></div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-black text-white">How This Demo Works</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>The form mirrors the reference project feature set using common UCI-style heart disease inputs.</motion.p>
                <p>The scoring is local and simulated, so the website stays backend-free while still demonstrating a complete ML product workflow.</p>
                <p className="rounded-2xl bg-cardioCyan/10 p-4 text-cardioCyan">Educational demo only. It is not medical diagnosis.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
