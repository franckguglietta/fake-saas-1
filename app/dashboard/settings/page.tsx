import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUser } from '@/lib/mock-data';
import { Link as LinkIcon, Check, X } from 'lucide-react';

export default function SettingsPage() {
  const platforms = [
    {
      name: 'Google Ads',
      icon: '🔍',
      connected: mockUser.accountsConnected.google,
      description: 'Connect your Google Ads account to manage search and display campaigns',
    },
    {
      name: 'Facebook Ads',
      icon: '📘',
      connected: mockUser.accountsConnected.facebook,
      description: 'Link your Facebook Business Manager to run social campaigns',
    },
    {
      name: 'TikTok Ads',
      icon: '🎵',
      connected: mockUser.accountsConnected.tiktok,
      description: 'Connect TikTok for Business to reach younger audiences',
    },
    {
      name: 'LinkedIn Ads',
      icon: '💼',
      connected: mockUser.accountsConnected.linkedin,
      description: 'Link LinkedIn Campaign Manager for B2B advertising',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Settings</h1>
        <p className="text-text-secondary">
          Manage your account and advertising platform connections
        </p>
      </div>

      {/* Account Info */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your Swift Social account details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-text-tertiary">Name</label>
                <p className="text-text-primary font-medium mt-1">{mockUser.name}</p>
              </div>
              <div>
                <label className="text-sm text-text-tertiary">Email</label>
                <p className="text-text-primary font-medium mt-1">{mockUser.email}</p>
              </div>
              <div>
                <label className="text-sm text-text-tertiary">Company</label>
                <p className="text-text-primary font-medium mt-1">{mockUser.company}</p>
              </div>
              <div>
                <label className="text-sm text-text-tertiary">Plan</label>
                <p className="text-text-primary font-medium mt-1">Growth Plan</p>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" size="sm">
                Edit Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connected Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>Connected Advertising Accounts</CardTitle>
          <CardDescription>
            Connect your advertising platforms to start managing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-border-light transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{platform.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-text-primary">{platform.name}</h4>
                      {platform.connected ? (
                        <div className="flex items-center gap-1 text-success text-xs">
                          <Check className="w-3 h-3" />
                          <span>Connected</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-text-tertiary text-xs">
                          <X className="w-3 h-3" />
                          <span>Not connected</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">{platform.description}</p>
                  </div>
                </div>
                <Button
                  variant={platform.connected ? 'outline' : 'primary'}
                  size="sm"
                >
                  {platform.connected ? (
                    'Disconnect'
                  ) : (
                    <>
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Connect
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: 'Campaign Performance Alerts',
                description: 'Get notified when campaigns perform above or below expectations',
              },
              {
                title: 'Budget Warnings',
                description: 'Receive alerts when approaching or exceeding budget limits',
              },
              {
                title: 'Weekly Reports',
                description: 'Get a weekly summary of your advertising performance',
              },
              {
                title: 'Optimization Suggestions',
                description: 'Receive AI-powered recommendations to improve your campaigns',
              },
            ].map((notification, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-4 rounded-lg border border-border"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary mb-1">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-text-secondary">{notification.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-elevated peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
