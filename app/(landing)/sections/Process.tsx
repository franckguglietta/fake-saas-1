import { Wallet, Link as LinkIcon, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Wallet,
    title: 'Set Your Budget',
    description: 'Define your monthly advertising budget and business goals. Our AI will optimize spending across platforms.',
  },
  {
    number: '02',
    icon: LinkIcon,
    title: 'Connect Accounts',
    description: 'Securely link your Google, Facebook, TikTok, and LinkedIn advertising accounts in just a few clicks.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch Campaigns',
    description: 'Our team creates and launches optimized campaigns tailored to your target audience and objectives.',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Track & Optimize',
    description: 'Monitor real-time performance, receive insights, and watch as AI continuously improves your ROAS.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="text-xl text-text-secondary">
            Get started in minutes and see results in days. Our streamlined process makes advertising simple.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -ml-4"></div>
                  )}

                  <div className="relative">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-mono font-bold text-white text-sm z-10">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
