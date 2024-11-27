import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartCard from '../dashboard/ChartCard'

const LiveMetrics = () => {
  const [data, setData] = useState([])
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev]
        const now = new Date()
        
        if (newData.length > 20) newData.shift()
        
        newData.push({
          time: now.toLocaleTimeString(),
          activeUsers: Math.floor(Math.random() * 100) + 150,
          transactions: Math.floor(Math.random() * 20) + 10,
          revenue: Math.floor(Math.random() * 1000) + 500,
        })
        
        return newData
      })
      setLastUpdate(new Date())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ChartCard 
      title="Live Metrics" 
      subtitle={`Last updated: ${lastUpdate.toLocaleTimeString()}`}
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="activeUsers" 
              name="Active Users" 
              stroke="#8b5cf6" 
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="transactions" 
              name="Transactions" 
              stroke="#22c55e" 
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              name="Revenue ($)" 
              stroke="#3b82f6" 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export default LiveMetrics
