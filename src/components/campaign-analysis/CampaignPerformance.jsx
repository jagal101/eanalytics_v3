import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { day: 1, emailOpen: 45, clickRate: 28, conversion: 12 },
  { day: 2, emailOpen: 52, clickRate: 32, conversion: 15 },
  { day: 3, emailOpen: 48, clickRate: 30, conversion: 14 },
  { day: 4, emailOpen: 55, clickRate: 35, conversion: 18 },
  { day: 5, emailOpen: 50, clickRate: 31, conversion: 16 },
  { day: 6, emailOpen: 58, clickRate: 38, conversion: 20 },
  { day: 7, emailOpen: 54, clickRate: 34, conversion: 17 },
]

const CampaignPerformance = () => {
  return (
    <ChartCard 
      title="Campaign Performance Metrics" 
      subtitle="Daily engagement rates"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="emailOpen" 
              name="Email Open Rate" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="clickRate" 
              name="Click Rate" 
              stroke="#22c55e" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="conversion" 
              name="Conversion Rate" 
              stroke="#3b82f6" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CampaignPerformance
