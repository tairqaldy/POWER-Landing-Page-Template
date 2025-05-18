import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CheckCircle, Send, Star } from 'lucide-react';

const engagementOptions = [
  {
    title: "Free Demo",
    icon: Send,
    description: "Experience POWER firsthand with a personalized demo. See how it aligns with your team's specific training goals.",
    features: [
      "Guided tour of the platform",
      "Q&A with our experts",
      "Initial needs assessment",
    ],
    ctaText: "Request a Demo",
    ctaLink: "#demo-request",
    variant: "outline" as "outline" | "default",
  },
  {
    title: "Pilot Program",
    icon: Star,
    description: "Test POWER with a select group. A perfect way to evaluate its impact before a full-scale rollout.",
    features: [
      "Customized scenario for one team",
      "Full access for pilot participants",
      "Detailed post-pilot report & ROI analysis",
      "Dedicated support during pilot",
    ],
    ctaText: "Discuss Pilot Options",
    ctaLink: "#contact",
    variant: "default" as "outline" | "default",
  },
  {
    title: "Enterprise Solution",
    icon: CheckCircle, // Using CheckCircle as a placeholder for a more specific Enterprise icon
    description: "Tailored solutions for larger organizations seeking comprehensive project management training.",
    features: [
      "Unlimited users & teams",
      "Fully customizable scenarios & branding",
      "LMS integration & API access",
      "Premium support & dedicated account manager",
    ],
    ctaText: "Contact Sales",
    ctaLink: "#contact",
    variant: "outline" as "outline" | "default",
  },
];

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your POWER Journey</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Choose the engagement model that best suits your organization's needs. We're here to help you succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {engagementOptions.map((option) => (
          <Card key={option.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${option.variant === 'default' ? 'border-primary border-2' : ''}`}>
            <CardHeader className="items-center text-center">
               <div className={`p-3 rounded-full inline-block mb-4 ${option.variant === 'default' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                <option.icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                size="lg" 
                className={`w-full ${option.variant === 'default' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`} 
                asChild
              >
                <Link href={option.ctaLink}>{option.ctaText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <p className="text-center mt-12 text-muted-foreground">
        All options include access to our comprehensive resource center and ongoing support.
        <br /> Not sure where to start? <Link href="#contact" className="text-primary hover:underline">Contact us for a consultation.</Link>
      </p>
    </SectionWrapper>
  );
}
