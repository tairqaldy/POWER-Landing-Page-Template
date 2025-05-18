import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Find answers to common questions about POWER Business Simulation.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.id} value={`item-${index + 1}`} className="bg-background border border-border rounded-lg shadow-sm">
              <AccordionTrigger className="p-6 text-lg hover:no-underline text-left">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-3 text-primary shrink-0" />
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
