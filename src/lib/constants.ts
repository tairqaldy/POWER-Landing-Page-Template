import type { LucideIcon } from 'lucide-react';
import { Award, BarChartBig, BookOpen, Briefcase, CheckCircle, ChevronRight, ClipboardList, DollarSign, Facebook, FileText, GraduationCap, HelpCircle, Library, Linkedin, ListChecks, LogIn, Mail, Megaphone, Menu, MessageSquare, Phone, Presentation, Projector, Rocket, Send, Settings2, ShoppingBag, Star, Twitter, UserCheck, Users, Users2, Workflow, X, Zap, Activity } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: '#overview', label: 'Overview' },
  { href: '#features', label: 'Features' },
  { href: '#simulation-flow', label: 'How it Works' },
  { href: '#audience', label: 'Who is it For?' },
  { href: '#ai-tool', label: 'Scenario Tool' },
  { href: '#success-stories', label: 'Success Stories' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is POWER Business Simulation?',
    answer: 'POWER is an immersive, game-based learning platform designed to enhance project management skills through realistic simulations and challenges.',
  },
  {
    id: 'faq2',
    question: 'Who is POWER for?',
    answer: 'POWER is ideal for team leads, project managers, HR/L&D professionals, corporate trainers, and any team looking to improve collaboration and decision-making.',
  },
  {
    id: 'faq3',
    question: 'How long does a typical simulation last?',
    answer: 'Simulations can be customized, typically ranging from a few hours to a full day workshop, depending on the learning objectives.',
  },
  {
    id: 'faq4',
    question: 'What are the technical requirements?',
    answer: 'POWER is a web-based platform accessible from any modern browser. No special software installation is required.',
  },
  {
    id: 'faq5',
    question: 'Can scenarios be customized?',
    answer: 'Yes, POWER offers customizable scenarios to match specific industry challenges and training needs. Use our AI Scenario Tool to get ideas!',
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logoUrl?: string;
  avatarUrl?: string;
  logoAiHint?: string;
  avatarAiHint?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: "POWER transformed how our team approaches projects. The simulation was engaging and the results were immediately applicable.",
    name: 'Jane Doe',
    role: 'Senior Project Manager',
    company: 'Innovatech Ltd.',
    logoUrl: 'https://placehold.co/150x50.png',
    avatarUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'company logo',
    avatarAiHint: 'person smiling'
  },
  {
    id: 't2',
    quote: "The AI-driven feedback and post-game analytics provided invaluable insights for individual and team development.",
    name: 'John Smith',
    role: 'L&D Director',
    company: 'Solutions Corp.',
    logoUrl: 'https://placehold.co/150x50.png',
    avatarUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'tech logo',
    avatarAiHint: 'professional person'
  },
  {
    id: 't3',
    quote: "Our teams are more aligned and efficient after using POWER. It's a must-have for any organization serious about project excellence.",
    name: 'Alice Brown',
    role: 'VP of Operations',
    company: 'Global Synergy Inc.',
    logoUrl: 'https://placehold.co/150x50.png',
    avatarUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'corporate logo',
    avatarAiHint: 'executive woman'
  },
];

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const detailedFeatures: Feature[] = [
  {
    id: 'feat1',
    icon: Zap,
    title: 'Diverse Missions & Scenarios',
    description: 'Engage with scenarios like Agile sprints, Lean transformations, crisis management, and more, tailored to various industries.',
  },
  {
    id: 'feat2',
    icon: Activity,
    title: 'Real-time Analytics',
    description: 'Track team performance and individual contributions with live dashboards and comprehensive data insights.',
  },
  {
    id: 'feat3',
    icon: Settings2,
    title: 'Customizable Experiences',
    description: 'Adjust difficulty, team sizes, project complexity, and specific learning objectives to fit your needs.',
  },
  {
    id: 'feat4',
    icon: FileText,
    title: 'Post-Game Reports',
    description: 'Receive detailed reports highlighting strengths, weaknesses, and key learning points for continuous improvement.',
  },
  {
    id: 'feat5',
    icon: UserCheck,
    title: 'Personalized Development',
    description: 'Get AI-driven recommendations for skill development based on simulation performance and individual goals.',
  },
   {
    id: 'feat6',
    icon: CheckCircle,
    title: 'Easy Adoption',
    description: 'Intuitive interface and guided onboarding ensure a smooth experience for all users, regardless of technical expertise.',
  },
];

