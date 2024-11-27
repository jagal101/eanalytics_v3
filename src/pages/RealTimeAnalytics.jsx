import { LineChart } from 'lucide-react'
import StatCard from '../components/dashboard/StatCard'
import LiveMetrics from '../components/real-time/LiveMetrics'
import ActivityFeed from '../components/real-time/ActivityFeed'

const RealTimeAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LineChart className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Real-Time Analytics</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Current Active Users"
          value="234"
          change="+12"
          trend="up"
        />
        <StatCard
          title="Live Transactions"
          value="18"
          change="+3"
          trend="up"
        />
        <StatCard
          title="Revenue (Last Hour)"
          value="$2,845"
          change="+$420"
          trend="up"
        />
        <StatCard
          title="Active Sessions"
          value="456"
          change="+28"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LiveMetrics />
        <ActivityFeed />
      </div>
    </div>
  )
}

export default RealTimeAnalytics
