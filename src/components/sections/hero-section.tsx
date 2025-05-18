import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper id="overview" className="pt-28 md:pt-32 lg:pt-40 bg-gradient-to-b from-background to-secondary/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Unlock Your Team's <span className="text-primary">Potential</span> with POWER
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
            The ultimate business simulation game designed to forge real-world project management skills and drive impactful team performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
              <Link href="#demo-request">
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg transform hover:scale-105 transition-transform border-primary text-primary hover:bg-primary/10">
              <Link href="#simulation-flow">
                <PlayCircle className="mr-2 h-5 w-5" /> See How It Works
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/hero-simulation-showcase.jpg"
              alt="POWER Business Simulation showcase"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500"
              data-ai-hint="business simulation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Experience Interactive Learning</h3>
                <p className="text-sm opacity-80">Engage, decide, and lead your project to success.</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
