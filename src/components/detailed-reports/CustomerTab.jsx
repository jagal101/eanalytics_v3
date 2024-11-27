import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const customerData = [
  { segment: 'VIP', count: 1200, spending: 85000, engagement: 92 },
  { segment: 'Gold', count: 2500, spending: 150000, engagement: 85 },
  { segment: 'Silver', count: 3800, spending: 190000, engagement: 78 },
  { segment: 'Regular', count: 5500, spending: 220000, engagement: 65 },
  { segment: 'New', count: 1800, spending: 45000, engagement: 45 },
]

export const CustomerTab = ({ filters }) => {
  return (
    <div className="space-y-6">
      {/* Customer Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <ChartCard title="Total Customers" className="text-center">
          <div className="text-3xl font-bold text-primary">14,800</div>
          <p className="text-sm text-muted-foreground">+850 this month</p>
        </ChartCard>
        
        <ChartCard title="Active Members" className="text-center">
          <div className="text-3xl font-bold text-primary">12,450</div>
          <p className="text-sm text-muted-foreground">84% of total</p>
        </ChartCard>
        
        <ChartCard title="Avg Lifetime Value" className="text-center">
          <div className="text-3xl font-bold text-primary">$1,250</div>
          <p className="text-sm text-muted-foreground">+$125 from last month</p>
        </ChartCard>

        <ChartCard title="Retention Rate" className="text-center">
          <div className="text-3xl font-bold text-primary">92%</div>
          <p className="text-sm text-muted-foreground">+2% from last month</p>
        </ChartCard>
      </div>

      {/* Customer Segments Chart */}
      <ChartCard title="Customer Segments Analysis" subtitle="Distribution and performance by segment">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="count" name="Customer Count" fill="#8b5cf6" />
              <Bar yAxisId="left" dataKey="spending" name="Total Spending" fill="#22c55e" />
              <Bar yAxisId="right" dataKey="engagement" name="Engagement %" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Additional customer analysis components can be added here */}
    </div>
  )
}
