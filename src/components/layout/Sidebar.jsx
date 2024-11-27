import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  Megaphone,
  DollarSign,
  Activity,
  UserPlus,
  Map,
  LineChart,
  FileText,
  BarChart2
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Customer Insights', to: '/customer-insights', icon: Users },
  { name: 'Program Performance', to: '/program-performance', icon: Target },
  { name: 'Campaign Analysis', to: '/campaign-analysis', icon: Megaphone },
  { name: 'Revenue Metrics', to: '/revenue-metrics', icon: DollarSign },
  { name: 'Customer Activity', to: '/customer-activity', icon: Activity },
  { name: 'Retention & Acquisition', to: '/retention', icon: UserPlus },
  { name: 'Geographic Performance', to: '/geographic', icon: Map },
  { name: 'Real-Time Analytics', to: '/real-time', icon: LineChart },
  { name: 'Custom Reports', to: '/reports', icon: FileText },
  { name: 'Detailed Reporting', to: '/detailed-reporting', icon: BarChart2 },
]

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 z-50 hidden lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-card border-r">
        <div className="flex h-16 items-center gap-2 px-6 border-b">
          <span className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
            e
          </span>
          <span className="text-lg font-semibold">Loyalty</span>
        </div>
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
