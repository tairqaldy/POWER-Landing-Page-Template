"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { handleContactRequestServerAction } from "@/app/actions"; // Name updated to be specific
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contactEmail, partnershipEmail, supportEmail } from "@/lib/constants";


const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, {message: "Subject must be at least 3 characters."}),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const initialState = {
  message: "",
  errors: {},
  success: false,
};

export function ContactSection() {
  const [state, formAction] = useFormState(handleContactRequestServerAction, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: "Error",
          description: state.message || "An error occurred while sending your message.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <SectionWrapper id="contact" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Have questions, partnership ideas, or media inquiries? We'd love to hear from you.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <Card className="shadow-xl bg-background">
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            <CardDescription>
              Use the form below or reach out via our direct contact channels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="contact-name">Full Name</Label>
                <Input id="contact-name" {...form.register("name")} placeholder="Your Name" />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
                {(state?.errors as any)?.name && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.name[0]}</p>}
              </div>

              <div>
                <Label htmlFor="contact-email">Email Address</Label>
                <Input id="contact-email" type="email" {...form.register("email")} placeholder="your.email@example.com" />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
                 {(state?.errors as any)?.email && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.email[0]}</p>}
              </div>
              
              <div>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" {...form.register("subject")} placeholder="e.g. Partnership Inquiry" />
                {form.formState.errors.subject && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>
                )}
                {(state?.errors as any)?.subject && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.subject[0]}</p>}
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  {...form.register("message")}
                  placeholder="Your detailed message..."
                  rows={5}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                )}
                {(state?.errors as any)?.message && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.message[0]}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Other Ways to Connect</h3>
            <div className="space-y-4">
                 <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-medium">General Inquiries</h4>
                        <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-medium">Partnerships</h4>
                        <a href={`mailto:${partnershipEmail}`} className="text-primary hover:underline">{partnershipEmail}</a>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-medium">Support</h4>
                        <a href={`mailto:${supportEmail}`} className="text-primary hover:underline">{supportEmail}</a>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                     <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">(123) 456-7890 (Placeholder)</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                     <div>
                        <h4 className="font-medium">Our Office</h4>
                        <p className="text-muted-foreground">123 Innovation Drive, Tech City, TX 75001 (Placeholder)</p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
