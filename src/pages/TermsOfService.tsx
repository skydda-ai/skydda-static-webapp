import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground p-6 relative overflow-hidden">
        {/* Background decoration */}
        {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
        </div> */}

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs tracking-[0.2em] uppercase">
                Return to Home
              </span>
            </Link>

            <h1 className="headline-serif text-5xl md:text-7xl mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground pb-3 tracking-wide">
              Last updated: April 27, 2026
            </p>

            <div className="mb-6 overflow-hidden border border-[#56565680] rounded-sm">
              <table className="w-full text-sm">
                <tbody className="border-[#56565680]">
                  <tr className="border-b border-[#56565680]">
                    <td className="headline-serif px-4 py-3 w-40 border-r border-[#56565680] italic">Entity</td>
                    <td className="px-4 py-3 text-foreground/90">Skydda Inc.</td>
                  </tr>
                  <tr className="border-b border-[#56565680]">
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Website</td>
                    <td className="px-4 py-3 text-foreground/90">skydda.ai and all related subdomains</td>
                  </tr>
                  <tr className="border-b border-[#56565680]">
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Version</td>
                    <td className="px-4 py-3 text-foreground/90">1.0</td>
                  </tr>
                  <tr className="border-b border-[#56565680]">
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Effective Date</td>
                    <td className="px-4 py-3 text-foreground/90">April 27, 2026</td>
                  </tr>
                  <tr className="border-b border-[#56565680]">
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Review Cycle</td>
                    <td className="px-4 py-3 text-foreground/90">Annual or upon material change</td>
                  </tr>
                  <tr>
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Approved By</td>
                    <td className="px-4 py-3 text-foreground/90">Co-Founder and VP of Growth; General Counsel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6 space-y-4 text-foreground/80 leading-relaxed font-light">
              <p className="headline-sans text-body1">
                These Website Terms of Service (the "Terms") govern your access to and use of the website located at{" "}
                <span className="font-bold">skydda.ai</span> and any related subdomains (collectively, the "Site") and
                the cybersecurity and automation services operated by{" "}
                <span className="font-bold">Skydda Inc.</span> ("Skydda," "we," "us," or "our").
              </p>
              <p className="headline-sans text-body1">
                By accessing or using the Site or Services, you agree to be bound by these Terms and our Privacy Policy,
                which is incorporated herein by reference. If you do not agree to these Terms, you must immediately stop
                using the Site. Use of the Skydda platform or products is subject to a separate agreement or order form
                between Skydda and the applicable customer organization.
              </p>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed font-light">
              {/* Acceptance */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>
                    By visiting our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use the Site. Users of the Skydda Platform must
                    affirmatively acknowledge acceptance of these Terms via a mandatory checkbox acknowledgment presented
                    at the point of registration.
                  </p>
                  <p>
                    By checking the acceptance box and proceeding, you confirm that:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>You are at least 18 years of age and have the legal capacity to enter into binding agreements</li>
                    <li>If acting on behalf of an organization, you have authority to bind that organization to these Terms</li>
                    <li>You will use the Site and Services in compliance with all applicable laws, rules, and regulations</li>
                    <li>All information you provide is accurate, current, and complete</li>
                    <li>You have read and understood the Skydda Privacy Policy</li>
                  </ul>
                </div>
              </section>

              {/* Public Availability */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  2. Public Availability of Terms
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>
                    These Terms are maintained as a publicly accessible document at skydda.ai/terms. The Terms are:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Accessible to all visitors without requiring login or registration</li>
                    <li>Linked from the Site footer on all pages</li>
                    <li>Presented to users at the point of registration prior to account creation</li>
                    <li>Re-presented and re-acceptance required upon any material update</li>
                  </ul>
                </div>
              </section>

              {/* License & Intellectual Property */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  3. License & Intellectual Property
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>
                    All content on the Site, including text, graphics, logos, software, and documentation ("Content"), is
                    owned by or licensed to Skydda and is protected by applicable intellectual property laws. Skydda grants
                    you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for your
                    personal or internal business evaluation purposes only.
                  </p>
                  <p>
                    You may not copy, modify, distribute, sell, or create derivative works from Site Content without
                    Skydda’s prior written consent. All trademarks, service marks, and trade names appearing on the Site
                    are the exclusive property of Skydda or their respective owners.
                  </p>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  4. Prohibited Uses
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>You agree not to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Use the Site in any manner that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to Skydda systems, networks, or user accounts</li>
                    <li>Use automated tools (bots, scrapers, spiders) to harvest data from the Site</li>
                    <li>Transmit malware, spam, harmful code, or unauthorized materials</li>
                    <li>Reverse engineer, decompile, or disassemble any portion of the Site or Services</li>
                    <li>Resell, sublicense, or distribute Site Content or Services for commercial purposes without authorization</li>
                    <li>Interfere with or disrupt the integrity or performance of the Site or its underlying infrastructure</li>
                    <li>Impersonate any person or misrepresent your affiliation with any entity</li>
                    <li>Use the Site to collect personally identifiable information about other users without consent</li>
                  </ul>
                </div>
              </section>

              {/* User Submissions */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  5. User Submissions
                </h2>
                <p className="headline-sans text-body1">
                  By submitting content through the Site (e.g., contact forms, demo requests, feedback), you grant Skydda
                  a worldwide, royalty-free, perpetual license to use such content for the purposes of operating the Site,
                  responding to your inquiry, and improving our services. You represent that your submission does not
                  infringe any third-party rights and does not contain confidential information you are not authorized to
                  share.
                </p>
              </section>

              {/* AI-Generated Content */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  6. AI-Generated Content
                </h2>
                <p className="headline-sans text-body1">
                  Portions of the Site or Services may include content generated or summarized by artificial intelligence.
                  Such content is provided for informational purposes only and does not constitute legal, security,
                  compliance, or professional advice. Skydda disclaims all liability for inaccuracies in AI-generated
                  content. You are responsible for independently verifying any information before acting on it.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  7. Third-Party Links & Services
                </h2>
                <p className="headline-sans">
                  The Site may contain links to third-party websites. Skydda does not control and is not responsible for the
                  content, accuracy, or privacy practices of any third-party site. Inclusion of a link does not imply
                  endorsement. We recommend reviewing the terms and privacy policies of any third-party site you visit.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  8. Disclaimers
                </h2>
                <p className="uppercase headline-sans text-body1">
                  THE SITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  OR NON-INFRINGEMENT. SKYDDA DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF
                  HARMFUL COMPONENTS. USE OF THE SITE IS AT YOUR OWN RISK.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  9. Limitation of Liability
                </h2>
                <p className="uppercase headline-sans text-body1">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SKYDDA AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND
                  AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
                  ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE. SKYDDA’S TOTAL AGGREGATE LIABILITY ARISING
                  FROM YOUR USE OF THE SITE SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100).
                </p>
              </section>

              {/* Indemnification */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  10. Indemnification
                </h2>
                <p className="headline-sans text-body1">
                  You agree to indemnify, defend, and hold harmless Skydda and its affiliates, officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses
                  (including reasonable attorneys' fees) arising from: (a) your breach of these Terms; (b) your use of or
                  inability to use the Site; (c) your violation of any applicable law or regulation; or (d) your
                  infringement of any right of any third party.
                </p>
              </section>

              {/* Changes & Contact */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  11. Changes to These Terms
                </h2>
                <p className="headline-sans text-body1">
                  Skydda may modify these Terms at any time. We will post the revised Terms on the Site and update the
                  “Last Updated” date. For material changes, registered users will be notified via email and required to
                  re-accept the updated Terms prior to continued access. Your continued use of the Site after posting of
                  non-material revisions constitutes acceptance.
                </p>
              </section>

              {/* Data Privacy */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  12. Data Privacy
                </h2>
                <p className="headline-sans text-body1">
                  Your use of the Site is also governed by Skydda’s Privacy Policy, available at{" "}
                  <span className="font-bold">skydda.ai/privacy</span>. The Privacy Policy explains how Skydda collects,
                  uses, and protects your personal data and is incorporated into these Terms by reference. By accepting
                  these Terms, you acknowledge that you have read and understood the Privacy Policy.
                </p>
              </section>

              {/* Governing Law */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  13. Governing Law & Dispute Resolution
                </h2>
                <p className="headline-sans text-body1">
                  These Terms are governed by the laws of the State of Washington, without regard to its
                  conflict-of-law principles. Any dispute arising out of or relating to these Terms or the Site shall be
                  resolved through binding arbitration or, where arbitration is not available, in a court of competent
                  jurisdiction in the State of Washington. Both parties consent to personal jurisdiction in the applicable
                  forum.
                </p>
              </section>

              {/* General Provisions */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  14. General Provisions
                </h2>
                <p className="headline-sans">
                  These Terms, together with the Privacy Policy, constitute the entire agreement between you and Skydda
                  concerning your use of the Site and supersede all prior agreements. If any provision is found
                  unenforceable, the remaining provisions remain in full force. Skydda's failure to enforce any right is
                  not a waiver of that right. You may not assign these Terms without Skydda’s prior written consent.
                </p>
              </section>

              {/* Contact */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  15. Contact
                </h2>
                <p className="headline-sans text-body1">Questions regarding these Terms should be directed to:</p>
                <div className="overflow-hidden border border-[#56565680] rounded-sm max-w-2xl text-foreground/90">
                  <table className="w-full text-sm font-light border-[#56565680]">
                    <tbody className="border-[#56565680]">
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 w-40 border-r border-[#56565680] italic">Entity</td>
                        <td className="px-4 py-3">Skydda Inc.</td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Email</td>
                        <td className="px-4 py-3">
                          <a href="mailto:privacy@skydda.ai" className="text-primary/80 hover:text-primary transition-colors">
                            privacy@skydda.ai
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Website</td>
                        <td className="px-4 py-3">skydda.ai</td>
                      </tr>
                      <tr>
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Response Time</td>
                        <td className="px-4 py-3">Within timeframes required by applicable law</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Approvals */}
              <section className="flex flex-col gap-4 pt-8 border-t border-border/30">
                <h2 className="section-header">
                  Approvals
                </h2>
                <p className="headline-sans">
                  These Terms of Service have been reviewed and approved by the following members of Skydda Inc. leadership:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans">
                  <li>Co-Founder and VP of Growth</li>
                  <li>General Counsel</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
