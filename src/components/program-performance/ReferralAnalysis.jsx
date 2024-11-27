import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { source: 'Email', referrals: 120, conversions: 85 },
  { source: 'Social Media', referrals: 200, conversions: 150 },
  { source: 'Direct Link', referrals: 150, conversions: 95 },
  { source: 'In-Store', referrals: 80, conversions: 60 },
  { source: 'SMS', referrals: 90, conversions: 70 },
]

const ReferralAnalysis = () => {
  return (
    <ChartCard 
      title="Referral Performance by Source" 
      subtitle="Comparison of referrals and conversions"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="referrals" name="Total Referrals" fill="#8b5cf6" />
            <Bar dataKey="conversions" name="Successful Conversions" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default ReferralAnalysis
