import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiActivity, FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data/mockData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-cardioCyan/15 text-cardioCyan' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-black text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cardioCyan text-midnight shadow-glow"><FiActivity /></span>
          CardioAI
        </NavLink>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => <NavLink key={link.path} to={link.path} className={linkClass}>{link.label}</NavLink>)}
        </div>
        <button aria-label="Toggle menu" className="focus-ring grid h-10 w-10 place-items-center rounded-2xl bg-white/10 lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className={linkClass}>{link.label}</NavLink>)}
          </div>
        </div>
      )}
    </header>
  )
}
