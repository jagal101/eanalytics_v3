import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { frequency: 'Daily', customers: 1200, visits: 8400, revenue: 126000 },
  { frequency: 'Weekly', customers: 3500, visits: 14000, revenue: 210000 },
  { frequency: 'Monthly', customers: 5800, visits: 5800, revenue: 87000 },
  { frequency: 'Quarterly', customers: 4200, visits: 1400, revenue: 21000 },
  { frequency: 'Yearly', customers: 2800, visits: 280, revenue: 4200 },
]

const VisitFrequency = () => {
  return (
    <ChartCard 
      title="Visit Frequency Distribution" 
      subtitle="Customer visit patterns and associated revenue"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="frequency" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="customers" name="Customers" fill="#8b5cf6" />
            <Bar yAxisId="left" dataKey="visits" name="Visits" fill="#3b82f6" />
            <Bar yAxisId="right" dataKey="revenue" name="Revenue ($)" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default VisitFrequency
