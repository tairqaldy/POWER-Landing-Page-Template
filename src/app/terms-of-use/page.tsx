import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <SectionWrapper>
          <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
          <div className="prose prose-lg max-w-none">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

            <p>Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the POWER Business Simulation website (the &quot;Service&quot;) operated by [Your Company Name] (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">1. Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">2. Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">3. Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by [Your Company Name].</p>
            <p>[Your Company Name] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that [Your Company Name] shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">4. Termination</h2>
            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">5. Limitation Of Liability</h2>
            <p>In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">7. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at legal@power-simulation.com.</p>
            <p className="mt-8"><em>This is a template Terms of Use and should be reviewed and customized by a legal professional to fit your specific circumstances.</em></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
