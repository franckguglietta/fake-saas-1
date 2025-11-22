import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { CTA } from './sections/CTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}
