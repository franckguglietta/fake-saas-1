import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 499,
    description: 'Perfect for small businesses testing the waters',
    features: [
      'Up to $5,000 ad spend/month',
      '2 advertising platforms',
      'Basic analytics dashboard',
      'Email support',
      'Monthly performance reports',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 999,
    description: 'For growing businesses ready to scale',
    features: [
      'Up to $25,000 ad spend/month',
      'All advertising platforms',
      'Advanced analytics & AI insights',
      'Priority support',
      'Weekly optimization calls',
      'Custom audience targeting',
      'A/B testing & experiments',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited ad spend',
      'All platforms + custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom reporting & dashboards',
      'White-label options',
      'API access',
      'Quarterly business reviews',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-text-secondary">
            Choose the plan that fits your business. All plans include our AI optimization engine.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              hover
              className={`relative ${
                plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs font-semibold text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-text-primary">
                        ${plan.price}
                      </span>
                      <span className="text-text-secondary">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-text-primary">Custom</div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full mb-6"
                  asChild
                >
                  <Link href="/onboarding">
                    {plan.price ? 'Get Started' : 'Contact Sales'}
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-text-tertiary text-sm mt-12">
          All prices exclude ad spend. Platform fees and ad spend are billed separately.
        </p>
      </div>
    </section>
  );
}
