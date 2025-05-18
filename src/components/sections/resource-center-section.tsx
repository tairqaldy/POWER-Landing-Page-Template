import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { resourceLinks } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function ResourceCenterSection() {
  return (
    <SectionWrapper id="resources" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Hub</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore articles, whitepapers, and guides to deepen your understanding of project management, experiential learning, and simulation benefits.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourceLinks.map((resource) => (
          <Card key={resource.id} className="flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <resource.icon className="h-6 w-6 text-primary mr-3" />
                <span className="text-xs uppercase font-semibold text-primary tracking-wider">{resource.type}</span>
              </div>
              <CardTitle className="text-xl hover:text-primary transition-colors">
                <Link href={resource.href}>{resource.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardContent>
               <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href={resource.href}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
         <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Explore All Resources
        </Button>
      </div>
    </SectionWrapper>
  );
}
