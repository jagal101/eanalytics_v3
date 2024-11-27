import { useState } from 'react'
import ChartCard from '../dashboard/ChartCard'
import { FilterSelect } from '../ui/filter-select'
import TransactionDetailsPopup from './TransactionDetailsPopup'

const transactionData = [
  {
    id: 'TRX-001',
    date: '2023-12-15 14:30',
    orderId: 'ORD-2301',
    customer: 'John Doe',
    customerType: 'VIP',
    location: 'North Region',
    type: 'Purchase',
    amount: 156.50,
    points: {
      earned: 157,
      redeemed: 0
    },
    items: 4,
    paymentMethod: 'Credit Card',
    program: 'Points',
    status: 'Completed'
  },
  {
    id: 'TRX-002',
    date: '2023-12-15 14:15',
    orderId: 'ORD-2302',
    customer: 'Sarah Smith',
    customerType: 'Gold',
    location: 'East Region',
    type: 'Redemption',
    amount: 0,
    points: {
      earned: 0,
      redeemed: 500
    },
    items: 1,
    paymentMethod: 'Points',
    program: 'Rewards',
    status: 'Completed'
  },
  {
    id: 'TRX-003',
    date: '2023-12-15 13:45',
    orderId: 'ORD-2303',
    customer: 'Mike Johnson',
    customerType: 'Regular',
    location: 'West Region',
    type: 'Stamp Card',
    amount: 45.75,
    points: {
      earned: 46,
      redeemed: 0
    },
    items: 2,
    paymentMethod: 'Cash',
    program: 'Stamp Cards',
    status: 'Completed'
  },
  {
    id: 'TRX-004',
    date: '2023-12-15 13:30',
    orderId: 'ORD-2304',
    customer: 'Emma Wilson',
    customerType: 'Silver',
    location: 'South Region',
    type: 'Purchase + Redemption',
    amount: 82.25,
    points: {
      earned: 82,
      redeemed: 200
    },
    items: 3,
    paymentMethod: 'Debit Card',
    program: 'Points + Rewards',
    status: 'Completed'
  },
  {
    id: 'TRX-005',
    date: '2023-12-15 13:15',
    orderId: 'ORD-2305',
    customer: 'Tom Brown',
    customerType: 'New Member',
    location: 'North Region',
    type: 'Purchase',
    amount: 35.99,
    points: {
      earned: 36,
      redeemed: 0
    },
    items: 1,
    paymentMethod: 'Credit Card',
    program: 'Points',
    status: 'Pending'
  },
  {
    id: 'TRX-006',
    date: '2023-12-15 13:00',
    orderId: 'ORD-2306',
    customer: 'Lisa Anderson',
    customerType: 'VIP',
    location: 'East Region',
    type: 'Referral Bonus',
    amount: 0,
    points: {
      earned: 250,
      redeemed: 0
    },
    items: 0,
    paymentMethod: 'N/A',
    program: 'Referral',
    status: 'Completed'
  },
  {
    id: 'TRX-007',
    date: '2023-12-15 12:45',
    orderId: 'ORD-2307',
    customer: 'David Clark',
    customerType: 'Gold',
    location: 'West Region',
    type: 'Purchase',
    amount: 129.99,
    points: {
      earned: 130,
      redeemed: 0
    },
    items: 5,
    paymentMethod: 'Credit Card',
    program: 'Points',
    status: 'Failed'
  },
  {
    id: 'TRX-008',
    date: '2023-12-15 12:30',
    orderId: 'ORD-2308',
    customer: 'Rachel Green',
    customerType: 'Regular',
    location: 'South Region',
    type: 'Stamp Card',
    amount: 28.50,
    points: {
      earned: 29,
      redeemed: 0
    },
    items: 2,
    paymentMethod: 'Mobile Wallet',
    program: 'Stamp Cards',
    status: 'Completed'
  },
  {
    id: 'TRX-009',
    date: '2023-12-15 12:15',
    orderId: 'ORD-2309',
    customer: 'James Wilson',
    customerType: 'Platinum',
    location: 'North Region',
    type: 'Birthday Reward',
    amount: 0,
    points: {
      earned: 500,
      redeemed: 0
    },
    items: 0,
    paymentMethod: 'N/A',
    program: 'Rewards',
    status: 'Completed'
  },
  {
    id: 'TRX-010',
    date: '2023-12-15 12:00',
    orderId: 'ORD-2310',
    customer: 'Emily Davis',
    customerType: 'Silver',
    location: 'East Region',
    type: 'Purchase + Stamp',
    amount: 67.50,
    points: {
      earned: 68,
      redeemed: 0
    },
    items: 3,
    paymentMethod: 'Credit Card',
    program: 'Points + Stamps',
    status: 'Completed'
  }
]

