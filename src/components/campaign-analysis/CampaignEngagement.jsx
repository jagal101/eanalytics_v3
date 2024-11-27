import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { day: '1', emails: 85, social: 65, push: 45 },
  { day: '2', emails: 78, social: 72, push: 50 },
  { day: '3', emails: 90, social: 80, push: 55 },
  { day: '4', emails: 85, social: 75, push: 48 },
  { day: '5', emails: 92, social: 85, push: 60 },
  { day: '7', emails: 88, social: 82, push: 58 },
]

const CampaignEngagement = () => {
  return (
    <ChartCard 
      title="Channel Engagement Rates" 
      subtitle="Daily engagement rates by channel"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: 'Days Since Launch', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Engagement Rate (%)', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="emails" name="Email" stroke="#8b5cf6" strokeWidth={2} />
            <Line type="monotone" dataKey="social" name="Social Media" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="push" name="Push Notifications" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CampaignEngagement
