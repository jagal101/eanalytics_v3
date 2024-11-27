import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const segmentData = [
  { name: 'VIP', value: 15, spending: 35 },
  { name: 'Regular', value: 45, spending: 40 },
  { name: 'Occasional', value: 25, spending: 15 },
  { name: 'At Risk', value: 15, spending: 10 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#22c55e', '#ef4444']

const CustomerSegments = () => {
  return (
    <ChartCard title="Customer Segments" subtitle="Distribution by customer type">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={segmentData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {segmentData.map((entry, index) => (
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

export default CustomerSegments
