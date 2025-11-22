'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Zap } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Set Your Budget',
    description: 'Define your monthly advertising budget',
  },
  {
    number: 2,
    title: 'Connect Accounts',
    description: 'Link your advertising platforms',
  },
  {
    number: 3,
    title: 'Launch Campaigns',
    description: 'Start your first campaign',
  },
];

const platforms = [
  { name: 'Google Ads', icon: '🔍', popular: true },
  { name: 'Facebook Ads', icon: '📘', popular: true },
  { name: 'TikTok Ads', icon: '🎵', popular: false },
  { name: 'LinkedIn Ads', icon: '💼', popular: false },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [budget, setBudget] = useState('5000');

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return budget && parseInt(budget) > 0;
    if (currentStep === 2) return selectedPlatforms.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-text-primary">Swift Social</span>
        </Link>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                    currentStep > step.number
                      ? 'bg-primary border-primary text-white'
                      : currentStep === step.number
                      ? 'border-primary text-primary bg-surface'
                      : 'border-border text-text-tertiary bg-surface'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-text-primary">{step.title}</p>
                  <p className="text-xs text-text-tertiary">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-0.5 mx-4 mb-16 transition-all ${
                    currentStep > step.number ? 'bg-primary' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <CardTitle className="text-2xl mb-2">Set Your Monthly Budget</CardTitle>
                  <CardDescription>
                    How much do you want to spend on advertising each month?
                  </CardDescription>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Monthly Budget (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                      $
                    </span>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="5000"
                      min="0"
                    />
                  </div>
                  <p className="text-sm text-text-tertiary mt-2">
                    This is just your advertising spend. Our platform fees are calculated separately.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {['2500', '5000', '10000'].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setBudget(amount)}
                      className={`p-4 rounded-lg border transition-colors ${
                        budget === amount
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-border-light'
                      }`}
                    >
                      <p className="text-lg font-bold text-text-primary">${amount}</p>
                      <p className="text-xs text-text-tertiary">per month</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <CardTitle className="text-2xl mb-2">Connect Your Advertising Accounts</CardTitle>
                  <CardDescription>
                    Select the platforms you want to advertise on. You can add more later.
                  </CardDescription>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => handlePlatformToggle(platform.name)}
                      className={`p-6 rounded-lg border transition-all text-left ${
                        selectedPlatforms.includes(platform.name)
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-border-light'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-3xl">{platform.icon}</div>
                        {selectedPlatforms.includes(platform.name) && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {platform.name}
                      </h3>
                      {platform.popular && (
                        <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-text-primary">Note:</strong> This is a demo environment.
                    In production, you would authenticate with each platform using OAuth.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Check className="w-10 h-10 text-white" />
                </div>

                <div>
                  <CardTitle className="text-3xl mb-4">You're All Set!</CardTitle>
                  <CardDescription className="text-lg">
                    Your Swift Social account is ready. Let's start optimizing your campaigns.
                  </CardDescription>
                </div>

                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mt-8 text-left">
                  <div className="p-4 rounded-lg bg-surface-elevated">
                    <p className="text-2xl font-bold text-text-primary mb-1">
                      ${budget}
                    </p>
                    <p className="text-sm text-text-secondary">Monthly budget</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-elevated">
                    <p className="text-2xl font-bold text-text-primary mb-1">
                      {selectedPlatforms.length}
                    </p>
                    <p className="text-sm text-text-secondary">Platforms connected</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          {currentStep > 1 && currentStep < 3 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          {currentStep < 3 ? (
            <Button
              variant="primary"
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!canProceed()}
              className="ml-auto"
            >
              Continue
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button variant="primary" className="mx-auto" asChild>
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
