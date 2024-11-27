import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'
import { ScrollArea } from '../ui/scroll-area'

const TransactionDetailsPopup = ({ isOpen, onClose, transaction }) => {
  if (!transaction) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Transaction Details - {transaction.orderId}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="items">Items & Rewards</TabsTrigger>
            <TabsTrigger value="loyalty">Loyalty Details</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[60vh] mt-4 pr-4">
            <TabsContent value="overview" className="space-y-6">
              {/* Transaction Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Transaction ID</h3>
                    <p className="text-sm">{transaction.id}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Date & Time</h3>
                    <p className="text-sm">{transaction.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                    <p className="text-sm">{transaction.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Total Amount</h3>
                    <p className="text-lg font-bold">${transaction.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Payment Method</h3>
                    <p className="text-sm">{transaction.paymentMethod}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Program Type</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.program.includes('Points') 
                        ? 'bg-indigo-100 text-indigo-800'
                        : transaction.program === 'Rewards'
                        ? 'bg-pink-100 text-pink-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {transaction.program}
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customer" className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold">{transaction.customer[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{transaction.customer}</h3>
                    <p className="text-sm text-muted-foreground">{transaction.customerType} Member</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Member Since</h3>
                      <p className="text-sm">January 15, 2023</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Total Purchases</h3>
                      <p className="text-sm">45 transactions</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Lifetime Value</h3>
                      <p className="text-sm">$2,845.50</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Current Points Balance</h3>
                      <p className="text-sm">2,450 points</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Rewards Redeemed</h3>
                      <p className="text-sm">12 rewards</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Last Visit</h3>
                      <p className="text-sm">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="items" className="space-y-6">
              {/* Items and Rewards */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Purchased Items</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Item</th>
                        <th className="text-center py-2 px-4">Quantity</th>
                        <th className="text-right py-2 px-4">Price</th>
                        <th className="text-right py-2 px-4">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-2 px-4">Premium Coffee</td>
                        <td className="py-2 px-4 text-center">2</td>
                        <td className="py-2 px-4 text-right">$4.99</td>
                        <td className="py-2 px-4 text-right">$9.98</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Croissant</td>
                        <td className="py-2 px-4 text-center">1</td>
                        <td className="py-2 px-4 text-right">$3.50</td>
                        <td className="py-2 px-4 text-right">$3.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Rewards Applied</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Reward</th>
                        <th className="text-center py-2 px-4">Points Used</th>
                        <th className="text-right py-2 px-4">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-2 px-4">Free Pastry Reward</td>
                        <td className="py-2 px-4 text-center">500</td>
                        <td className="py-2 px-4 text-right">$3.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="loyalty" className="space-y-6">
              {/* Loyalty Program Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-4">Points Activity</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Points Earned</h4>
                        <p className="text-lg font-bold text-green-600">+{transaction.points.earned}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Points Redeemed</h4>
                        <p className="text-lg font-bold text-blue-600">-{transaction.points.redeemed}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Net Change</h4>
                        <p className="text-lg font-bold">
                          {transaction.points.earned - transaction.points.redeemed}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Program Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Current Tier Progress</h4>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm mt-1">750/1000 points to next tier</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Stamp Card Progress</h4>
                        <div className="flex gap-1 mt-2">
                          {[...Array(10)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-6 h-6 rounded-full ${
                                i < 7 ? 'bg-primary' : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm mt-1">7/10 stamps collected</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Available Rewards</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">Free Coffee Reward</h4>
                      <p className="text-sm text-muted-foreground">500 points required</p>
                      <p className="text-sm text-green-600 mt-2">Available to redeem</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">25% Off Next Purchase</h4>
                      <p className="text-sm text-muted-foreground">1000 points required</p>
                      <p className="text-sm text-yellow-600 mt-2">250 points needed</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default TransactionDetailsPopup
