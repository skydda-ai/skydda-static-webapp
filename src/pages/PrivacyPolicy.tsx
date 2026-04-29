import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground p-6 relative overflow-hidden">
        {/* Background decoration */}
        {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
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
              Privacy Policy
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
                    <td className="px-4 py-3 text-foreground/90">skydda.ai</td>
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
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Contact</td>
                    <td className="px-4 py-3 text-foreground/90"><a href="mailto:privacy@skydda.ai" className="text-primary/80 hover:text-primary transition-colors">
                      privacy@skydda.ai
                    </a></td>
                  </tr>
                  <tr>
                    <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Governing Law</td>
                    <td className="px-4 py-3 text-foreground/90">State of Washington, United States</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed font-light">

              {/* Introduction */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  1. Introduction
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>
                    Skydda Inc. (“Skydda,” “we,” “us,” or “our”) provides cybersecurity and automation tools designed to help
                    organizations protect their digital environments. We understand that you care about your personal privacy,
                    and we take that seriously.
                  </p>
                  <p>
                    This Privacy Policy describes Skydda’s policies and practices regarding the collection and use of your
                    personal data, and sets forth your privacy rights. We recognize that information privacy is an ongoing
                    responsibility and we will update this Privacy Policy from time to time as we undertake new personal data
                    practices or adopt new privacy policies. The most current version will always be posted at skydda.ai/privacy.
                  </p>
                </div>

                <h2 className="section-header">
                  Data Controller vs. Processor
                </h2>
                <p className="headline-sans">
                  Skydda acts as the data controller for personal data of website visitors, business contacts, and job
                  candidates. When we process data on behalf of our customers through the Skydda platform (the “Platform”),
                  we act as a data processor. Processing of customer data is governed by the applicable customer agreement
                  and/or Data Processing Addendum, not this Privacy Policy.
                </p>
              </section>

              {/* Privacy Contact */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  2. Privacy Contact
                </h2>
                <p className="headline-sans text-body1">
                  Skydda is headquartered in the United States. If you have any questions, concerns, or requests regarding
                  this Privacy Policy or your personal data, please contact our Privacy Officer:
                </p>

                <div className="overflow-hidden border border-[#56565680] rounded-sm">
                  <table className="w-full text-sm">
                    <tbody className="border-[#56565680]">
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif font-bold px-4 py-3 w-32 border-r border-[#56565680] italic">Role</td>
                        <td className="px-4 py-3 text-foreground/90">Privacy Officer</td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif font-bold px-4 py-3 border-r border-[#56565680] italic">Entity</td>
                        <td className="px-4 py-3 text-foreground/90">Skydda Inc.</td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif font-bold px-4 py-3 border-r border-[#56565680] italic">Email</td>
                        <td className="px-4 py-3 text-foreground/90">
                          <a href="mailto:privacy@skydda.ai" className="text-primary/80 hover:text-primary underline transition-colors">
                            privacy@skydda.ai
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="headline-serif font-bold px-4 py-3 border-r border-[#56565680] italic">Website</td>
                        <td className="px-4 py-3 text-foreground/90">skydda.ai</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* What Data We Collect */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  3. What Data We Collect
                </h2>
                <p className="headline-sans text-body1">
                  We collect both personal data (information that identifies you) and non-personal data (information that does not identify you on its own). This generally includes:
                </p>

                <div className="space-y-6 ml-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold headline-sans text-body1">Contact & Account Information</h3>
                    <ul className="list-disc ml-6 headline-sans text-body1">
                      <li>Name and company name</li>
                      <li>Work email address (used as the primary account identifier)</li>
                      <li>Phone number (non-mandatory)</li>
                      <li>Job title</li>
                      <li>Account credentials (passwords stored in hashed form only)</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold headline-sans text-body1">Device & Usage Data</h3>
                    <ul className="list-disc ml-6 headline-sans text-body1">
                      <li>IP address and general location (region/city level)</li>
                      <li>Browser type and version, operating system</li>
                      <li>Pages visited, referring/exit URLs, and date/time stamps</li>
                      <li>Interaction data with our website and platform features</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold headline-sans text-body1">Demographic & Preference Data</h3>
                    <ul className="list-disc ml-6 headline-sans text-body1">
                      <li>Interests, product preferences, and communication preferences</li>
                      <li>Survey responses or feedback you voluntarily provide</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold headline-sans text-body1">Cookie & Tracking Data</h3>
                    <ul className="list-disc ml-6 headline-sans text-body1">
                      <li>Small text files and similar technologies that collect standard internet log information and visitor behavior data</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 headline-sans text-body1">
                  We do not knowingly collect sensitive personal data such as government identification numbers, health data,
                  precise geolocation, racial or ethnic origin, religious beliefs, or financial account information. If you
                  believe we have inadvertently collected sensitive data, please contact us at privacy@skydda.ai so we can delete it.
                </p>
              </section>

              {/* How We Collect Data */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  4. How We Collect Data
                </h2>
                <p className="headline-sans text-body1">
                  We collect information in the following ways:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Data you provide directly:</span> When you request information about our products, sign up for newsletters,
                    download resources, register for an account, or communicate with us via email, phone, or other channels.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Automatic collection:</span> We automatically gather certain device and usage data when you visit our site
                    through cookies, log files, and similar technologies.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Third-party sources:</span> We may receive additional information about you from third-party platforms
                    (e.g., LinkedIn) or business intelligence and data enrichment providers. Where we receive data from third-party sources,
                    we rely on the third party’s confirmation that the data was collected in accordance with applicable law.
                  </li>
                </ul>
              </section>

              {/* Use of Information */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  5. How We Use Your Information
                </h2>
                <p className="headline-sans text-body1">
                  We use personal data only where we have a lawful basis. Depending on how you interact with Skydda, we may use your data to:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Provide and operate our services:</span> communicate about your requests, deliver demo accounts,
                    manage customer relationships, and provide technical support
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Improve our website and services:</span> analyze usage and performance data to understand how
                    visitors use our website, improve user experience, and develop new features
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Send marketing and promotional materials:</span> with your consent, send newsletters or information
                    about new features or events. You can withdraw consent or opt out at any time
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Comply with legal obligations:</span> fulfill contracts, respond to lawful requests, enforce our rights, and
                    protect users
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Detect and prevent fraud:</span> identify and prevent fraudulent or illegal activity, investigate violations,
                    and enforce our policies
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  We do not sell your personal information. We may share information only in the limited circumstances described in Section 8.
                </p>
              </section>

              {/* Cookies */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  6. Cookies & Tracking Technologies
                </h2>
                <p className="headline-sans text-body1">
                  Cookies are small text files placed on your device when you visit a website. They help the site remember
                  your preferences and improve functionality. Our website uses both first-party cookies (set by Skydda) and
                  third-party cookies (set by analytics providers) for the following purposes:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Strictly Necessary Cookies:</span> Essential for the operation of the website and platform,
                    including authentication and security. These cannot be disabled.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Functionality Cookies:</span> Allow us to remember your preferences (e.g., language, region) and
                    provide enhanced features.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Analytics & Performance Cookies:</span> Help us understand how visitors interact with our
                    website. We may use third-party analytics tools such as Google Analytics.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Advertising Cookies:</span> Used to deliver relevant advertisements and measure the
                    effectiveness of our marketing campaigns.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  Before placing non-essential cookies, we ask for your consent via a cookie consent banner. You can adjust
                  cookie settings in your browser at any time. We honor Global Privacy Control (GPC) signals — where a valid
                  GPC signal is detected, we treat it as a request to opt out of the sale or sharing of personal information and
                  will disable analytics and advertising cookies accordingly. Disabling certain cookies may affect the
                  functionality of our services.
                </p>
              </section>

              {/* Platform Use */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  7. Use of the Skydda Platform
                </h2>
                <p className="headline-sans text-body1">
                  When customers use the Platform, we may collect and process additional categories of data to deliver
                  services. Processing of customer data through the Platform is governed by the applicable Customer
                  Agreement and/or Data Processing Addendum. This section provides a general overview:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Security Telemetry & Log Data:</span> Metadata, configurations, security events, alerts, and log
                    records ingested or analyzed through the Platform on behalf of customers.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Cloud Environment Configuration:</span> Metadata about cloud infrastructure settings, access
                    permissions, and resource configurations. We collect configuration metadata — not the
                    underlying data stored in your cloud environment.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">User & Access Metadata:</span> User roles, access permissions, associated email addresses, and
                    account configurations needed to deliver security analysis.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Integration Credentials:</span> API tokens and OAuth credentials required to connect the Platform
                    with third-party tools. These are stored encrypted at rest using AES-256.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  Customer data processed through the Platform is used solely to deliver services to the applicable customer.
                  We do not use customer data for marketing, advertising, or any purpose unrelated to service delivery
                  without explicit authorization.
                </p>
              </section>

              {/* AI */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  8. Use of Artificial Intelligence
                </h2>
                <p className="headline-sans text-body1">
                  Skydda uses artificial intelligence and automation technologies to enhance our services, including threat
                  detection, workflow automation, alert triage, and generation of actionable security insights. Our approach to
                  AI and data:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">No Training on Customer Data:</span> We do not use customer data to train general-purpose AI
                    or machine learning models. Customer data is processed solely to deliver services to the applicable customer.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Third-Party AI Providers:</span> Where we use third-party AI providers, we maintain strict
                    contractual safeguards including data isolation and prohibitions on using customer data for model training.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Data Isolation:</span> AI processing for each customer is segregated using unique tenant identifiers
                    and access controls. One customer’s data is never used to generate insights for another customer.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Human Oversight:</span> AI-generated outputs are designed to augment human analysts.
                    Customers retain full control over how AI-assisted recommendations are actioned.
                  </li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  9. When & How We Share Information
                </h2>
                <p className="headline-sans text-body1">
                  We do not sell personal data to third parties. We may share personal data only in the following limited
                  circumstances:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Service providers and business partners:</span> companies that help us operate our website and deliver
                    services (e.g., hosting providers, CRM platforms, email service providers). These providers
                    process personal data only under our instructions and are required to implement appropriate
                    safeguards.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Legal and compliance purposes:</span> when required by law, regulation, or legal process, or when
                    disclosure is necessary to protect our rights, your safety, or the safety of others.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Business transfers:</span> if Skydda undergoes a merger, acquisition, or sale of assets, user data may
                    be transferred to the acquiring entity. Any new owner will use the data only for the purposes
                    described in this policy.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">With your consent:</span> in any other circumstance where you have provided explicit authorization.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  In limited circumstances we may disclose aggregated, anonymized, or de-identified information that cannot
                  reasonably be used to identify you to our partners for analytics or benchmarking purposes.
                </p>
              </section>

              {/* International Transfers */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  10. International Transfers
                </h2>
                <p className="headline-sans text-body1">
                  Skydda is headquartered in the United States. If you are located outside of the United States, please be
                  aware that information you provide to us will be transferred to and processed in the United States, which
                  may have data protection laws that differ from those in your jurisdiction.
                </p>
                <p className="headline-sans text-body1">
                  Where we transfer personal data from the European Economic Area (EEA), United Kingdom (UK), or
                  Switzerland to the United States, we implement appropriate safeguards including:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1  ">
                  <li>
                    <span className="font-bold headline-sans text-body1">Standard Contractual Clauses (SCCs)</span> approved by the European Commission and/or the UK
                    International Data Transfer Addendum
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Data processing agreements</span> with vendors and sub-processors that include equivalent contractual
                    protections
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Technical measures</span> including encryption of data in transit (TLS 1.2/1.3) and at rest (AES-256),
                    role-based access controls, and continuous security monitoring
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  For more information about our international transfer practices or to request a copy of relevant Standard
                  Contractual Clauses, please contact us at privacy@skydda.ai.
                </p>
              </section>

              {/* Security */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  11. Data Security
                </h2>
                <p className="headline-sans text-body1">
                  Skydda implements technical and organizational measures designed to protect personal data from
                  unauthorized access, loss, misuse, or alteration. Our security measures include:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>Encryption of data in transit (TLS 1.2/1.3) and at rest (AES-256)</li>
                  <li>Role-based access controls and the principle of least privilege</li>
                  <li>Multi-factor authentication for internal systems and customer accounts</li>
                  <li>Regular vulnerability scanning and third-party penetration testing</li>
                  <li>Employee security awareness training</li>
                  <li>Incident response procedures and continuous security monitoring</li>
                </ul>
                <p className="headline-sans text-body1">
                  No method of transmission over the internet or electronic storage is 100% secure. While we work hard to
                  protect your data, we cannot guarantee absolute security. In the event of a security incident involving
                  your personal data, we will notify affected individuals and relevant authorities as required by applicable law.
                </p>
              </section>

              {/* Retention */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  12. Data Retention
                </h2>
                <p className="headline-sans text-body1">
                  We retain personal data only as long as necessary to fulfill the purposes described in this policy and to
                  comply with legal, tax, or regulatory obligations. Our retention schedule is as follows:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Customer Data:</span> For the duration of the customer relationship and 90 days post-termination,
                    unless otherwise specified in the Customer Agreement.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Service & Support Data:</span> Three (3) years after last interaction.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Prospect & Marketing Data:</span> Three (3) years after last contact or until opt-out is requested.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Job Applicant Data:</span> Two (2) years after the conclusion of the recruitment process, except
                    where longer retention is required by law.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  All personal data that Skydda controls may be deleted upon verified request from data subjects, subject to
                  legal retention obligations and legitimate business needs (e.g., financial recordkeeping, litigation holds).
                </p>
              </section>

              {/* Rights */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  13. Your Privacy Rights
                </h2>
                <p className="headline-sans text-body1">
                  Depending on your location and applicable data protection laws, you may have the following rights:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Be Informed:</span> You have the right to know what data we collect and why.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right of Access:</span> Request copies of the personal data we hold about you.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Rectification:</span> Request that we correct inaccurate or incomplete data.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Erasure:</span> Request that we delete your personal data, subject to legal exceptions.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Restrict Processing:</span> Ask us to limit how we process your data.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Data Portability:</span> Request a copy of your data in a portable, machine-readable
                    format.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Object:</span> Object to our use of your data, including for marketing communications.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Automated Decision-Making:</span> Object to decisions made solely based on automated
                    processing, where applicable.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  To exercise any of these rights, please contact us at privacy@skydda.ai. We may need to verify your identity
                  before processing your request and will respond within 30 days of a verified request. We may not always be
                  able to comply fully if legal obligations require otherwise.
                </p>
              </section>

              {/* California Rights */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  14. California Privacy Rights (CCPA/CPRA)
                </h2>
                <p className="headline-sans text-body1">
                  If you are a California resident, the California Consumer Privacy Act (“CCPA”), as amended by the
                  California Privacy Rights Act (“CPRA”), provides you with additional rights:
                </p>
                <ul className="list-disc ml-6 space-y-2 headline-sans text-body1">
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Know:</span> Request information about the categories and specific pieces of personal
                    information we have collected, the sources, the business purposes, and the categories of
                    third parties with whom we share it.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Delete:</span> Request deletion of your personal information, subject to legal exceptions.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Correct:</span> Request correction of inaccurate personal information.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Opt-Out of Sale or Sharing:</span> We do not sell your personal information and do not
                    share it for cross-context behavioral advertising purposes.
                  </li>
                  <li>
                    <span className="font-bold headline-sans text-body1">Right to Non-Discrimination:</span> We will not discriminate against you for exercising your
                    privacy rights.
                  </li>
                </ul>
                <p className="headline-sans text-body1">
                  To submit a request under the CCPA, please contact us at privacy@skydda.ai. We will verify your identity
                  before processing your request and will respond within 45 days, which may be extended by an additional 45
                  days where reasonably necessary.
                </p>
              </section>

              {/* Job Applicant Data */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  15. Job Applicant Data
                </h2>
                <div className="space-y-4 headline-sans text-body1">
                  <p>
                    Where you apply for a position at Skydda, we will collect and process personal data you provide in your
                    application, including your name, contact details, employment history, educational background, references,
                    and any other information included in your CV or resume. We may also collect information from recruitment
                    platforms (e.g., LinkedIn) or referees, where applicable.
                  </p>
                  <p>
                    Applicant data for unsuccessful candidates is retained for two (2) years after the conclusion of the
                    recruitment process, unless you request earlier deletion. Data for successful candidates becomes part of
                    employment records and is governed by our employee data retention policies. Job applicants have the
                    same data subject rights described in Section 13.
                  </p>
                </div>
              </section>

              {/* Children's Data */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  16. Children’s Data
                </h2>
                <p className="headline-sans text-body1">
                  Our website and services are intended for business professionals and are not directed at children under the
                  age of 16. We do not knowingly collect personal data from children. If we learn that we have collected
                  personal data from a child below the applicable age threshold, we will take steps to promptly delete that
                  information. If you are a parent or guardian and believe your child has provided us with personal data,
                  please contact us at privacy@skydda.ai.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  17. Changes to This Privacy Policy
                </h2>
                <p className="headline-sans text-body1">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal
                  requirements. We will post the updated policy on our website with a new effective date. For material
                  changes, we will notify registered users via email. We encourage you to review this page periodically to stay
                  informed about our data practices.
                </p>
              </section>

              {/* Contact */}
              <section className="flex flex-col gap-4">
                <h2 className="section-header">
                  18. Contact Us
                </h2>
                <p className="headline-sans text-body1">
                  If you have questions, concerns, complaints, or would like to exercise your privacy rights, please contact us:
                </p>

                <div className="overflow-hidden border border-[#56565680] rounded-sm">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 w-40 border-r border-[#56565680] italic">Entity</td>
                        <td className="px-4 py-3 text-foreground/90">Skydda Inc.</td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Attn</td>
                        <td className="px-4 py-3 text-foreground/90">Privacy Officer</td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Email</td>
                        <td className="px-4 py-3 text-foreground/90">
                          <a href="mailto:[EMAIL_ADDRESS]" className="text-primary/80 hover:text-primary underline transition-colors">
                            privacy@skydda.ai
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-[#56565680]">
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Website</td>
                        <td className="px-4 py-3 text-foreground/90">skydda.ai</td>
                      </tr>
                      <tr>
                        <td className="headline-serif px-4 py-3 border-r border-[#56565680] italic">Response Time</td>
                        <td className="px-4 py-3 text-foreground/90">Within 30 days of a verified request</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;