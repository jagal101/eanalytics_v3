import { Activity } from 'lucide-react'
import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import VisitFrequency from '../components/customer-activity/VisitFrequency'
import ChannelEngagement from '../components/customer-activity/ChannelEngagement'
import { DateRangePicker } from '../components/ui/date-range-picker'
import ExportMenu from '../components/ExportMenu'

const CustomerActivity = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  const handleExport = (format) => {
    console.log(`Exporting in ${format} format`)
    // Implement export logic here
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Customer Activity</h1>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker onDateChange={setDateRange} />
          <ExportMenu onExport={handleExport} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Users"
          value="18.2K"
          change="+12.3%"
          trend="up"
        />
        <StatCard
          title="Avg. Session Duration"
          value="8m 45s"
          change="+5.8%"
          trend="up"
        />
        <StatCard
          title="Engagement Score"
          value="7.8/10"
          change="+0.5"
          trend="up"
        />
        <StatCard
          title="Interaction Rate"
          value="65%"
          change="+3.2%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <VisitFrequency />
        <ChannelEngagement />
      </div>
    </div>
  )
}

export default CustomerActivity