export type TargetAudienceMember = {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
};

export const targetAudience: TargetAudienceMember[] = [
  {
    id: 'ta1',
    icon: Users,
    name: 'Team Leads',
    description: 'Empower your team with better decision-making and collaborative skills in a risk-free environment.',
  },
  {
    id: 'ta2',
    icon: Briefcase,
    name: 'HR/L&D Professionals',
    description: 'Implement cutting-edge, engaging training solutions that deliver measurable improvements in performance.',
  },
  {
    id: 'ta3',
    icon: GraduationCap,
    name: 'Corporate Trainers',
    description: 'Utilize a dynamic tool to facilitate impactful workshops and skill development sessions.',
  },
  {
    id: 'ta4',
    icon: ClipboardList,
    name: 'Project Managers',
    description: 'Hone your strategic thinking, risk management, and leadership abilities through realistic challenges.',
  },
  {
    id: 'ta5',
    icon: BarChartBig,
    name: 'Executive Sponsors',
    description: 'Invest in your talent pool to drive project success, innovation, and overall business growth.',
  },
];

export type SimulationStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const simulationSteps: SimulationStep[] = [
  { id: 'sf1', step: 1, title: 'Request Demo', description: 'Schedule a personalized demo to see POWER in action and discuss your needs.', icon: Send },
  { id: 'sf2', step: 2, title: 'Onboarding', description: 'Easy setup and guided onboarding for your team admins and participants.', icon: Users2 },
  { id: 'sf3', step: 3, title: 'Mission Launch', description: 'Start your customized simulation scenario with clear objectives and roles.', icon: Rocket },
  { id: 'sf4', step: 4, title: 'Gameplay', description: 'Collaborate, make decisions, and navigate challenges in an interactive environment.', icon: Workflow },
  { id: 'sf5', step: 5, title: 'Results & Debrief', description: 'Analyze performance with detailed reports and expert-led debrief sessions.', icon: Award },
];


export type ResourceLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'Article' | 'Whitepaper' | 'Guide' | 'Webinar';
  icon: LucideIcon;
};

export const resourceLinks: ResourceLink[] = [
  {
    id: 'res1',
    title: 'The Power of Experiential Learning in Project Management',
    description: 'Discover how hands-on simulation training accelerates skill development and improves project outcomes.',
    href: '#',
    type: 'Whitepaper',
    icon: FileText,
  },
  {
    id: 'res2',
    title: 'Gamifying PM: Engaging Teams for Better Results',
    description: 'Explore the benefits of game-based learning for boosting team morale, collaboration, and knowledge retention.',
    href: '#',
    type: 'Article',
    icon: BookOpen,
  },
  {
    id: 'res3',
    title: 'Upcoming Webinar: Mastering Agile with POWER Simulations',
    description: 'Join our experts for a live session on leveraging POWER for Agile methodology training.',
    href: '#',
    type: 'Webinar',
    icon: Projector,
  },
];


export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
];

export const contactEmail = "contact@power-simulation.com";
export const supportEmail = "support@power-simulation.com";
export const partnershipEmail = "partners@power-simulation.com";

export const companyFounders = "Founded by experts in project management and educational technology.";
export const companyVision = "Our vision is to revolutionize professional development through engaging and impactful simulation experiences.";

export const partnerLogos = [
  { name: "Partner A", url: "https://placehold.co/120x40.png", aiHint: "company logo" },
  { name: "Partner B", url: "https://placehold.co/120x40.png", aiHint: "tech logo" },
  { name: "Accreditation C", url: "https://placehold.co/120x40.png", aiHint: "badge award" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookie-notice", label: "Cookie Notice" },
];
