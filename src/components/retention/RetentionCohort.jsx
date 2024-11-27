import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { cn } from '../../lib/utils'

const cohortData = [
  {
    month: 'Jan 2023',
    cohortSize: 1200,
    retention: [100, 75, 65, 58, 52, 48]
  },
  {
    month: 'Feb 2023',
    cohortSize: 1500,
    retention: [100, 78, 68, 60, 55, 50]
  },
  {
    month: 'Mar 2023',
    cohortSize: 1800,
    retention: [100, 80, 70, 63, 58, 52]
  },
  {
    month: 'Apr 2023',
    cohortSize: 2000,
    retention: [100, 82, 72, 65, 60]
  },
  {
    month: 'May 2023',
    cohortSize: 2200,
    retention: [100, 85, 75, 68]
  },
  {
    month: 'Jun 2023',
    cohortSize: 2500,
    retention: [100, 88, 78]
  }
]

const RetentionCohort = () => {
  const [hoveredCell, setHoveredCell] = useState(null)

  const getColorIntensity = (value) => {
    if (!value) return 'bg-muted'
    if (value >= 80) return 'bg-green-500'
    if (value >= 60) return 'bg-green-400'
    if (value >= 40) return 'bg-green-300'
    return 'bg-green-200'
  }

  return (
    <ChartCard 
      title="Retention Cohort Analysis" 
      subtitle="Monthly cohort retention rates (%)"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Cohort</th>
              <th className="p-2">Size</th>
              {[0, 1, 2, 3, 4, 5].map(month => (
                <th key={month} className="p-2">Month {month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cohortData.map((cohort, i) => (
              <tr key={cohort.month}>
                <td className="p-2 font-medium">{cohort.month}</td>
                <td className="p-2 text-center">{cohort.cohortSize}</td>
                {cohort.retention.map((value, j) => (
                  <td 
                    key={j}
                    className="p-2"
                    onMouseEnter={() => setHoveredCell(`${i}-${j}`)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <div 
                      className={cn(
                        "h-8 flex items-center justify-center rounded transition-colors",
                        getColorIntensity(value),
                        hoveredCell === `${i}-${j}` ? 'ring-2 ring-primary' : ''
                      )}
                    >
                      {value}%
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  )
}

export default RetentionCohort
