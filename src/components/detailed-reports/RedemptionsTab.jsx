import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const redemptionData = [
  { name: 'Free Products', value: 35 },
  { name: 'Discounts', value: 25 },
  { name: 'Gift Cards', value: 20 },
  { name: 'Special Offers', value: 15 },
  { name: 'Other', value: 5 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#22c55e', '#eab308', '#94a3b8']

export const RedemptionsTab = ({ filters }) => {
  return (
    <div className="space-y-6">
      {/* Redemption Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <ChartCard title="Total Redemptions" className="text-center">
          <div className="text-3xl font-bold text-primary">3,567</div>
          <p className="text-sm text-muted-foreground">+256 this month</p>
        </ChartCard>
        
        <ChartCard title="Points Redeemed" className="text-center">
          <div className="text-3xl font-bold text-primary">125,890</div>
          <p className="text-sm text-muted-foreground">+12,450 this month</p>
        </ChartCard>
        
        <ChartCard title="Redemption Value" className="text-center">
          <div className="text-3xl font-bold text-primary">$45,670</div>
          <p className="text-sm text-muted-foreground">+$3,450 this month</p>
        </ChartCard>

        <ChartCard title="Avg Redemption" className="text-center">
          <div className="text-3xl font-bold text-primary">$12.80</div>
          <p className="text-sm text-muted-foreground">+$0.50 this month</p>
        </ChartCard>
      </div>

      {/* Redemption Distribution */}
      <ChartCard title="Redemption Distribution" subtitle="Types of rewards redeemed">
        <div className="h-[400px]">
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

      {/* Additional redemption analysis components can be added here */}
    </div>
  )
}