export const TransactionsTab = ({ filters }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedProgram, setSelectedProgram] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Filter transactions based on filters prop
  const filteredTransactions = transactionData.filter(transaction => {
    if (filters?.location !== 'all' && transaction.location !== filters.location) return false
    if (filters?.segment !== 'all' && transaction.customerType.toLowerCase() !== filters.segment) return false
    if (filters?.transactionType !== 'all' && transaction.type.toLowerCase() !== filters.transactionType) return false
    return true
  })

  // Calculate summary metrics
  const summaryMetrics = {
    totalTransactions: filteredTransactions.length,
    totalValue: filteredTransactions.reduce((sum, t) => sum + t.amount, 0),
    totalPointsEarned: filteredTransactions.reduce((sum, t) => sum + t.points.earned, 0),
    avgTransaction: filteredTransactions.reduce((sum, t) => sum + t.amount, 0) / filteredTransactions.length || 0
  }

  return (
    <div className="space-y-6">
      {/* Transaction Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <ChartCard title="Total Transactions" className="text-center">
          <div className="text-3xl font-bold text-primary">{summaryMetrics.totalTransactions}</div>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </ChartCard>
        
        <ChartCard title="Total Value" className="text-center">
          <div className="text-3xl font-bold text-primary">
            ${summaryMetrics.totalValue.toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </ChartCard>
        
        <ChartCard title="Points Activity" className="text-center">
          <div className="text-3xl font-bold text-primary">
            {summaryMetrics.totalPointsEarned}
          </div>
          <p className="text-sm text-muted-foreground">Points earned today</p>
        </ChartCard>

        <ChartCard title="Avg Transaction" className="text-center">
          <div className="text-3xl font-bold text-primary">
            ${summaryMetrics.avgTransaction.toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">Per transaction</p>
        </ChartCard>
      </div>

      {/* Transactions Table */}
      <ChartCard title="Transaction Details" subtitle="Comprehensive transaction history">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date & Time</th>
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-center py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Location</th>
                <th className="text-right py-3 px-4">Amount</th>
                <th className="text-right py-3 px-4">Points Earned</th>
                <th className="text-right py-3 px-4">Points Used</th>
                <th className="text-center py-3 px-4">Program</th>
                <th className="text-center py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredTransactions.map((transaction) => (
                <tr 
                  key={transaction.id} 
                  className="hover:bg-muted/50 cursor-pointer"
                  onClick={() => setSelectedTransaction(transaction)}
                >
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.orderId}</td>
                  <td className="py-3 px-4">
                    <div>
                      <div>{transaction.customer}</div>
                      <div className="text-xs text-muted-foreground">{transaction.customerType}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.type === 'Purchase' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : transaction.type === 'Redemption'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : transaction.type === 'Stamp Card'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">{transaction.location}</td>
                  <td className="py-3 px-4 text-right">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-right text-green-600">
                    {transaction.points.earned > 0 ? `+${transaction.points.earned}` : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-blue-600">
                    {transaction.points.redeemed > 0 ? `-${transaction.points.redeemed}` : '-'}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.program.includes('Points') 
                        ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
                        : transaction.program === 'Rewards'
                        ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
                        : transaction.program === 'Stamp Cards'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                        : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300'
                    }`}>
                      {transaction.program}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : transaction.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      {/* Transaction Details Popup */}
      <TransactionDetailsPopup 
        isOpen={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
        transaction={selectedTransaction}
      />
    </div>
  )
}
