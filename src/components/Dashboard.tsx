import {
  MessageSquare,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUp,
  ArrowDown,
  MessageCircle,
  CheckCircle2,
  Clock,
  Zap,
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Chats',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Active Contacts',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Conversion Rate',
      value: '24.5%',
      change: '+3.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Revenue',
      value: '$48,392',
      change: '-2.4%',
      trend: 'down',
      icon: DollarSign,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const recentChats = [
    {
      name: 'John Smith',
      message: 'Hi, I would like to inquire about your product...',
      time: '2 min ago',
      unread: true,
      status: 'active',
    },
    {
      name: 'Emma Wilson',
      message: 'Thank you for the quick response!',
      time: '15 min ago',
      unread: false,
      status: 'resolved',
    },
    {
      name: 'Michael Brown',
      message: 'Can you help me with my order #12345?',
      time: '1 hour ago',
      unread: true,
      status: 'pending',
    },
    {
      name: 'Sarah Davis',
      message: 'I need more information about pricing',
      time: '2 hours ago',
      unread: false,
      status: 'active',
    },
  ];

  const aiInsights = [
    {
      title: 'High-Intent Leads Detected',
      value: '23',
      description: 'Leads showing strong buying signals',
      icon: Zap,
      color: 'text-amber-500',
    },
    {
      title: 'Auto-Resolved Queries',
      value: '156',
      description: 'Queries handled by AI Agent today',
      icon: CheckCircle2,
      color: 'text-emerald-500',
    },
    {
      title: 'Avg Response Time',
      value: '1.2 min',
      description: 'Team average across all chats',
      icon: Clock,
      color: 'text-blue-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                  <div className="flex items-center space-x-1">
                    {stat.trend === 'up' ? (
                      <ArrowUp size={16} className="text-emerald-500" />
                    ) : (
                      <ArrowDown size={16} className="text-red-500" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-slate-500">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Recent Conversations</h2>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentChats.map((chat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center font-semibold text-slate-700">
                      {chat.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    {chat.unread && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-slate-900">{chat.name}</h3>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          chat.status === 'active'
                            ? 'bg-emerald-100 text-emerald-700'
                            : chat.status === 'resolved'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {chat.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 truncate">{chat.message}</p>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xs text-slate-500">{chat.time}</p>
                  <MessageCircle
                    size={16}
                    className={`mt-2 ml-auto ${chat.unread ? 'text-emerald-500' : 'text-slate-400'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-6">AI Insights</h2>
          <div className="space-y-6">
            {aiInsights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <Icon size={20} className={insight.color} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-semibold text-slate-900">{insight.title}</h3>
                        <span className="text-2xl font-bold text-slate-900">{insight.value}</span>
                      </div>
                      <p className="text-sm text-slate-600">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
              <h3 className="font-semibold text-emerald-900 mb-2">AI Performance Score</h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-emerald-600">94%</p>
                  <p className="text-sm text-emerald-700">Efficiency Rating</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-600 font-medium">+5%</p>
                  <p className="text-xs text-emerald-700">from last week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to supercharge your WhatsApp workflow?</h2>
            <p className="text-slate-600 mb-4">
              Unlock AI-powered features, unlimited broadcasts, and advanced analytics
            </p>
            <div className="flex items-center space-x-3">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                Upgrade to Pro
              </button>
              <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
