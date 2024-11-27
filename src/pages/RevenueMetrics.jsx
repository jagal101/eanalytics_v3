import { DollarSign } from 'lucide-react'
import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import RevenueComparison from '../components/revenue-metrics/RevenueComparison'
import CategoryRevenue from '../components/revenue-metrics/CategoryRevenue'
import TrendAnalysis from '../components/revenue-metrics/TrendAnalysis'
import { DateRangePicker } from '../components/ui/date-range-picker'
import { FilterSelect } from '../components/ui/filter-select'

const locationOptions = [
  { label: 'All Locations', value: 'all' },
  { label: 'North Region', value: 'north' },
  { label: 'South Region', value: 'south' },
  { label: 'East Region', value: 'east' },
  { label: 'West Region', value: 'west' },
]

const RevenueMetrics = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })
  const [location, setLocation] = useState('all')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Revenue Metrics</h1>
        </div>
        <div className="flex items-center gap-4">
          <FilterSelect 
            placeholder="Location"
            options={locationOptions}
            onSelect={setLocation}
          />
          <DateRangePicker onDateChange={setDateRange} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$847,543"
          change="+8.2%"
          trend="up"
        />
        <StatCard
          title="Avg Order Value"
          value="$85.20"
          change="+3.1%"
          trend="up"
        />
        <StatCard
          title="Revenue per Member"
          value="$125.40"
          change="+4.5%"
          trend="up"
        />
        <StatCard
          title="Program ROI"
          value="285%"
          change="+12%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueComparison />
        <CategoryRevenue />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TrendAnalysis />
        {/* Add more revenue analysis charts */}
      </div>
    </div>
  )
}

export default RevenueMetrics
