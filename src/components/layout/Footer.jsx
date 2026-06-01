import { FiActivity, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-xl font-black"><FiActivity className="text-cardioCyan" /> CardioAI</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">A frontend-only AI healthcare SaaS demo using local data, simulated predictions, interactive charts, and PDF reporting.</p>
        </div>
        <div>
          <p className="font-bold text-white">Demo Notice</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">Educational project only. It does not diagnose, treat, or replace professional medical care.</p>
        </div>
        <div>
          <p className="font-bold text-white">Connect</p>
          <div className="mt-4 flex gap-3 text-xl text-slate-300">
            <FiGithub /><FiLinkedin /><FiMail />
          </div>
        </div>
      </div>
    </footer>
  )
}
