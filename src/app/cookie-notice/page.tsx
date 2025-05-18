import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';

export default function CookieNoticePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <SectionWrapper>
          <h1 className="text-3xl font-bold mb-6">Cookie Notice</h1>
          <div className="prose prose-lg max-w-none">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

            <p>This Cookie Notice explains how POWER Business Simulation (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">What are cookies?</h2>
            <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Why do we use cookies?</h2>
            <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes. This is described in more detail below.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Types of cookies we use:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
              <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
              <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
              <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">How can I control cookies?</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in cookie consent banners or by managing your browser settings.</p>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Updates to this Cookie Notice</h2>
            <p>We may update this Cookie Notice from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Notice regularly to stay informed about our use of cookies and related technologies.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Where can I get further information?</h2>
            <p>If you have any questions about our use of cookies or other technologies, please email us at privacy@power-simulation.com.</p>
            
            <div className="mt-8 p-4 border border-border rounded-lg bg-secondary/50">
                <h3 className="text-xl font-semibold">Manage Your Cookie Preferences</h3>
                <p className="my-2">You can update your cookie preferences at any time.</p>
                <Button variant="outline">Cookie Settings (Placeholder)</Button>
            </div>
             <p className="mt-8"><em>This is a template Cookie Notice and should be reviewed and customized by a legal professional to fit your specific circumstances.</em></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
