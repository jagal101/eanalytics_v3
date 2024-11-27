import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 1, value: 100 },
  { month: 6, value: 300 },
  { month: 12, value: 600 },
  { month: 18, value: 900 },
  { month: 24, value: 1400 },
  { month: 30, value: 2000 },
  { month: 36, value: 2800 },
]

const CustomerLifetimeValue = () => {
  return (
    <ChartCard 
      title="Customer Lifetime Value" 
      subtitle="Average CLV over customer lifetime (months)"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              label={{ value: 'Months', position: 'insideBottom', offset: -5 }} 
            />
            <YAxis 
              label={{ 
                value: 'Value ($)', 
                angle: -90, 
                position: 'insideLeft',
                offset: 10
              }} 
            />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              fill="#8884d8" 
              fillOpacity={0.3} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CustomerLifetimeValue
