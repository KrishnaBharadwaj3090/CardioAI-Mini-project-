import { Radar } from 'react-chartjs-2'
import '../../utils/chartConfig'

export default function RecoveryRadarChart() {
  const data = {
    labels: ['Sleep', 'Hydration', 'Steps', 'Stress', 'Medication', 'Nutrition'],
    datasets: [{ label: 'Recovery Profile', data: [88, 76, 82, 69, 94, 79], backgroundColor: 'rgba(34,197,94,.16)', borderColor: '#22C55E', pointBackgroundColor: '#06B6D4' }],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#CBD5E1' } } },
    scales: { r: { angleLines: { color: 'rgba(148,163,184,.16)' }, grid: { color: 'rgba(148,163,184,.16)' }, pointLabels: { color: '#CBD5E1' }, ticks: { color: '#94A3B8', backdropColor: 'transparent' } } },
  }
  return <Radar data={data} options={options} />
}
