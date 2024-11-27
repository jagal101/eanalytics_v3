import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { 
    tier: 'Bronze',
    currentMembers: 2500,
    upgrades: 180,
    downgrades: 45,
    retention: 85
  },
  { 
    tier: 'Silver',
    currentMembers: 1500,
    upgrades: 120,
    downgrades: 30,
    retention: 88
  },
  { 
    tier: 'Gold',
    currentMembers: 800,
    upgrades: 60,
    downgrades: 15,
    retention: 92
  },
  { 
    tier: 'Platinum',
    currentMembers: 200,
    upgrades: 0,
    downgrades: 8,
    retention: 95
  },
]

const MembershipTiers = () => {
  return (
    <ChartCard 
      title="Membership Tier Distribution" 
      subtitle="Member distribution and movement across tiers"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tier" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="currentMembers" name="Current Members" fill="#3b82f6" />
            <Bar dataKey="upgrades" name="Upgrades" fill="#22c55e" />
            <Bar dataKey="downgrades" name="Downgrades" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default MembershipTiers
