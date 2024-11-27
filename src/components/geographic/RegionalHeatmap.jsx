import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { FilterSelect } from '../ui/filter-select'

const metrics = [
  { label: 'Member Count', value: 'members' },
  { label: 'Revenue', value: 'revenue' },
  { label: 'Engagement Rate', value: 'engagement' },
  { label: 'Retention Rate', value: 'retention' },
]

const regions = {
  'North': { members: 12500, revenue: 625000, engagement: 78, retention: 85 },
  'South': { members: 8500, revenue: 425000, engagement: 72, retention: 82 },
  'East': { members: 15000, revenue: 750000, engagement: 82, retention: 88 },
  'West': { members: 10000, revenue: 500000, engagement: 75, retention: 84 },
}

const getMetricValue = (region, metric) => {
  const value = regions[region][metric]
  switch(metric) {
    case 'members':
      return `${(value / 1000).toFixed(1)}k`
    case 'revenue':
      return `$${(value / 1000).toFixed(0)}k`
    case 'engagement':
    case 'retention':
      return `${value}%`
    default:
      return value
  }
}

const getMetricColor = (metric, value) => {
  const baseColors = {
    members: ['bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400'],
    revenue: ['bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400'],
    engagement: ['bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400'],
    retention: ['bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400'],
  }

  const values = Object.values(regions).map(r => r[metric]).sort((a, b) => a - b)
  const index = values.indexOf(value)
  return baseColors[metric][index]
}

const RegionalHeatmap = () => {
  const [selectedMetric, setSelectedMetric] = useState('members')

  return (
    <ChartCard 
      title="Regional Performance Heatmap" 
      subtitle="Geographic distribution of key metrics"
    >
      <div className="mb-4">
        <FilterSelect 
          placeholder="Select Metric"
          options={metrics}
          onSelect={setSelectedMetric}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(regions).map(([region, data]) => (
          <div 
            key={region}
            className={`p-4 rounded-lg border ${getMetricColor(selectedMetric, data[selectedMetric])}`}
          >
            <div className="text-sm font-medium text-muted-foreground">
              {region} Region
            </div>
            <div className="mt-2 text-2xl font-bold">
              {getMetricValue(region, selectedMetric)}
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

export default RegionalHeatmap
