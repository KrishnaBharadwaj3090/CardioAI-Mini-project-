import { FiArrowDownCircle, FiCheckCircle } from 'react-icons/fi'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import { technologies } from '../data/mockData'

const steps = ['Input health signals', 'Simulate AI screening', 'Visualize risk trends', 'Generate PDF report']
const future = ['Real backend API integration', 'Clinician dashboard', 'Wearable device sync', 'Explainable AI model cards']

export default function About() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="About Project" title="A frontend-only AI healthcare SaaS concept" subtitle="CardioAI demonstrates product thinking, component architecture, data visualization, and polished user experience without backend complexity." />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Project Objective</h3><p className="mt-4 leading-8 text-slate-300">Build a premium healthcare web app that helps users understand simulated heart health data, predict possible risk from uploaded images, chat with an educational assistant, and export a professional medical summary.</p></GlassCard>
          <GlassCard className="p-6"><h3 className="text-xl font-black text-white">Technologies Used</h3><div className="mt-5 flex flex-wrap gap-3">{technologies.map((tech) => <span key={tech} className="rounded-full bg-cardioCyan/10 px-4 py-2 text-sm font-bold text-cardioCyan">{tech}</span>)}</div></GlassCard>
        </div>
        <GlassCard className="mt-6 p-6"><h3 className="text-xl font-black text-white">Workflow Diagram</h3><div className="mt-6 grid gap-4 md:grid-cols-4">{steps.map((step, index) => <div key={step} className="relative rounded-3xl bg-white/5 p-5 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cardioGreen text-midnight font-black">{index + 1}</div><p className="mt-4 font-bold text-white">{step}</p>{index < steps.length - 1 && <FiArrowDownCircle className="mx-auto mt-4 text-cardioCyan md:absolute md:-right-5 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:-rotate-90" />}</div>)}</div></GlassCard>
        <GlassCard className="mt-6 p-6"><h3 className="text-xl font-black text-white">Future Enhancements</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{future.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-slate-200"><FiCheckCircle className="text-cardioGreen" /> {item}</div>)}</div></GlassCard>
      </div>
    </section>
  )
}
