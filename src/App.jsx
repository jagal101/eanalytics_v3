import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import CustomerInsights from './pages/CustomerInsights'
import ProgramPerformance from './pages/ProgramPerformance'
import CampaignAnalysis from './pages/CampaignAnalysis'
import RevenueMetrics from './pages/RevenueMetrics'
import CustomerActivity from './pages/CustomerActivity'
import RetentionAcquisition from './pages/RetentionAcquisition'
import GeographicPerformance from './pages/GeographicPerformance'
import RealTimeAnalytics from './pages/RealTimeAnalytics'
import CustomReports from './pages/CustomReports'
import DetailedReporting from './pages/DetailedReporting'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer-insights" element={<CustomerInsights />} />
        <Route path="/program-performance" element={<ProgramPerformance />} />
        <Route path="/campaign-analysis" element={<CampaignAnalysis />} />
        <Route path="/revenue-metrics" element={<RevenueMetrics />} />
        <Route path="/customer-activity" element={<CustomerActivity />} />
        <Route path="/retention" element={<RetentionAcquisition />} />
        <Route path="/geographic" element={<GeographicPerformance />} />
        <Route path="/real-time" element={<RealTimeAnalytics />} />
        <Route path="/reports" element={<CustomReports />} />
        <Route path="/detailed-reporting" element={<DetailedReporting />} />
      </Route>
    </Routes>
  )
}

export default App
