import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const data = [
  { month: 'Jan', completionRate: 45, dropOffRate: 25, avgDaysToComplete: 12 },
  { month: 'Feb', completionRate: 48, dropOffRate: 22, avgDaysToComplete: 11 },
  { month: 'Mar', completionRate: 52, dropOffRate: 20, avgDaysToComplete: 10 },
  { month: 'Apr', completionRate: 55, dropOffRate: 18, avgDaysToComplete: 9 },
  { month: 'May', completionRate: 58, dropOffRate: 16, avgDaysToComplete: 8 },
  { month: 'Jun', completionRate: 62, dropOffRate: 15, avgDaysToComplete: 8 },
]

const StampCardMetrics = () => {
  return (
    <ChartCard 
      title="Stamp Card Performance Metrics" 
      subtitle="Monthly completion and drop-off rates"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="completionRate" 
              name="Completion Rate (%)" 
              stroke="#22c55e" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="dropOffRate" 
              name="Drop-off Rate (%)" 
              stroke="#ef4444" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="avgDaysToComplete" 
              name="Avg Days to Complete" 
              stroke="#3b82f6" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default StampCardMetrics
