'use server';

import { z } from 'zod';
// AI Scenario Suggestion is imported and used directly in its component as it's already a server function.

// Schema for Demo Request
const DemoRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().min(2, "Company name is required."),
  role: z.string().optional(),
  trainingNeeds: z.string().optional(),
});

export async function handleDemoRequestServerAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = DemoRequestSchema.safeParse(Object.fromEntries(formData.entries()));
    
    if (!validatedFields.success) {
      return {
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }
    
    // Simulate processing data (e.g., send email, save to DB)
    console.log("Demo Request Received:", validatedFields.data);
    // In a real app, you would integrate with CRM, send notifications, etc.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { message: "Thank you! Your demo request has been submitted successfully. We'll be in touch shortly.", success: true, errors: {} };
  } catch (error) {
    console.error("Demo Request Error:", error);
    return { message: "An unexpected error occurred. Please try again later.", success: false, errors: {} };
  }
}

// Schema for Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function handleContactRequestServerAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = ContactFormSchema.safeParse(Object.fromEntries(formData.entries()));
    
    if (!validatedFields.success) {
      return {
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }
    
    // Simulate processing data
    console.log("Contact Request Received:", validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { message: "Thank you for your message! We've received it and will get back to you soon.", success: true, errors: {} };
  } catch (error) {
    console.error("Contact Request Error:", error);
    return { message: "An unexpected error occurred. Please try again later.", success: false, errors: {} };
  }
}
