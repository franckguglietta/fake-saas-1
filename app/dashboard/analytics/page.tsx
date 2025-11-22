import { StatCard } from '@/components/dashboard/stat-card';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { mockPlatformStats, mockPerformanceData } from '@/lib/mock-data';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { DollarSign, MousePointerClick, TrendingUp, Eye } from 'lucide-react';

export default function AnalyticsPage() {
  // Calculate totals
  const totalSpent = mockPlatformStats.reduce((sum, p) => sum + p.spent, 0);
  const totalConversions = mockPlatformStats.reduce((sum, p) => sum + p.conversions, 0);
  const totalImpressions = 2952832; // From mock data
  const avgCPC = 0.28;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Analytics</h1>
        <p className="text-text-secondary">
          Deep dive into your advertising performance metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Ad Spend"
          value={formatCurrency(totalSpent)}
          change="↑ 15% vs last period"
          changeType="positive"
          icon={DollarSign}
        />
        <StatCard
          title="Total Conversions"
          value={formatNumber(totalConversions)}
          change="↑ 28% vs last period"
          changeType="positive"
          icon={MousePointerClick}
        />
        <StatCard
          title="Total Impressions"
          value={formatNumber(totalImpressions)}
          change="↑ 42% vs last period"
          changeType="positive"
          icon={Eye}
        />
        <StatCard
          title="Average CPC"
          value={`$${avgCPC.toFixed(2)}`}
          change="↓ $0.04 vs last period"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Performance Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPerformanceData.map((data, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-surface-elevated">
                <div className="flex-1">
                  <p className="text-sm text-text-secondary mb-1">{data.date}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-text-tertiary">Spent</p>
                      <p className="text-lg font-semibold text-text-primary">
                        {formatCurrency(data.spent)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary">Conversions</p>
                      <p className="text-lg font-semibold text-text-primary">
                        {formatNumber(data.conversions)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary">ROAS</p>
                      <p className="text-lg font-semibold text-success">
                        {data.roas.toFixed(1)}x
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Performance by Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPlatformStats.map((platform, index) => {
              const roas = (platform.conversions * 50) / platform.spent; // Assuming $50 per conversion
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-2">
                      {platform.platform}
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-text-tertiary">Spent</p>
                        <p className="text-sm font-semibold text-text-primary">
                          {formatCurrency(platform.spent)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">Conversions</p>
                        <p className="text-sm font-semibold text-text-primary">
                          {formatNumber(platform.conversions)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">Campaigns</p>
                        <p className="text-sm font-semibold text-text-primary">
                          {platform.campaigns}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">ROAS</p>
                        <p className="text-sm font-semibold text-success">
                          {roas.toFixed(1)}x
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
