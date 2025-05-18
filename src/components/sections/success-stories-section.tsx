import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Star, Quote } from 'lucide-react';

export function SuccessStoriesSection() {
  return (
    <SectionWrapper id="success-stories" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Teams</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          See how POWER has helped organizations like yours achieve project excellence and enhance team performance.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              {testimonial.logoUrl && (
                <div className="relative h-10 mb-4">
                  <Image
                    src={testimonial.logoUrl}
                    alt={`${testimonial.company} logo`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    data-ai-hint={testimonial.logoAiHint || "company logo"}
                  />
                </div>
              )}
               <Quote className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg font-normal leading-relaxed text-foreground/90">&quot;{testimonial.quote}&quot;</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Content can be added here if needed */}
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex items-center w-full">
                {testimonial.avatarUrl && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 shrink-0">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={testimonial.avatarAiHint || "person"}
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">And many more...</h3>
        <div className="flex justify-center space-x-4 opacity-70">
            {/* Placeholder for more client logos */}
            <Image src="https://placehold.co/120x40.png" width={120} height={40} alt="Client Logo 1" data-ai-hint="company logo"/>
            <Image src="https://placehold.co/120x40.png" width={120} height={40} alt="Client Logo 2" data-ai-hint="tech logo"/>
            <Image src="https://placehold.co/120x40.png" width={120} height={40} alt="Client Logo 3" data-ai-hint="business logo"/>
        </div>
      </div>
    </SectionWrapper>
  );
}
