import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { name: 'Mobile App', value: 45 },
  { name: 'Website', value: 30 },
  { name: 'In-Store', value: 15 },
  { name: 'Social Media', value: 10 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#22c55e', '#eab308']

const ChannelEngagement = () => {
  return (
    <ChartCard 
      title="Channel Engagement" 
      subtitle="Customer interaction by channel"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default ChannelEngagement
