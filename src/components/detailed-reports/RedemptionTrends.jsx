import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const redemptionTrendData = [
  { month: 'Jan', inStore: 245, online: 182, total: 427 },
  { month: 'Feb', inStore: 285, online: 195, total: 480 },
  { month: 'Mar', inStore: 265, online: 215, total: 480 },
  { month: 'Apr', inStore: 295, online: 225, total: 520 },
  { month: 'May', inStore: 315, online: 245, total: 560 },
  { month: 'Jun', inStore: 335, online: 265, total: 600 },
]

const RedemptionTrends = () => {
  return (
    <ChartCard title="Redemption Trends" subtitle="Monthly redemption activity by channel">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={redemptionTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="inStore" name="In-Store Redemptions" fill="#8b5cf6" />
            <Bar dataKey="online" name="Online Redemptions" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default RedemptionTrends
