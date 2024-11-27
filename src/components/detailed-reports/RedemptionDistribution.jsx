import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const redemptionData = [
  { name: 'Free Products', value: 35 },
  { name: 'Discounts', value: 25 },
  { name: 'Gift Cards', value: 20 },
  { name: 'Special Offers', value: 15 },
  { name: 'Other', value: 5 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#22c55e', '#eab308', '#94a3b8']

const RedemptionDistribution = () => {
  return (
    <ChartCard title="Redemption Distribution" subtitle="Distribution by reward type">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={redemptionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {redemptionData.map((entry, index) => (
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

export default RedemptionDistribution
