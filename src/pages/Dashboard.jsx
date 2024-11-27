import StatCard from '../components/dashboard/StatCard'
import EngagementChart from '../components/dashboard/EngagementChart'
import RevenueDistribution from '../components/dashboard/RevenueDistribution'
import ActivityMap from '../components/dashboard/ActivityMap'
import TopPerformers from '../components/dashboard/TopPerformers'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Loyalty Members"
          value="24,580"
          change="+12.5%"
          trend="up"
        />
        <StatCard
          title="Customer Engagement Rate"
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
          title="Total Rewards Redeemed"
          value="3,287"
          change="+18.7%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <EngagementChart />
        <RevenueDistribution />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ActivityMap />
        <TopPerformers />
      </div>
    </div>
  )
}

export default Dashboard
