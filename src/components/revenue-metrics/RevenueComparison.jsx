import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', loyalty: 85000, nonLoyalty: 45000 },
  { month: 'Feb', loyalty: 92000, nonLoyalty: 48000 },
  { month: 'Mar', loyalty: 88000, nonLoyalty: 52000 },
  { month: 'Apr', loyalty: 95000, nonLoyalty: 49000 },
  { month: 'May', loyalty: 98000, nonLoyalty: 51000 },
  { month: 'Jun', loyalty: 105000, nonLoyalty: 53000 },
]

const RevenueComparison = () => {
  return (
    <ChartCard 
      title="Loyalty vs Non-Loyalty Revenue" 
      subtitle="Monthly revenue comparison"
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
              dataKey="loyalty" 
              name="Loyalty Members" 
              stroke="#22c55e" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="nonLoyalty" 
              name="Non-Loyalty" 
              stroke="#94a3b8" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default RevenueComparison
