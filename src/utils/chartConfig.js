import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Tooltip, Legend, Filler)

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#CBD5E1', boxWidth: 10, usePointStyle: true } },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.92)',
      borderColor: 'rgba(6, 182, 212, 0.35)',
      borderWidth: 1,
      titleColor: '#F8FAFC',
      bodyColor: '#CBD5E1',
    },
  },
  scales: {
    x: { grid: { color: 'rgba(148, 163, 184, 0.08)' }, ticks: { color: '#94A3B8' } },
    y: { grid: { color: 'rgba(148, 163, 184, 0.08)' }, ticks: { color: '#94A3B8' } },
  },
}

export const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '68%',
  plugins: chartOptions.plugins,
}
