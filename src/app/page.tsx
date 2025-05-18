import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { DemoRequestForm } from '@/components/sections/demo-request-form';
import { AiScenarioTool } from '@/components/sections/ai-scenario-tool';
import { FaqSection } from '@/components/sections/faq-section';
import { SuccessStoriesSection } from '@/components/sections/success-stories-section';
import { SimulationFlowSection } from '@/components/sections/simulation-flow-section';
import { TargetAudienceSection } from '@/components/sections/target-audience-section';
import { DetailedFeaturesSection } from '@/components/sections/detailed-features-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { ResourceCenterSection } from '@/components/sections/resource-center-section';
import { AboutUsSection } from '@/components/sections/about-us-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <DetailedFeaturesSection />
        <SimulationFlowSection />
        <TargetAudienceSection />
        <AiScenarioTool />
        <SuccessStoriesSection />
        <PricingSection />
        <DemoRequestForm sectionId="demo-request"/>
        <FaqSection />
        <ResourceCenterSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
