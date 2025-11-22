import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockCampaigns } from '@/lib/mock-data';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { Plus, Play, Pause } from 'lucide-react';

export default function CampaignsPage() {
  const platformIcons: Record<string, string> = {
    google: '🔍',
    facebook: '📘',
    tiktok: '🎵',
    linkedin: '💼',
  };

  const platformNames: Record<string, string> = {
    google: 'Google Ads',
    facebook: 'Facebook Ads',
    tiktok: 'TikTok Ads',
    linkedin: 'LinkedIn Ads',
  };

  const statusColors: Record<string, 'success' | 'warning' | 'default'> = {
    active: 'success',
    paused: 'warning',
    completed: 'default',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Campaigns</h1>
          <p className="text-text-secondary">
            Manage and monitor all your advertising campaigns
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Campaigns List */}
      <div className="space-y-4">
        {mockCampaigns.map((campaign) => (
          <Card key={campaign.id} hover>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl mt-1">{platformIcons[campaign.platform]}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {campaign.name}
                      </h3>
                      <Badge variant={statusColors[campaign.status]}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {platformNames[campaign.platform]} • Started {campaign.startDate}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {campaign.status === 'active' ? (
                    <Button variant="outline" size="sm">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  )}
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-text-tertiary mb-1">Budget</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {formatCurrency(campaign.budget)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary mb-1">Spent</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {formatCurrency(campaign.spent)}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {((campaign.spent / campaign.budget) * 100).toFixed(0)}% used
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary mb-1">Impressions</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {formatNumber(campaign.impressions)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary mb-1">Conversions</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {formatNumber(campaign.conversions)}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {formatCurrency(campaign.cpc)} CPC
                  </p>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary mb-1">ROAS</p>
                  <p className="text-lg font-semibold text-success">
                    {campaign.roas.toFixed(1)}x
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                    style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
