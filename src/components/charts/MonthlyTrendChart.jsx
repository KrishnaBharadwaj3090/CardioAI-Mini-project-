import { Bar } from 'react-chartjs-2'
import { monthlyTrends } from '../../data/mockData'
import { chartOptions } from '../../utils/chartConfig'
import '../../utils/chartConfig'

export default function MonthlyTrendChart() {
  const data = {
    labels: monthlyTrends.labels,
    datasets: [
      { label: 'Wellness', data: monthlyTrends.wellness, backgroundColor: 'rgba(6, 182, 212, .72)', borderRadius: 12 },
      { label: 'Recovery', data: monthlyTrends.recovery, backgroundColor: 'rgba(34, 197, 94, .72)', borderRadius: 12 },
    ],
  }
  return <Bar data={data} options={chartOptions} />
}
