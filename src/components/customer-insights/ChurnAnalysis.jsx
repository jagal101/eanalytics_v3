import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', churnRate: 2.1, atRisk: 3.2 },
  { month: 'Feb', churnRate: 2.3, atRisk: 3.5 },
  { month: 'Mar', churnRate: 2.0, atRisk: 3.1 },
  { month: 'Apr', churnRate: 1.8, atRisk: 2.8 },
  { month: 'May', churnRate: 1.9, atRisk: 3.0 },
  { month: 'Jun', churnRate: 2.2, atRisk: 3.4 },
]

const ChurnAnalysis = () => {
  return (
    <ChartCard 
      title="Churn Analysis" 
      subtitle="Monthly churn rate and at-risk customers"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="churnRate" 
              name="Churn Rate (%)" 
              stroke="#ef4444" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="atRisk" 
              name="At Risk (%)" 
              stroke="#f59e0b" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default ChurnAnalysis
