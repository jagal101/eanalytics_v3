import ChartCard from '../dashboard/ChartCard'

const RedemptionOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <ChartCard title="Total Redemptions" className="text-center">
        <div className="text-3xl font-bold text-primary">3,067</div>
        <p className="text-sm text-muted-foreground">+12.5% from last month</p>
      </ChartCard>
      
      <ChartCard title="Redemption Value" className="text-center">
        <div className="text-3xl font-bold text-primary">$15,240</div>
        <p className="text-sm text-muted-foreground">+8.3% from last month</p>
      </ChartCard>
      
      <ChartCard title="Avg. Points per Redemption" className="text-center">
        <div className="text-3xl font-bold text-primary">850</div>
        <p className="text-sm text-muted-foreground">-2.1% from last month</p>
      </ChartCard>

      <ChartCard title="Redemption Rate" className="text-center">
        <div className="text-3xl font-bold text-primary">72%</div>
        <p className="text-sm text-muted-foreground">+4.5% from last month</p>
      </ChartCard>
    </div>
  )
}

export default RedemptionOverview
