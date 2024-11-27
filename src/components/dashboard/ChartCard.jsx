import { cn } from "../../lib/utils"

const ChartCard = ({ title, subtitle, children, className }) => {
  return (
    <div className={cn("rounded-lg border bg-card p-6", className)}>
      <div className="mb-4">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  )
}

export default ChartCard
