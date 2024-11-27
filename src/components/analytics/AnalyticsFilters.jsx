import { DateRangePicker } from '../ui/date-range-picker'
import { FilterSelect } from '../ui/filter-select'

const locationOptions = [
  { label: 'All Locations', value: 'all' },
  { label: 'North Region', value: 'north' },
  { label: 'South Region', value: 'south' },
  { label: 'East Region', value: 'east' },
  { label: 'West Region', value: 'west' },
]

const campaignOptions = [
  { label: 'All Campaigns', value: 'all' },
  { label: 'Summer Sale', value: 'summer' },
  { label: 'Holiday Bundle', value: 'holiday' },
  { label: 'Spring Promo', value: 'spring' },
  { label: 'Member Day', value: 'member' },
]

const segmentOptions = [
  { label: 'All Segments', value: 'all' },
  { label: 'VIP Members', value: 'vip' },
  { label: 'Regular Members', value: 'regular' },
  { label: 'New Members', value: 'new' },
  { label: 'At Risk', value: 'risk' },
]

const AnalyticsFilters = ({ onFilterChange }) => {
  const handleDateChange = (dates) => {
    onFilterChange('dateRange', dates)
  }

  const handleLocationChange = (location) => {
    onFilterChange('location', location)
  }

  const handleCampaignChange = (campaign) => {
    onFilterChange('campaign', campaign)
  }

  const handleSegmentChange = (segment) => {
    onFilterChange('segment', segment)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <DateRangePicker onDateChange={handleDateChange} />
        <FilterSelect 
          placeholder="Location"
          options={locationOptions}
          onSelect={handleLocationChange}
        />
        <FilterSelect 
          placeholder="Campaign"
          options={campaignOptions}
          onSelect={handleCampaignChange}
        />
        <FilterSelect 
          placeholder="Customer Segment"
          options={segmentOptions}
          onSelect={handleSegmentChange}
        />
      </div>
    </div>
  )
}

export default AnalyticsFilters
