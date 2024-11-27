import { useEffect, useState } from 'react'
import { User, ShoppingCart, Star, Gift } from 'lucide-react'
import ChartCard from '../dashboard/ChartCard'

const activityTypes = [
  { 
    type: 'purchase',
    icon: ShoppingCart,
    getMessage: (data) => `${data.user} made a purchase of $${data.amount}`
  },
  { 
    type: 'reward',
    icon: Gift,
    getMessage: (data) => `${data.user} redeemed ${data.points} points`
  },
  { 
    type: 'review',
    icon: Star,
    getMessage: (data) => `${data.user} left a ${data.rating}-star review`
  },
  { 
    type: 'signup',
    icon: User,
    getMessage: (data) => `${data.user} joined the loyalty program`
  }
]

const ActivityFeed = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    // Simulate real-time activity updates
    const interval = setInterval(() => {
      const newActivity = generateRandomActivity()
      setActivities(prev => [newActivity, ...prev].slice(0, 10))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const generateRandomActivity = () => {
    const names = ['John D.', 'Sarah M.', 'Mike R.', 'Emma L.', 'Alex K.']
    const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)]
    const user = names[Math.floor(Math.random() * names.length)]
    
    const data = {
      id: Date.now(),
      timestamp: new Date(),
      user,
      type: activityType.type,
      amount: Math.floor(Math.random() * 200) + 50,
      points: Math.floor(Math.random() * 1000) + 500,
      rating: Math.floor(Math.random() * 3) + 3
    }

    return {
      ...data,
      message: activityType.getMessage(data),
      Icon: activityType.icon
    }
  }

  return (
    <ChartCard 
      title="Live Activity Feed" 
      subtitle="Real-time customer interactions"
    >
      <div className="space-y-4 max-h-[400px] overflow-auto">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start space-x-4 p-3 rounded-lg bg-muted/50"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <activity.Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm">{activity.message}</p>
              <p className="text-xs text-muted-foreground">
                {activity.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

export default ActivityFeed
