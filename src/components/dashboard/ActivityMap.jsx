import { useState } from 'react'
import ChartCard from './ChartCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const regions = {
  'North': { high: 12, medium: 8, low: 4 },
  'South': { high: 8, medium: 10, low: 6 },
  'East': { high: 15, medium: 5, low: 3 },
  'West': { high: 10, medium: 12, low: 2 },
}

const ActivityMap = () => {
  const [selectedRegion, setSelectedRegion] = useState('North')

  return (
    <ChartCard 
      title="Regional Activity Distribution" 
      subtitle="Customer engagement levels by region"
    >
      <div className="mb-4">
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(regions).map((region) => (
              <SelectItem key={region} value={region}>
                {region} Region
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>High Activity</span>
          <div className="w-2/3 bg-muted rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${(regions[selectedRegion].high / 20) * 100}%` }}
            />
          </div>
          <span className="ml-2">{regions[selectedRegion].high}k</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>Medium Activity</span>
          <div className="w-2/3 bg-muted rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${(regions[selectedRegion].medium / 20) * 100}%` }}
            />
          </div>
          <span className="ml-2">{regions[selectedRegion].medium}k</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>Low Activity</span>
          <div className="w-2/3 bg-muted rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full" 
              style={{ width: `${(regions[selectedRegion].low / 20) * 100}%` }}
            />
          </div>
          <span className="ml-2">{regions[selectedRegion].low}k</span>
        </div>
      </div>
    </ChartCard>
  )
}

export default ActivityMap
