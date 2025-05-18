import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { targetAudience } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function TargetAudienceSection() {
  return (
    <SectionWrapper id="audience" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Benefits from POWER?</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          POWER is designed for a diverse range of professionals seeking to enhance project management capabilities and team effectiveness.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {targetAudience.map((audienceMember) => (
          <Card key={audienceMember.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <audienceMember.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">{audienceMember.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{audienceMember.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Relevant Across Industries:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {["Technology", "Healthcare", "Finance", "Manufacturing", "Consulting", "Education", "Non-profit"].map(industry => (
            <Badge key={industry} variant="secondary" className="text-sm px-3 py-1">{industry}</Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
