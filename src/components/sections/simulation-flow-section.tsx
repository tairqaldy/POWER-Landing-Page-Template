import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { simulationSteps } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
import Image from 'next/image';

export function SimulationFlowSection() {
  return (
    <SectionWrapper id="simulation-flow" className="bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How POWER Works</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Our streamlined process ensures a seamless journey from initial consultation to impactful learning and measurable results.
        </p>
      </div>

      <div className="relative">
        {/* Decorative line connecting steps on larger screens */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
        <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-around -translate-y-1/2">
          {simulationSteps.map((step, index) => (
            <div key={`dot-${step.id}`} className="w-4 h-4 bg-primary rounded-full z-10"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {simulationSteps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center z-10">
              <Card className="w-full bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <step.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Visualize the Experience</h3>
        <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl group border-2 border-primary">
          <Image
            src="https://placehold.co/1280x720.png"
            alt="POWER Simulation Explainer Video Thumbnail"
            layout="fill"
            objectFit="cover"
            data-ai-hint="simulation interface graph"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-4 transition-all transform group-hover:scale-110">
              <CheckCircle className="w-12 h-12" /> {/* Using CheckCircle as a placeholder for Play icon */}
              <span className="sr-only">Play Explainer Video</span>
            </button>
          </div>
           <div className="absolute bottom-4 left-4 text-white bg-black/50 p-2 rounded">
              <p className="text-sm">Short explainer video (placeholder)</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
