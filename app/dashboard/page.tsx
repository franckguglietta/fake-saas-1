import { StatCard } from '@/components/dashboard/stat-card';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockCampaigns, mockUser } from '@/lib/mock-data';
import { formatCurrency, formatNumber, formatPercent } from '@/lib/utils';
import { DollarSign, TrendingUp, MousePointerClick, Target, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Calculate aggregate stats
  const totalSpent = mockUser.totalSpent;
  const activeCampaigns = mockCampaigns.filter((c) => c.status === 'active').length;
  const totalConversions = mockCampaigns.reduce((sum, c) => sum + c.conversions, 0);
  const avgROAS = mockCampaigns.reduce((sum, c) => sum + c.roas, 0) / mockCampaigns.length;

  const platformIcons: Record<string, string> = {
    google: '🔍',
    facebook: '📘',
    tiktok: '🎵',
    linkedin: '💼',
  };

  const statusColors: Record<string, 'success' | 'warning' | 'default'> = {
    active: 'success',
    paused: 'warning',
    completed: 'default',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Welcome back, {mockUser.name.split(' ')[0]}!
        </h1>
        <p className="text-text-secondary">
          Here's what's happening with your campaigns today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Spent"
          value={formatCurrency(totalSpent)}
          change="↑ 12% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <StatCard
          title="Average ROAS"
          value={avgROAS.toFixed(1) + 'x'}
          change="↑ 0.3x from last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <StatCard
          title="Total Conversions"
          value={formatNumber(totalConversions)}
          change="↑ 23% from last month"
          changeType="positive"
          icon={MousePointerClick}
        />
        <StatCard
          title="Active Campaigns"
          value={activeCampaigns.toString()}
          change={`${mockCampaigns.length - activeCampaigns} paused`}
          changeType="neutral"
          icon={Target}
        />
      </div>

      {/* Budget Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary">
                  {formatCurrency(totalSpent)} of {formatCurrency(mockUser.monthlyBudget)}
                </span>
                <span className="text-text-primary font-semibold">
                  {formatPercent((totalSpent / mockUser.monthlyBudget) * 100)}
                </span>
              </div>
              <div className="h-3 bg-surface-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                  style={{ width: `${(totalSpent / mockUser.monthlyBudget) * 100}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-text-tertiary">
              {formatCurrency(mockUser.monthlyBudget - totalSpent)} remaining this month
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Campaigns</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/campaigns">
              View all
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCampaigns.slice(0, 5).map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-border-light transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl">{platformIcons[campaign.platform]}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-text-primary">{campaign.name}</h3>
                      <Badge variant={statusColors[campaign.status]}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {formatCurrency(campaign.spent)} spent • {formatNumber(campaign.conversions)} conversions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-text-primary">
                    {campaign.roas.toFixed(1)}x
                  </p>
                  <p className="text-xs text-text-tertiary">ROAS</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover className="group cursor-pointer" asChild>
          <Link href="/dashboard/campaigns">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Manage Campaigns
                  </h3>
                  <p className="text-text-secondary text-sm">
                    View and optimize your ad campaigns
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card hover className="group cursor-pointer" asChild>
          <Link href="/dashboard/objectives">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Set Objectives
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Define your advertising goals
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}
