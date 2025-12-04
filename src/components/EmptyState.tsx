import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  section: string;
}

export default function EmptyState({ section }: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center h-[600px]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6">
          <Sparkles size={40} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          The <span className="font-semibold text-emerald-600">{section}</span> feature is currently under development.
          Stay tuned for powerful new capabilities!
        </p>
      </div>
    </div>
  );
}
