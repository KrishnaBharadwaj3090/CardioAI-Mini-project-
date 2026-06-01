import { Line } from 'react-chartjs-2'
import { weeklyVitals } from '../../data/mockData'
import { chartOptions } from '../../utils/chartConfig'
import '../../utils/chartConfig'

export default function WeeklyVitalsChart() {
  const data = {
    labels: weeklyVitals.labels,
    datasets: [
      { label: 'Heart Rate', data: weeklyVitals.heartRate, borderColor: '#06B6D4', backgroundColor: 'rgba(6, 182, 212, .14)', tension: 0.42, fill: true },
      { label: 'Stress Load', data: weeklyVitals.stress, borderColor: '#22C55E', backgroundColor: 'rgba(34, 197, 94, .12)', tension: 0.42, fill: true },
    ],
  }
  return <Line data={data} options={chartOptions} />
}
