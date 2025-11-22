import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart3, Zap, Shield, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Multi-Platform Management',
    description: 'Manage Google Ads, Facebook, TikTok, and LinkedIn campaigns from a single, unified dashboard.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track performance metrics, ROAS, conversions, and more with live data updates and AI-powered insights.',
  },
  {
    icon: Shield,
    title: 'AI-Powered Optimization',
    description: 'Our machine learning algorithms continuously optimize your campaigns for maximum ROI and performance.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    description: 'Get personalized support from advertising experts who understand your business goals and challenges.',
  },
];

export function Benefits() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-text-secondary">
            Powerful features designed to maximize your advertising performance and scale your business efficiently.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} hover className="group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
