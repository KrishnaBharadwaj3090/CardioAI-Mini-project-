import { Link } from 'react-router-dom'

const base = 'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60'
const variants = {
  primary: 'bg-cardioCyan text-midnight shadow-glow hover:-translate-y-0.5 hover:bg-cyan-300',
  secondary: 'border border-white/15 bg-white/10 text-cloud hover:-translate-y-0.5 hover:bg-white/15',
  ghost: 'text-slate-300 hover:bg-white/10 hover:text-white',
}

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={classes}>{children}</Link>
  return <button className={classes} {...props}>{children}</button>
}
