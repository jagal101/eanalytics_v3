import { useState } from 'react'
import { LineChart } from 'lucide-react'
import StatCard from '../components/dashboard/StatCard'
import AnalyticsFilters from '../components/analytics/AnalyticsFilters'
import AnomalyAlert from '../components/analytics/AnomalyAlert'
import ExportOptions from '../components/analytics/ExportOptions'
import ChartCard from '../components/dashboard/ChartCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockAnomalies = [
  {
    id: 1,
    title: 'Unusual Spike in Point Redemptions',
    description: 'Point redemptions increased by 150% in the last hour',
    time: '15 mins ago'
  },
  {
    id: 2,
    title: 'Drop in Customer Engagement',
    description: 'Engagement rate dropped by 45% compared to usual patterns',
    time: '1 hour ago'
  }
]

const Analytics = () => {
  const [filters, setFilters] = useState({
    dateRange: null,
    location: 'all',
    campaign: 'all',
    segment: 'all'
  })

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleExport = (format) => {
    console.log(`Exporting in ${format} format`)
    // Implement export logic
  }

  const handleShare = (method) => {
    console.log(`Sharing via ${method}`)
    // Implement share logic
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LineChart className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        </div>
        <ExportOptions onExport={handleExport} onShare={handleShare} />
      </div>

      <AnalyticsFilters onFilterChange={handleFilterChange} />

      {/* Anomaly Alerts */}
      <div className="space-y-3">
        {mockAnomalies.map((anomaly) => (
          <AnomalyAlert key={anomaly.id} anomaly={anomaly} />
        ))}
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Members"
          value="24,580"
          change="+12.5%"
          trend="up"
        />
        <StatCard
          title="Engagement Rate"
          value="68.2%"
          change="+5.4%"
          trend="up"
        />
        <StatCard
          title="Revenue Impact"
          value="$847,543"
          change="-2.3%"
          trend="down"
        />
        <StatCard
          title="Rewards Redeemed"
          value="3,287"
          change="+18.7%"
          trend="up"
        />
      </div>

      {/* Analytics Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartCard title="Member Growth" subtitle="Monthly member acquisition">
          {/* Add member growth chart */}
        </ChartCard>
        <ChartCard title="Engagement Metrics" subtitle="Key engagement indicators">
          {/* Add engagement metrics chart */}
        </ChartCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ChartCard title="Revenue Analysis" subtitle="Revenue by program type">
          {/* Add revenue analysis chart */}
        </ChartCard>
        <ChartCard title="Customer Behavior" subtitle="Activity patterns">
          {/* Add customer behavior chart */}
        </ChartCard>
      </div>
    </div>
  )
}

export default Analytics
