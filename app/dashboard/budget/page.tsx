import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUser, mockPlatformStats } from '@/lib/mock-data';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Pencil, TrendingUp, AlertCircle } from 'lucide-react';

export default function BudgetPage() {
  const totalSpent = mockUser.totalSpent;
  const monthlyBudget = mockUser.monthlyBudget;
  const remaining = monthlyBudget - totalSpent;
  const percentUsed = (totalSpent / monthlyBudget) * 100;
  const daysInMonth = 30;
  const dayOfMonth = 22;
  const dailyBurnRate = totalSpent / dayOfMonth;
  const projectedSpend = dailyBurnRate * daysInMonth;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Budget</h1>
          <p className="text-text-secondary">
            Track and manage your advertising budget
          </p>
        </div>
        <Button variant="primary">
          <Pencil className="w-4 h-4 mr-2" />
          Adjust Budget
        </Button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-text-secondary mb-2">Monthly Budget</p>
            <p className="text-3xl font-bold text-text-primary">
              {formatCurrency(monthlyBudget)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-text-secondary mb-2">Spent This Month</p>
            <p className="text-3xl font-bold text-text-primary">
              {formatCurrency(totalSpent)}
            </p>
            <p className="text-sm text-text-tertiary mt-1">
              {formatPercent(percentUsed)} of budget
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-text-secondary mb-2">Remaining</p>
            <p className="text-3xl font-bold text-success">
              {formatCurrency(remaining)}
            </p>
            <p className="text-sm text-text-tertiary mt-1">
              {formatPercent(100 - percentUsed)} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary">Current spend</span>
                <span className="text-text-primary font-semibold">
                  {formatCurrency(totalSpent)} / {formatCurrency(monthlyBudget)}
                </span>
              </div>
              <div className="h-4 bg-surface-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                  style={{ width: `${percentUsed}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-info mt-1" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Daily Burn Rate</p>
                  <p className="text-2xl font-bold text-text-primary mt-1">
                    {formatCurrency(dailyBurnRate)}
                  </p>
                  <p className="text-xs text-text-tertiary mt-1">per day average</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-warning mt-1" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Projected Month End</p>
                  <p className="text-2xl font-bold text-text-primary mt-1">
                    {formatCurrency(projectedSpend)}
                  </p>
                  <p className="text-xs text-text-tertiary mt-1">
                    {projectedSpend > monthlyBudget ? 'Over budget' : 'Within budget'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget by Platform */}
      <Card>
        <CardHeader>
          <CardTitle>Spend by Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPlatformStats.map((platform, index) => {
              const platformPercent = (platform.spent / totalSpent) * 100;
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">
                      {platform.platform}
                    </span>
                    <div className="text-right">
                      <span className="text-text-primary font-semibold">
                        {formatCurrency(platform.spent)}
                      </span>
                      <span className="text-text-tertiary text-sm ml-2">
                        ({formatPercent(platformPercent)})
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${platformPercent}%` }}
                    />
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
