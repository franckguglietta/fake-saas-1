import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary">
              AI-Powered Advertising Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent leading-tight">
            Scale your business with{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
              intelligent advertising
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Swift Social manages your Google, Facebook, TikTok, and LinkedIn ads with AI optimization.
            Set your budget, and watch your ROAS soar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button variant="primary" size="lg" asChild className="group">
              <Link href="/onboarding">
                Start Growing Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/dashboard">
                <Play className="mr-2 w-5 h-5" />
                View Dashboard Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">$2.4M+</div>
              <div className="text-text-secondary">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2 flex items-center justify-center gap-1">
                4.8x
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="text-text-secondary">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">150+</div>
              <div className="text-text-secondary">Happy Clients</div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-primary/10 hover-lift">
              <div className="bg-surface-elevated p-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <div className="bg-gradient-to-br from-surface via-surface-elevated to-surface p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-text-secondary">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-text-secondary"></div>
        </div>
      </div>
    </section>
  );
}
