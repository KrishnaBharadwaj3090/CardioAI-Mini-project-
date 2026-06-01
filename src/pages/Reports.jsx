import { useMemo, useRef, useState } from 'react'
import { FiDownload, FiPrinter } from 'react-icons/fi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import { clinicalDefaults, reportMetrics } from '../data/mockData'
import { calculateHeartRisk, getStoredPrediction } from '../utils/predictionEngine'

export default function Reports() {
  const reportRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const prediction = useMemo(() => getStoredPrediction() || calculateHeartRisk(clinicalDefaults), [])
  const dynamicMetrics = [
    ...reportMetrics,
    { label: 'Prediction Level', value: prediction.level, note: `${prediction.probability}% probability` },
    { label: 'Model Confidence', value: `${prediction.confidence}%`, note: prediction.model },
  ]

  async function downloadPdf() {
    if (!reportRef.current) return
    setBusy(true)
    const canvas = await html2canvas(reportRef.current, { scale: 2, backgroundColor: '#0F172A' })
    const image = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width
    pdf.addImage(image, 'PNG', 0, 0, width, height)
    pdf.save('cardioai-medical-report.pdf')
    setBusy(false)
  }

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeader centered={false} eyebrow="Medical Report Generator" title="Professional healthcare report" subtitle="Generate a clean printable report from the latest local prediction and export it as a PDF." />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button onClick={downloadPdf} disabled={busy}><FiDownload /> {busy ? 'Generating PDF...' : 'Download PDF'}</Button><Button variant="secondary" onClick={() => window.print()}><FiPrinter /> Print Layout</Button></div>
        <GlassCard className="mt-8 overflow-hidden p-0">
          <div ref={reportRef} className="bg-midnight p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row"><div><p className="text-sm font-bold uppercase tracking-[.3em] text-cardioCyan">CardioAI Clinical Summary</p><h2 className="mt-3 text-3xl font-black text-white">Smart Heart Health Report</h2><p className="mt-2 text-slate-300">Patient: Demo User | Generated: June 1, 2026</p></div><div className="rounded-3xl bg-cardioGreen/10 p-5 text-center"><p className="text-sm text-slate-300">Overall Status</p><p className="text-2xl font-black text-cardioGreen">{prediction.level}</p></div></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{dynamicMetrics.map((metric) => <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[.06] p-5"><p className="text-sm text-slate-400">{metric.label}</p><p className="mt-2 text-2xl font-black text-white">{metric.value}</p><p className="mt-2 text-sm text-cardioCyan">{metric.note}</p></div>)}</div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6"><h3 className="text-xl font-black text-white">Recommendations</h3><ul className="mt-3 space-y-2 leading-7 text-slate-300">{prediction.recommendations.map((item) => <li key={item}>- {item}</li>)}</ul></div>
            <div className="mt-6 rounded-3xl bg-cardioCyan/10 p-5 text-sm leading-6 text-slate-300">Disclaimer: This is a frontend project demo using mock data only and is not a medical diagnosis.</div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
