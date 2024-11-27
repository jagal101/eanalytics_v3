import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', earned: 45000, redeemed: 32000 },
  { month: 'Feb', earned: 52000, redeemed: 38000 },
  { month: 'Mar', earned: 48000, redeemed: 42000 },
  { month: 'Apr', earned: 51000, redeemed: 36000 },
  { month: 'May', earned: 55000, redeemed: 45000 },
  { month: 'Jun', earned: 58000, redeemed: 48000 },
]

const PointsAnalysis = () => {
  return (
    <ChartCard 
      title="Points Earned vs Redeemed" 
      subtitle="Monthly comparison of points activity"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earned" name="Points Earned" fill="#22c55e" />
            <Bar dataKey="redeemed" name="Points Redeemed" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default PointsAnalysis
