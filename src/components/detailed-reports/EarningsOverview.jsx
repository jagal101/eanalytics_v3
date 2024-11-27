import ChartCard from '../dashboard/ChartCard'

const EarningsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <ChartCard title="Total Revenue" className="text-center">
        <div className="text-3xl font-bold text-primary">$847,543</div>
        <p className="text-sm text-muted-foreground">+15.2% from last month</p>
      </ChartCard>
      
      <ChartCard title="Avg Order Value" className="text-center">
        <div className="text-3xl font-bold text-primary">$85.20</div>
        <p className="text-sm text-muted-foreground">+3.1% from last month</p>
      </ChartCard>
      
      <ChartCard title="Points Value" className="text-center">
        <div className="text-3xl font-bold text-primary">$52,450</div>
        <p className="text-sm text-muted-foreground">+8.7% from last month</p>
      </ChartCard>

      <ChartCard title="Loyalty Impact" className="text-center">
        <div className="text-3xl font-bold text-primary">32%</div>
        <p className="text-sm text-muted-foreground">+4.5% from last month</p>
      </ChartCard>
    </div>
  )
}

export default EarningsOverview
