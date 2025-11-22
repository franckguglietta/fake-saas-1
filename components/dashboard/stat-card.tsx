import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType = 'neutral', icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary mb-1">{title}</p>
            <p className="text-3xl font-bold text-text-primary">{value}</p>
            {change && (
              <p
                className={cn(
                  'text-sm mt-2 flex items-center gap-1',
                  changeType === 'positive' && 'text-success',
                  changeType === 'negative' && 'text-error',
                  changeType === 'neutral' && 'text-text-tertiary'
                )}
              >
                {change}
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
