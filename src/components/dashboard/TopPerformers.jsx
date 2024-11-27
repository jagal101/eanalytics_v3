import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import ChartCard from './ChartCard'

const data = [
  { 
    customer: "John Doe",
    points: 12500,
    visits: 45,
    spending: 2800,
    status: "VIP"
  },
  { 
    customer: "Jane Smith",
    points: 10800,
    visits: 38,
    spending: 2400,
    status: "Gold"
  },
  { 
    customer: "Mike Johnson",
    points: 9500,
    visits: 32,
    spending: 2100,
    status: "Gold"
  },
  { 
    customer: "Sarah Williams",
    points: 8900,
    visits: 28,
    spending: 1900,
    status: "Silver"
  },
]

const TopPerformers = () => {
  return (
    <ChartCard 
      title="Top Performing Customers" 
      subtitle="Highest engaging customers this month"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead>Spending</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.customer}>
              <TableCell className="font-medium">{row.customer}</TableCell>
              <TableCell>{row.points.toLocaleString()}</TableCell>
              <TableCell>{row.visits}</TableCell>
              <TableCell>${row.spending.toLocaleString()}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  row.status === 'VIP' 
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                    : row.status === 'Gold'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                }`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartCard>
  )
}

export default TopPerformers
