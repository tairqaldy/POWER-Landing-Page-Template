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
import { handleDemoRequestServerAction } from "@/app/actions"; // Name updated to be specific
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Send } from "lucide-react";

const DemoRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  role: z.string().optional(),
  trainingNeeds: z.string().optional(),
});

type DemoRequestFormValues = z.infer<typeof DemoRequestSchema>;

const initialState = {
  message: "",
  errors: {},
  success: false,
};

export function DemoRequestForm({ sectionId }: { sectionId?: string }) {
  const [state, formAction] = useFormState(handleDemoRequestServerAction, initialState);
  const { toast } = useToast();

  const form = useForm<DemoRequestFormValues>({
    resolver: zodResolver(DemoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      trainingNeeds: "",
    },
  });

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: "Error",
          description: state.message || "An error occurred.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <SectionWrapper id={sectionId || "demo-request"} className="bg-secondary">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Request a Personalized Demo</CardTitle>
            <CardDescription>
              See how POWER can elevate your team. Fill out the form below, and we'll be in touch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...form.register("name")} placeholder="e.g. Jane Doe" />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
                 {(state?.errors as any)?.name && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.name[0]}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...form.register("email")} placeholder="e.g. jane.doe@example.com" />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
                {(state?.errors as any)?.email && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.email[0]}</p>}
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" {...form.register("company")} placeholder="e.g. Innovatech Ltd." />
                {form.formState.errors.company && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.company.message}</p>
                )}
                {(state?.errors as any)?.company && <p className="text-sm text-destructive mt-1">{(state?.errors as any)?.company[0]}</p>}
              </div>
              
              <div>
                <Label htmlFor="role">Your Role (Optional)</Label>
                <Input id="role" {...form.register("role")} placeholder="e.g. Project Manager, L&D Specialist" />
              </div>

              <div>
                <Label htmlFor="trainingNeeds">Specific Training Needs (Optional)</Label>
                <Textarea
                  id="trainingNeeds"
                  {...form.register("trainingNeeds")}
                  placeholder="e.g. Agile adoption, crisis management, team collaboration"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
                 {form.formState.isSubmitting ? "Sending..." : <>Send Demo Request <Send className="ml-2 h-4 w-4" /></> }
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
