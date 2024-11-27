import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { name: 'High Spenders', value: 2500, revenue: 125000 },
  { name: 'Regular', value: 5000, revenue: 150000 },
  { name: 'Occasional', value: 3500, revenue: 52500 },
  { name: 'New Members', value: 1500, revenue: 15000 },
  { name: 'At Risk', value: 800, revenue: 8000 },
]

const CustomerSegmentation = () => {
  return (
    <ChartCard 
      title="Customer Segmentation" 
      subtitle="Distribution by customer segments"
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
            <Bar yAxisId="left" dataKey="value" name="Customers" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="revenue" name="Revenue ($)" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default CustomerSegmentation
