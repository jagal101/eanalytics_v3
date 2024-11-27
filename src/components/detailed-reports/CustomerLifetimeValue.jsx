import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const clvData = [
  { month: 1, value: 100, predicted: 100 },
  { month: 6, value: 300, predicted: 320 },
  { month: 12, value: 600, predicted: 650 },
  { month: 18, value: 900, predicted: 1000 },
  { month: 24, value: 1400, predicted: 1500 },
  { month: 30, predicted: 2100 },
  { month: 36, predicted: 2800 },
]

const CustomerLifetimeValue = () => {
  return (
    <ChartCard title="Customer Lifetime Value" subtitle="Actual vs Predicted CLV over time">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={clvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Value ($)', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="value" 
              name="Actual Value" 
              stroke="#8b5cf6" 
              fill="#8b5cf6" 
              fillOpacity={0.3} 
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              name="Predicted Value" 
              stroke="#94a3b8" 
              fill="#94a3b8" 
              fillOpacity={0.3} 
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CustomerLifetimeValue
