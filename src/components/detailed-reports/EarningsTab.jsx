import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const earningsData = [
  { month: 'Jan', revenue: 85000, profit: 25500, loyalty: 12750 },
  { month: 'Feb', revenue: 92000, profit: 27600, loyalty: 13800 },
  { month: 'Mar', revenue: 88000, profit: 26400, loyalty: 13200 },
  { month: 'Apr', revenue: 95000, profit: 28500, loyalty: 14250 },
  { month: 'May', revenue: 98000, profit: 29400, loyalty: 14700 },
  { month: 'Jun', revenue: 105000, profit: 31500, loyalty: 15750 },
]

export const EarningsTab = ({ filters }) => {
  return (
    <div className="space-y-6">
      {/* Earnings Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <ChartCard title="Total Revenue" className="text-center">
          <div className="text-3xl font-bold text-primary">$563,000</div>
          <p className="text-sm text-muted-foreground">+8.2% from last month</p>
        </ChartCard>
        
        <ChartCard title="Total Profit" className="text-center">
          <div className="text-3xl font-bold text-primary">$168,900</div>
          <p className="text-sm text-muted-foreground">+7.5% from last month</p>
        </ChartCard>
        
        <ChartCard title="Loyalty Impact" className="text-center">
          <div className="text-3xl font-bold text-primary">$84,450</div>
          <p className="text-sm text-muted-foreground">+9.1% from last month</p>
        </ChartCard>

        <ChartCard title="Avg Transaction" className="text-center">
          <div className="text-3xl font-bold text-primary">$67.50</div>
          <p className="text-sm text-muted-foreground">+$2.30 from last month</p>
        </ChartCard>
      </div>

      {/* Earnings Chart */}
      <ChartCard title="Monthly Earnings Overview" subtitle="Revenue, Profit, and Loyalty Impact">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#8b5cf6" />
              <Bar dataKey="profit" name="Profit" fill="#22c55e" />
              <Bar dataKey="loyalty" name="Loyalty Impact" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Additional earnings analysis components can be added here */}
    </div>
  )
}
