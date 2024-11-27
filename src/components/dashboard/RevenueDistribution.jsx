import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import ChartCard from './ChartCard'

const data = [
  { name: 'Points Program', value: 45 },
  { name: 'Stamp Cards', value: 25 },
  { name: 'Referrals', value: 15 },
  { name: 'Memberships', value: 15 },
]

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6']

const RevenueDistribution = () => {
  return (
    <ChartCard 
      title="Revenue Distribution" 
      subtitle="Revenue share by program type"
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

export default RevenueDistribution
