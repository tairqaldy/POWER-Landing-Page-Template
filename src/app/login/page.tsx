import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20 bg-secondary">
        <SectionWrapper className="py-12">
          <Card className="w-full max-w-md mx-auto shadow-xl bg-background">
            <CardHeader className="text-center">
              <LogIn className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-3xl">Login to POWER</CardTitle>
              <CardDescription>Access your dashboard, training history, and results.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Login
                </Button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="#demo-request" className="text-primary hover:underline">
                  Request a demo
                </Link>
                {' '}or contact support.
              </p>
            </CardContent>
          </Card>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
