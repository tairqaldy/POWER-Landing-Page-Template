import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <SectionWrapper>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p>Welcome to POWER Business Simulation (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@power-simulation.com.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">1. INFORMATION WE COLLECT</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Company Name, Job Title, Phone Number (optional), and any other information you choose to provide.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">2. HOW WE USE YOUR INFORMATION</h2>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul className="list-disc pl-6">
              <li>To facilitate account creation and logon process.</li>
              <li>To post testimonials.</li>
              <li>Request feedback.</li>
              <li>To enable user-to-user communications.</li>
              <li>To manage user accounts.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To respond to legal requests and prevent harm.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">4. COOKIES AND OTHER TRACKING TECHNOLOGIES</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-3">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">7. YOUR PRIVACY RIGHTS</h2>
            <p>In some regions (like the European Economic Area and the United Kingdom), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">8. UPDATES TO THIS NOTICE</h2>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p>If you have questions or comments about this notice, you may email us at privacy@power-simulation.com or by post to: [Your Company Address - Placeholder]</p>
            <p className="mt-8"><em>This is a template Privacy Policy and should be reviewed and customized by a legal professional to fit your specific circumstances.</em></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
