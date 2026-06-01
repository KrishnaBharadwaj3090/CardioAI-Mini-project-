import { Doughnut } from 'react-chartjs-2'
import { riskDistribution } from '../../data/mockData'
import { doughnutOptions } from '../../utils/chartConfig'
import '../../utils/chartConfig'

export default function RiskDistributionChart() {
  const data = {
    labels: ['Low', 'Moderate', 'Elevated', 'Critical'],
    datasets: [{ data: riskDistribution, backgroundColor: ['#22C55E', '#06B6D4', '#FACC15', '#F97316'], borderColor: 'rgba(15,23,42,.95)', borderWidth: 4 }],
  }
  return <Doughnut data={data} options={doughnutOptions} />
}
