import ChartCard from '../dashboard/ChartCard'

const behaviors = [
  { 
    metric: 'Purchase Frequency',
    value: '2.8 times/month',
    trend: '+0.3',
    details: 'Average number of purchases per customer per month'
  },
  { 
    metric: 'Average Basket Size',
    value: '$45.20',
    trend: '+$3.50',
    details: 'Average value of items in each transaction'
  },
  { 
    metric: 'Cross-Category Shopping',
    value: '3.2 categories',
    trend: '+0.5',
    details: 'Average number of different categories shopped'
  },
  { 
    metric: 'Program Engagement',
    value: '85%',
    trend: '+5%',
    details: 'Percentage of customers actively using loyalty features'
  },
]

const CustomerBehavior = () => {
  return (
    <ChartCard title="Customer Behavior Metrics" subtitle="Key behavioral indicators">
      <div className="divide-y">
        {behaviors.map((behavior) => (
          <div key={behavior.metric} className="py-4">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{behavior.metric}</span>
              <div className="flex items-center space-x-2">
                <span className="font-bold">{behavior.value}</span>
                <span className="text-sm text-green-600">{behavior.trend}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{behavior.details}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

export default CustomerBehavior
