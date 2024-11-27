import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from './ChartCard'

const data = [
  { name: 'Week 1', active: 4000, casual: 2400, inactive: 1800 },
  { name: 'Week 2', active: 4200, casual: 2600, inactive: 1700 },
  { name: 'Week 3', active: 4500, casual: 2800, inactive: 1600 },
  { name: 'Week 4', active: 4800, casual: 3000, inactive: 1500 },
]

const EngagementChart = () => {
  return (
    <ChartCard 
      title="Customer Engagement Trends" 
      subtitle="Weekly engagement patterns by customer segment"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="active" stroke="#22c55e" name="Active Members" />
            <Line type="monotone" dataKey="casual" stroke="#3b82f6" name="Casual Members" />
            <Line type="monotone" dataKey="inactive" stroke="#ef4444" name="Inactive Members" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default EngagementChart
