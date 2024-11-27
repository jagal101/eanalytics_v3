import { BarChart2, Download, Share2 } from 'lucide-react'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import { DateRangePicker } from '../components/ui/date-range-picker'
import { FilterSelect } from '../components/ui/filter-select'
import { Button } from '../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { TransactionsTab } from '../components/detailed-reports/TransactionsTab'
import { RedemptionsTab } from '../components/detailed-reports/RedemptionsTab'
import { EarningsTab } from '../components/detailed-reports/EarningsTab'
import { CustomerTab } from '../components/detailed-reports/CustomerTab'

const locationOptions = [
  { label: 'All Locations', value: 'all' },
  { label: 'North Region', value: 'north' },
  { label: 'South Region', value: 'south' },
  { label: 'East Region', value: 'east' },
  { label: 'West Region', value: 'west' },
]

const segmentOptions = [
  { label: 'All Segments', value: 'all' },
  { label: 'VIP Members', value: 'vip' },
  { label: 'Gold Members', value: 'gold' },
  { label: 'Silver Members', value: 'silver' },
  { label: 'Regular Members', value: 'regular' },
  { label: 'New Members', value: 'new' },
  { label: 'At Risk Members', value: 'risk' },
]

const transactionTypeOptions = [
  { label: 'All Types', value: 'all' },
  { label: 'Purchases', value: 'purchase' },
  { label: 'Redemptions', value: 'redemption' },
  { label: 'Stamp Cards', value: 'stamp' },
  { label: 'Referrals', value: 'referral' },
  { label: 'Welcome Bonus', value: 'welcome' },
  { label: 'Birthday Rewards', value: 'birthday' },
  { label: 'Membership', value: 'membership' },
]

const DetailedReporting = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })
  const [location, setLocation] = useState('all')
  const [segment, setSegment] = useState('all')
  const [transactionType, setTransactionType] = useState('all')

  const handleExport = (format) => {
    console.log(`Exporting in ${format} format`)
  }

  const handleShare = (method) => {
    console.log(`Sharing via ${method}`)
  }

  const handleFilterChange = (type, value) => {
    switch(type) {
      case 'location':
        setLocation(value)
        break
      case 'segment':
        setSegment(value)
        break
      case 'transactionType':
        setTransactionType(value)
        break
      default:
        break
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Detailed Reporting</h1>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleExport('csv')}>
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('excel')}>
                Export as Excel
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('pdf')}>
                Export as PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Share Report</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleShare('email')}>
                Share via Email
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('link')}>
                Copy Share Link
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('schedule')}>
                Schedule Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <DateRangePicker onDateChange={setDateRange} />
          <FilterSelect 
            placeholder="Location"
            options={locationOptions}
            onSelect={(value) => handleFilterChange('location', value)}
          />
          <FilterSelect 
            placeholder="Customer Segment"
            options={segmentOptions}
            onSelect={(value) => handleFilterChange('segment', value)}
          />
          <FilterSelect 
            placeholder="Transaction Type"
            options={transactionTypeOptions}
            onSelect={(value) => handleFilterChange('transactionType', value)}
          />
        </div>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <TransactionsTab 
            filters={{
              dateRange,
              location,
              segment,
              transactionType
            }}
          />
        </TabsContent>

        <TabsContent value="earnings">
          <EarningsTab 
            filters={{
              dateRange,
              location,
              segment
            }}
          />
        </TabsContent>

        <TabsContent value="redemptions">
          <RedemptionsTab 
            filters={{
              dateRange,
              location,
              segment
            }}
          />
        </TabsContent>

        <TabsContent value="customers">
          <CustomerTab 
            filters={{
              dateRange,
              location,
              segment
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default DetailedReporting
