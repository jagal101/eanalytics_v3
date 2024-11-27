import { FileText, Calendar, Download } from 'lucide-react'
import { useState } from 'react'
import { DateRangePicker } from '../components/ui/date-range-picker'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import ChartCard from '../components/dashboard/ChartCard'
import { Button } from '../components/ui/button'
import { FilterSelect } from '../components/ui/filter-select'

const reportTemplates = [
  { label: 'Monthly Engagement Summary', value: 'engagement' },
  { label: 'Program Performance Analysis', value: 'program' },
  { label: 'Revenue Analysis', value: 'revenue' },
  { label: 'Customer Segmentation', value: 'segmentation' },
]

const exportFormats = [
  { label: 'CSV Format', value: 'csv' },
  { label: 'Excel Spreadsheet', value: 'excel' },
  { label: 'PDF Document', value: 'pdf' },
]

const scheduleOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

const CustomReports = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null })
  const [selectedTemplate, setSelectedTemplate] = useState('engagement')
  const [exportFormat, setExportFormat] = useState('csv')
  const [schedule, setSchedule] = useState('monthly')

  const handleGenerateReport = () => {
    console.log('Generating report with:', {
      dateRange,
      template: selectedTemplate,
      format: exportFormat
    })
  }

  const handleScheduleReport = () => {
    console.log('Scheduling report with:', {
      schedule,
      template: selectedTemplate,
      format: exportFormat
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Custom Reports & Exports</h1>
        </div>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList>
          <TabsTrigger value="generate">Generate Report</TabsTrigger>
          <TabsTrigger value="schedule">Schedule Reports</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <ChartCard title="Generate Custom Report">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Date Range</label>
                  <DateRangePicker onDateChange={setDateRange} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Template</label>
                  <FilterSelect 
                    options={reportTemplates}
                    placeholder="Select template"
                    onSelect={setSelectedTemplate}
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Export Format</label>
                  <FilterSelect 
                    options={exportFormats}
                    placeholder="Select format"
                    onSelect={setExportFormat}
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={handleGenerateReport} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </div>
            </div>
          </ChartCard>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <ChartCard title="Schedule Recurring Reports">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Schedule Frequency</label>
                  <FilterSelect 
                    options={scheduleOptions}
                    placeholder="Select frequency"
                    onSelect={setSchedule}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Template</label>
                  <FilterSelect 
                    options={reportTemplates}
                    placeholder="Select template"
                    onSelect={setSelectedTemplate}
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Export Format</label>
                  <FilterSelect 
                    options={exportFormats}
                    placeholder="Select format"
                    onSelect={setExportFormat}
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={handleScheduleReport} className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Report
                  </Button>
                </div>
              </div>
            </div>
          </ChartCard>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {reportTemplates.map((template) => (
              <ChartCard 
                key={template.value}
                title={template.label}
                className="cursor-pointer hover:border-primary transition-colors"
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive report template for {template.label.toLowerCase()}
                </p>
                <Button variant="outline" className="w-full">
                  Use Template
                </Button>
              </ChartCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CustomReports
