import { Megaphone } from 'lucide-react'
import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import CampaignROI from '../components/campaign-analysis/CampaignROI'
import CampaignEngagement from '../components/campaign-analysis/CampaignEngagement'
import CampaignPerformance from '../components/campaign-analysis/CampaignPerformance'
import ABTestResults from '../components/campaign-analysis/ABTestResults'
import { DateRangePicker } from '../components/ui/date-range-picker'
import { FilterSelect } from '../components/ui/filter-select'

const campaignTypes = [
  { label: 'All Campaigns', value: 'all' },
  { label: 'Email Campaigns', value: 'email' },
  { label: 'Social Media', value: 'social' },
  { label: 'Push Notifications', value: 'push' },
]

const CampaignAnalysis = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })
  const [campaignType, setCampaignType] = useState('all')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Megaphone className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Campaign Analysis</h1>
        </div>
        <div className="flex items-center gap-4">
          <FilterSelect 
            placeholder="Campaign Type"
            options={campaignTypes}
            onSelect={setCampaignType}
          />
          <DateRangePicker onDateChange={setDateRange} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Campaigns"
          value="5"
          change="+2"
          trend="up"
        />
        <StatCard
          title="Avg. Campaign ROI"
          value="245%"
          change="+15%"
          trend="up"
        />
        <StatCard
          title="Customer Reach"
          value="15.2K"
          change="+2.3K"
          trend="up"
        />
        <StatCard
          title="Engagement Rate"
          value="32%"
          change="+5%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CampaignROI />
        <CampaignEngagement />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CampaignPerformance />
        <ABTestResults />
      </div>
    </div>
  )
}

export default CampaignAnalysis
