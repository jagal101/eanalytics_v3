import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { name: 'Completed', value: 35 },
  { name: 'In Progress', value: 45 },
  { name: 'Inactive', value: 20 },
]

const COLORS = ['#22c55e', '#3b82f6', '#ef4444']

const StampCardAnalysis = () => {
  return (
    <ChartCard 
      title="Stamp Card Status Distribution" 
      subtitle="Overview of stamp card completion rates"
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

export default StampCardAnalysis
