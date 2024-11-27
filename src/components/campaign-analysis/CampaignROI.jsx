import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { name: 'Summer Sale', cost: 5000, revenue: 15000, roi: 200 },
  { name: 'Holiday Bundle', cost: 8000, revenue: 28000, roi: 250 },
  { name: 'Spring Promo', cost: 3000, revenue: 9000, roi: 200 },
  { name: 'Member Day', cost: 4000, revenue: 16000, roi: 300 },
  { name: 'Flash Sale', cost: 2000, revenue: 7000, roi: 250 },
]

const CampaignROI = () => {
  return (
    <ChartCard 
      title="Campaign ROI Analysis" 
      subtitle="Cost vs Revenue for recent campaigns"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="cost" name="Cost ($)" fill="#ef4444" />
            <Bar yAxisId="left" dataKey="revenue" name="Revenue ($)" fill="#22c55e" />
            <Bar yAxisId="right" dataKey="roi" name="ROI (%)" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CampaignROI
