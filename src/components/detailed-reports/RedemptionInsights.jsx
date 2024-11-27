import ChartCard from '../dashboard/ChartCard'

const RedemptionInsights = () => {
  return (
    <ChartCard title="Redemption Insights" subtitle="Key performance indicators">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Redemption Success Rate</span>
          <span className="text-sm font-bold text-green-600">94.2%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Avg. Time to Redeem</span>
          <span className="text-sm font-bold">3.2 days</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Expiration Rate</span>
          <span className="text-sm font-bold text-red-600">5.8%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Most Popular Channel</span>
          <span className="text-sm font-bold">In-Store (58%)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Peak Redemption Time</span>
          <span className="text-sm font-bold">2PM - 4PM</span>
        </div>
      </div>
    </ChartCard>
  )
}

export default RedemptionInsights
