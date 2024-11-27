import { Map } from 'lucide-react'
import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import RegionalHeatmap from '../components/geographic/RegionalHeatmap'
import { DateRangePicker } from '../components/ui/date-range-picker'
import ExportMenu from '../components/ExportMenu'

const GeographicPerformance = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  const handleExport = (format) => {
    console.log(`Exporting in ${format} format`)
    // Implement export logic here
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Map className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Geographic Performance</h1>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker onDateChange={setDateRange} />
          <ExportMenu onExport={handleExport} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Regions"
          value="4"
          change="+1"
          trend="up"
        />
        <StatCard
          title="Top Region Revenue"
          value="$750K"
          change="+12.5%"
          trend="up"
        />
        <StatCard
          title="Regional Expansion"
          value="85%"
          change="+5.2%"
          trend="up"
        />
        <StatCard
          title="Cross-Region Activity"
          value="32%"
          change="+3.8%"
          trend="up"
        />
      </div>

      <div className="grid gap-6">
        <RegionalHeatmap />
      </div>
    </div>
  )
}

export default GeographicPerformance
