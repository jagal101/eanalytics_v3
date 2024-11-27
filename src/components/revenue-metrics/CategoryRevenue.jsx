import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { name: 'Electronics', value: 35 },
  { name: 'Fashion', value: 25 },
  { name: 'Home & Living', value: 20 },
  { name: 'Beauty', value: 15 },
  { name: 'Others', value: 5 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#22c55e', '#eab308', '#94a3b8']

const CategoryRevenue = () => {
  return (
    <ChartCard 
      title="Revenue by Category" 
      subtitle="Distribution of revenue across product categories"
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

export default CategoryRevenue
