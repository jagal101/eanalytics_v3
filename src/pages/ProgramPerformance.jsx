import { Target } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import StatCard from '../components/dashboard/StatCard'
import PointsAnalysis from '../components/program-performance/PointsAnalysis'
import StampCardMetrics from '../components/program-performance/StampCardMetrics'
import ReferralMetrics from '../components/program-performance/ReferralMetrics'
import MembershipTiers from '../components/program-performance/MembershipTiers'

const ProgramPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Target className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Program Performance</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Programs"
          value="4"
          change="+1"
          trend="up"
        />
        <StatCard
          title="Total Points Issued"
          value="258,490"
          change="+12.3%"
          trend="up"
        />
        <StatCard
          title="Redemption Rate"
          value="68%"
          change="+5.4%"
          trend="up"
        />
        <StatCard
          title="Avg. Points per User"
          value="1,245"
          change="+8.7%"
          trend="up"
        />
      </div>

      <Tabs defaultValue="points" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="points">Points Program</TabsTrigger>
          <TabsTrigger value="stamps">Stamp Cards</TabsTrigger>
          <TabsTrigger value="referral">Referral Program</TabsTrigger>
          <TabsTrigger value="membership">Membership Tiers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="points" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PointsAnalysis />
            <StatCard
              title="Points Redemption Value"
              value="$52,845"
              change="+15.2%"
              trend="up"
            />
          </div>
        </TabsContent>

        <TabsContent value="stamps" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <StampCardMetrics />
            <StatCard
              title="Active Stamp Cards"
              value="1,845"
              change="+8.5%"
              trend="up"
            />
          </div>
        </TabsContent>

        <TabsContent value="referral" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ReferralMetrics />
            <StatCard
              title="Referral Conversion Rate"
              value="72%"
              change="+4.2%"
              trend="up"
            />
          </div>
        </TabsContent>

        <TabsContent value="membership" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <MembershipTiers />
            <StatCard
              title="Member Retention Rate"
              value="89%"
              change="+2.1%"
              trend="up"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProgramPerformance
