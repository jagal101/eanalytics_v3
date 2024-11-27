import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', bronze: 1000, silver: 500, gold: 200, platinum: 50 },
  { month: 'Feb', bronze: 1100, silver: 550, gold: 220, platinum: 55 },
  { month: 'Mar', bronze: 1200, silver: 600, gold: 240, platinum: 60 },
  { month: 'Apr', bronze: 1300, silver: 650, gold: 260, platinum: 65 },
  { month: 'May', bronze: 1400, silver: 700, gold: 280, platinum: 70 },
  { month: 'Jun', bronze: 1500, silver: 750, gold: 300, platinum: 75 },
]

const MembershipAnalysis = () => {
  return (
    <ChartCard 
      title="Membership Tier Distribution" 
      subtitle="Monthly membership levels"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="bronze" stackId="1" stroke="#b45309" fill="#b45309" />
            <Area type="monotone" dataKey="silver" stackId="1" stroke="#94a3b8" fill="#94a3b8" />
            <Area type="monotone" dataKey="gold" stackId="1" stroke="#eab308" fill="#eab308" />
            <Area type="monotone" dataKey="platinum" stackId="1" stroke="#6366f1" fill="#6366f1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default MembershipAnalysis
