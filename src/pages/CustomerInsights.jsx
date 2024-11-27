import { Users } from 'lucide-react'
import DemographicsChart from '../components/customer-insights/DemographicsChart'
import CustomerSegmentation from '../components/customer-insights/CustomerSegmentation'
import ChurnAnalysis from '../components/customer-insights/ChurnAnalysis'
import CustomerLifetimeValue from '../components/customer-insights/CustomerLifetimeValue'
import StatCard from '../components/dashboard/StatCard'

const CustomerInsights = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Customer Insights</h1>
        </div>
        <div className="flex items-center space-x-2">
          {/* Add filters/date range selector here */}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Customers"
          value="13,290"
          change="+5.2%"
          trend="up"
        />
        <StatCard
          title="Average CLV"
          value="$2,845"
          change="+3.1%"
          trend="up"
        />
        <StatCard
          title="Churn Rate"
          value="2.1%"
          change="-0.5%"
          trend="up"
        />
        <StatCard
          title="Customer Satisfaction"
          value="4.6/5"
          change="+0.2"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DemographicsChart />
        <CustomerSegmentation />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ChurnAnalysis />
        <CustomerLifetimeValue />
      </div>
    </div>
  )
}

export default CustomerInsights
