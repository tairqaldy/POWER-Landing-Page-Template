import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Globe, Type } from 'lucide-react';
import { socialLinks, legalLinks } from '@/lib/constants';
import { Logo } from '@/components/logo';
import { SectionWrapper } from './section-wrapper';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <SectionWrapper className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-secondary-foreground/70">
              Unlock your team's potential with POWER, the ultimate project management game for real-world skills.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors text-secondary-foreground/70">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                 <Link href="#faq" className="text-sm hover:text-primary transition-colors text-secondary-foreground/70">
                    FAQ
                  </Link>
              </li>
               <li>
                 <Link href="#contact" className="text-sm hover:text-primary transition-colors text-secondary-foreground/70">
                    Contact Us
                  </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild className="text-secondary-foreground/70 hover:text-primary">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              <p>Language: English (Placeholder)</p>
              <p>Accessibility (Placeholder Statement)</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Newsletter</h4>
            <p className="text-sm mb-2 text-secondary-foreground/70">Stay updated with POWER news and insights.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
              <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} POWER Business Simulation. All rights reserved.</p>
          <p className="mt-1">
            A product of <Link href="#" className="hover:text-primary underline">Innovative Learning Solutions Inc.</Link>
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
}
