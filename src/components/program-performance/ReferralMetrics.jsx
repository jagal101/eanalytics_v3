import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', referrals: 120, conversions: 85, revenue: 8500 },
  { month: 'Feb', referrals: 150, conversions: 95, revenue: 9500 },
  { month: 'Mar', referrals: 180, conversions: 120, revenue: 12000 },
  { month: 'Apr', referrals: 220, conversions: 150, revenue: 15000 },
  { month: 'May', referrals: 250, conversions: 175, revenue: 17500 },
  { month: 'Jun', referrals: 280, conversions: 200, revenue: 20000 },
]

const ReferralMetrics = () => {
  return (
    <ChartCard 
      title="Referral Program Performance" 
      subtitle="Monthly referral metrics and revenue"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="referrals" 
              name="Total Referrals" 
              stroke="#8b5cf6" 
              fill="#8b5cf6" 
              fillOpacity={0.3} 
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="conversions" 
              name="Successful Conversions" 
              stroke="#22c55e" 
              fill="#22c55e" 
              fillOpacity={0.3} 
            />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="revenue" 
              name="Revenue ($)" 
              stroke="#3b82f6" 
              fill="#3b82f6" 
              fillOpacity={0.3} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default ReferralMetrics
