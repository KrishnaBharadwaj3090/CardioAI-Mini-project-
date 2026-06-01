/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        slateDeep: '#1E293B',
        cardioCyan: '#06B6D4',
        cardioGreen: '#22C55E',
        cloud: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(6, 182, 212, 0.26)',
        greenGlow: '0 0 34px rgba(34, 197, 94, 0.22)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 15% 20%, rgba(6, 182, 212, .24), transparent 26%), radial-gradient(circle at 88% 12%, rgba(34, 197, 94, .18), transparent 24%), linear-gradient(135deg, #0F172A 0%, #111827 52%, #1E293B 100%)',
      },
      keyframes: {
        pulseRing: {
          '0%, 100%': { transform: 'scale(0.94)', opacity: '.5' },
          '50%': { transform: 'scale(1.06)', opacity: '.88' },
        },
        flow: {
          '0%': { strokeDashoffset: '220' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 3s ease-in-out infinite',
        flow: 'flow 2.2s linear infinite',
      },
    },
  },
  plugins: [],
}
