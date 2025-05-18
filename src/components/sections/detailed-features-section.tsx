import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { detailedFeatures } from "@/lib/constants";

export function DetailedFeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features to Elevate Your Team</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore the key functionalities that make POWER a transformative learning experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {detailedFeatures.map((feature) => (
          <Card key={feature.id} className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-3 bg-primary/10 rounded-md">
                 <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
