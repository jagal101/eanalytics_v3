import { AlertTriangle } from 'lucide-react'
import { cn } from '../../lib/utils'

const AnomalyAlert = ({ anomaly, className }) => {
  return (
    <div className={cn(
      "flex items-center gap-2 rounded-lg border p-4 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
      className
    )}>
      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
      <div className="flex-1">
        <h4 className="text-sm font-medium text-yellow-900 dark:text-yellow-400">{anomaly.title}</h4>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">{anomaly.description}</p>
      </div>
      <span className="text-sm text-yellow-600 dark:text-yellow-500">{anomaly.time}</span>
    </div>
  )
}

export default AnomalyAlert
