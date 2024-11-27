import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  {
    variant: 'A',
    clickRate: 4.2,
    conversionRate: 2.8,
    revenuePerUser: 45,
  },
  {
    variant: 'B',
    clickRate: 4.8,
    conversionRate: 3.2,
    revenuePerUser: 52,
  },
]

const ABTestResults = () => {
  return (
    <ChartCard 
      title="A/B Test Results" 
      subtitle="Performance comparison of campaign variants"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="variant" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="clickRate" name="Click Rate (%)" fill="#8b5cf6" />
            <Bar yAxisId="left" dataKey="conversionRate" name="Conversion Rate (%)" fill="#3b82f6" />
            <Bar yAxisId="right" dataKey="revenuePerUser" name="Revenue per User ($)" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default ABTestResults
