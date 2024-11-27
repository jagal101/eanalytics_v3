import { UserPlus } from 'lucide-react'
import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import RetentionCohort from '../components/retention/RetentionCohort'
import { DateRangePicker } from '../components/ui/date-range-picker'

const RetentionAcquisition = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <UserPlus className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Retention & Acquisition</h1>
        </div>
        <DateRangePicker onDateChange={setDateRange} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="New Members"
          value="2,580"
          change="+15.3%"
          trend="up"
        />
        <StatCard
          title="Retention Rate"
          value="85%"
          change="+2.4%"
          trend="up"
        />
        <StatCard
          title="Acquisition Cost"
          value="$24.50"
          change="-8.3%"
          trend="up"
        />
        <StatCard
          title="Churn Rate"
          value="5.2%"
          change="-1.1%"
          trend="up"
        />
      </div>

      <div className="grid gap-6">
        <RetentionCohort />
      </div>
    </div>
  )
}

export default RetentionAcquisition
