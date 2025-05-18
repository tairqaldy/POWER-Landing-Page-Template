import Image from 'next/image';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { companyFounders, companyVision, partnerLogos } from '@/lib/constants';
import { Lightbulb, Users2, CheckSquare } from 'lucide-react';

export function AboutUsSection() {
  return (
    <SectionWrapper id="about-us" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team Behind POWER</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We are passionate about transforming professional development through innovative and engaging learning experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="flex items-start">
            <Lightbulb className="h-8 w-8 text-primary mr-4 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-foreground/80">{companyVision}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users2 className="h-8 w-8 text-primary mr-4 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Foundation</h3>
              <p className="text-foreground/80">{companyFounders}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: "https://placehold.co/300x300.png", alt: "Team member 1", name: "Dr. Elara Vance", title: "Lead Learning Architect", aiHint: "professional woman" },
            { src: "https://placehold.co/300x300.png", alt: "Team member 2", name: "Marcus Chen", title: "Chief Technology Officer", aiHint: "professional man" },
            { src: "https://placehold.co/300x300.png", alt: "Team member 3", name: "Sofia Reyes", title: "Head of Client Success", aiHint: "smiling person business" },
            { src: "https://placehold.co/300x300.png", alt: "Office or team working", name: "Our Creative Space", title: "Where ideas come to life", aiHint: "modern office team" },
          ].map(member => (
            <div key={member.name} className="relative group aspect-square rounded-lg overflow-hidden shadow-md">
              <Image
                src={member.src}
                alt={member.alt}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={member.aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                <p className="text-white/80 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {partnerLogos && partnerLogos.length > 0 && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Our Partners & Accreditations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="relative h-10 w-32 opacity-70 hover:opacity-100 transition-opacity">
                 <Image
                  src={partner.url}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint={partner.aiHint}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
