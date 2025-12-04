import {
  LayoutDashboard,
  Inbox,
  Users,
  Tag,
  ShoppingBag,
  UserCog,
  MessageSquare,
  History,
  MessageCircle,
  Mic,
  Zap,
  Mail,
  Clock,
  GitBranch,
  Sparkles,
  Bot,
  TrendingUp,
  Target,
  Award,
  Radar,
  ThermometerSun,
  Network,
  FileText,
  LineChart,
  BarChart3,
  Activity,
  Heart,
  TrendingDown,
  Send,
  Video,
  Truck,
  Layers,
  Shield,
  Settings,
  Building2,
  UserSquare2,
  Lock,
  Plug,
  Bell,
  CreditCard,
  BookOpen,
  GraduationCap,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Sidebar({ onNavigate, currentSection }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationSections = [
    {
      title: 'MAIN',
      items: [
        { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        { id: 'inbox', name: 'Inbox (Unified Chat)', icon: Inbox, badge: 12 },
        { id: 'contacts', name: 'Contacts', icon: Users },
        { id: 'labels', name: 'Labels / Segmentation', icon: Tag },
        { id: 'catalog', name: 'Catalog & Products', icon: ShoppingBag },
      ],
    },
    {
      title: 'CHAT MANAGEMENT',
      items: [
        { id: 'multi-user', name: 'Multi-User Access', icon: UserCog },
        { id: 'assignment', name: 'Chat Assignment', icon: MessageSquare },
        { id: 'history', name: 'Chat History & Search', icon: History },
        { id: 'quick-replies', name: 'Quick Replies (Templates)', icon: MessageCircle },
        { id: 'voice-to-text', name: 'Voice-to-Text', icon: Mic },
      ],
    },
    {
      title: 'AUTOMATION',
      items: [
        { id: 'auto-reply', name: 'Auto-Reply & Greeting', icon: Zap },
        { id: 'away-message', name: 'Away Message', icon: Mail },
        { id: 'keyword', name: 'Keyword Automation', icon: Target },
        { id: 'broadcast', name: 'Broadcast (Unlimited)', icon: Send },
        { id: 'scheduled', name: 'Scheduled Broadcast', icon: Clock },
        { id: 'funnels', name: 'Funnels (Basic)', icon: GitBranch },
        { id: 'dynamic-funnels', name: 'Dynamic Funnels (AI)', icon: Sparkles },
      ],
    },
    {
      title: 'AI FEATURES',
      items: [
        { id: 'ai-agent', name: 'AI Chat Agent', icon: Bot, badge: 'AI' },
        { id: 'ai-followup', name: 'AI Auto-Follow-Up', icon: TrendingUp },
        { id: 'ai-scoring', name: 'AI Lead Scoring (1-100)', icon: Award },
        { id: 'ai-tag', name: 'AI Auto-Tag & Classification', icon: Tag },
        { id: 'ai-mood', name: 'AI Mood Detection', icon: ThermometerSun },
        { id: 'ai-routing', name: 'AI Smart Routing', icon: Network },
        { id: 'ai-invoice', name: 'AI Invoice Generator', icon: FileText },
        { id: 'ai-suggestions', name: 'AI Suggestions for CS', icon: Sparkles },
      ],
    },
    {
      title: 'SALES & CRM',
      items: [
        { id: 'crm-pipeline', name: 'CRM Pipeline', icon: LineChart },
        { id: 'deals', name: 'Deals / Opportunities', icon: Target },
        { id: 'invoices', name: 'Invoices', icon: FileText },
        { id: 'payment-links', name: 'Payment Links', icon: CreditCard },
        { id: 'order-tracking', name: 'Order Tracking', icon: Truck },
        { id: 'heatmap', name: 'Customer Activity Heatmap', icon: Activity },
      ],
    },
    {
      title: 'ADVANCED ANALYTICS',
      items: [
        { id: 'chat-stats', name: 'Chat Performance Stats', icon: BarChart3 },
        { id: 'agent-performance', name: 'Agent Performance', icon: Award },
        { id: 'sentiment', name: 'Sentiment Timeline', icon: Heart },
        { id: 'conversion', name: 'Conversion Timeline', icon: TrendingDown },
        { id: 'broadcast-analytics', name: 'Broadcast Analytics', icon: LineChart },
      ],
    },
    {
      title: 'SUPER FEATURES',
      items: [
        { id: 'chat-to-video', name: 'Chat-to-Video AI', icon: Video, badge: 'NEW' },
        { id: 'predictive-delivery', name: 'Predictive Delivery Time', icon: Clock },
        { id: 'multi-channel', name: 'Multi-Channel Merge', icon: Layers },
        { id: 'spam-detection', name: 'Spam / Ghost Lead Detection', icon: Shield },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        { id: 'business-profile', name: 'Business Profile', icon: Building2 },
        { id: 'team', name: 'Team Management', icon: UserSquare2 },
        { id: 'roles', name: 'Roles & Permissions', icon: Lock },
        { id: 'api', name: 'API & Integrations', icon: Plug },
        { id: 'automation-settings', name: 'Automation Settings', icon: Settings },
        { id: 'notifications', name: 'Notification Settings', icon: Bell },
        { id: 'billing', name: 'Billing & Subscription', icon: CreditCard },
      ],
    },
    {
      title: 'HELP & SUPPORT',
      items: [
        { id: 'documentation', name: 'Documentation', icon: BookOpen },
        { id: 'tutorials', name: 'Tutorials', icon: GraduationCap },
        { id: 'support', name: 'Contact Support', icon: HelpCircle },
      ],
    },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-72'
      } bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen overflow-y-auto transition-all duration-300 flex flex-col border-r border-slate-700`}
    >
      <div className="p-6 border-b border-slate-700 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
              W
            </div>
            <span className="text-xl font-bold">Wcharm</span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center font-bold text-slate-900 mx-auto">
            W
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${
            isCollapsed ? 'mx-auto mt-4' : ''
          } p-1.5 hover:bg-slate-700 rounded-lg transition-colors`}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-6">
        {navigationSections.map((section, idx) => (
          <div key={idx}>
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-slate-400 mb-3 px-3">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`w-full flex items-center ${
                        isCollapsed ? 'justify-center' : 'justify-between'
                      } px-3 py-2.5 rounded-lg transition-all group ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                          : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                      title={isCollapsed ? item.name : ''}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
                        {!isCollapsed && (
                          <span className="text-sm font-medium">{item.name}</span>
                        )}
                      </div>
                      {!isCollapsed && item.badge && (
                        <span
                          className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                            item.badge === 'AI' || item.badge === 'NEW'
                              ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
                              : 'bg-emerald-500 text-white'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700 bg-slate-900">
        {!isCollapsed ? (
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Radar className="text-emerald-100" size={20} />
              <span className="font-semibold text-sm">Pro Plan</span>
            </div>
            <p className="text-xs text-emerald-50 mb-3">
              Unlock all AI features and unlimited broadcasts
            </p>
            <button className="w-full bg-white text-emerald-600 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        ) : (
          <button className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto">
            <Radar size={18} />
          </button>
        )}
      </div>
    </aside>
  );
}
