import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', revenue: 75000, transactions: 1200, avgOrder: 62.5 },
  { month: 'Feb', revenue: 82000, transactions: 1350, avgOrder: 60.7 },
  { month: 'Mar', revenue: 78000, transactions: 1280, avgOrder: 60.9 },
  { month: 'Apr', revenue: 85000, transactions: 1420, avgOrder: 59.8 },
  { month: 'May', revenue: 88000, transactions: 1480, avgOrder: 59.4 },
  { month: 'Jun', revenue: 95000, transactions: 1600, avgOrder: 59.3 },
]

const TrendAnalysis = () => {
  return (
    <ChartCard 
      title="Revenue Trends" 
      subtitle="Monthly revenue and transaction analysis"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="revenue" name="Revenue ($)" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
            <Area yAxisId="right" type="monotone" dataKey="transactions" name="Transactions" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default TrendAnalysis
