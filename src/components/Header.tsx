import { Search, Bell, Settings, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) {
  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      dashboard: 'Dashboard',
      inbox: 'Inbox (Unified Chat)',
      contacts: 'Contacts',
      labels: 'Labels / Segmentation',
      catalog: 'Catalog & Products',
      'multi-user': 'Multi-User Access',
      assignment: 'Chat Assignment',
      history: 'Chat History & Search',
      'quick-replies': 'Quick Replies (Templates)',
      'voice-to-text': 'Voice-to-Text',
      'auto-reply': 'Auto-Reply & Greeting',
      'away-message': 'Away Message',
      keyword: 'Keyword Automation',
      broadcast: 'Broadcast (Unlimited)',
      scheduled: 'Scheduled Broadcast',
      funnels: 'Funnels (Basic)',
      'dynamic-funnels': 'Dynamic Funnels (AI)',
      'ai-agent': 'AI Chat Agent',
      'ai-followup': 'AI Auto-Follow-Up',
      'ai-scoring': 'AI Lead Scoring',
      'ai-tag': 'AI Auto-Tag & Classification',
      'ai-mood': 'AI Mood Detection',
      'ai-routing': 'AI Smart Routing',
      'ai-invoice': 'AI Invoice Generator',
      'ai-suggestions': 'AI Suggestions for CS',
      'crm-pipeline': 'CRM Pipeline',
      deals: 'Deals / Opportunities',
      invoices: 'Invoices',
      'payment-links': 'Payment Links',
      'order-tracking': 'Order Tracking',
      heatmap: 'Customer Activity Heatmap',
      'chat-stats': 'Chat Performance Stats',
      'agent-performance': 'Agent Performance',
      sentiment: 'Sentiment Timeline',
      conversion: 'Conversion Timeline',
      'broadcast-analytics': 'Broadcast Analytics',
      'chat-to-video': 'Chat-to-Video AI',
      'predictive-delivery': 'Predictive Delivery Time',
      'multi-channel': 'Multi-Channel Merge',
      'spam-detection': 'Spam / Ghost Lead Detection',
      'business-profile': 'Business Profile',
      team: 'Team Management',
      roles: 'Roles & Permissions',
      api: 'API & Integrations',
      'automation-settings': 'Automation Settings',
      notifications: 'Notification Settings',
      billing: 'Billing & Subscription',
      documentation: 'Documentation',
      tutorials: 'Tutorials',
      support: 'Contact Support',
    };
    return titles[section] || 'Dashboard';
  };

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{getSectionTitle(currentSection)}</h1>
          <p className="text-sm text-slate-500 mt-0.5">Welcome back, here's what's happening</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2.5 w-80 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="flex items-center space-x-2">
            <button className="relative p-2.5 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="p-2.5 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings size={20} className="text-slate-600" />
            </button>

            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <button className="flex items-center space-x-3 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
