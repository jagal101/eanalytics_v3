import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const earningsData = [
  { month: 'Jan', loyalty: 85000, nonLoyalty: 45000, pointsValue: 8500 },
  { month: 'Feb', loyalty: 92000, nonLoyalty: 48000, pointsValue: 9200 },
  { month: 'Mar', loyalty: 88000, nonLoyalty: 52000, pointsValue: 8800 },
  { month: 'Apr', loyalty: 95000, nonLoyalty: 49000, pointsValue: 9500 },
  { month: 'May', loyalty: 98000, nonLoyalty: 51000, pointsValue: 9800 },
  { month: 'Jun', loyalty: 105000, nonLoyalty: 53000, pointsValue: 10500 },
]

const EarningsAnalysis = () => {
  return (
    <ChartCard title="Revenue Comparison" subtitle="Loyalty vs Non-Loyalty Revenue">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="loyalty" 
              name="Loyalty Revenue" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="nonLoyalty" 
              name="Non-Loyalty Revenue" 
              stroke="#94a3b8" 
              strokeWidth={2} 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pointsValue" 
              name="Points Value" 
              stroke="#22c55e" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default EarningsAnalysis
