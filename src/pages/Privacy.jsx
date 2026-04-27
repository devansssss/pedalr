import React from 'react';
import { T } from '../theme';

export default function Privacy() {
  return (
    <section style={{
      padding: '120px clamp(20px, 5vw, 60px) 100px', // Extra padding for fixed navbar
      maxWidth: 800,
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <div className="fadeUp" style={{ marginBottom: 48 }}>
        <h1 style={{
          fontFamily: 'Barlow Condensed', 
          fontWeight: 800, 
          fontSize: 'clamp(36px, 6vw, 56px)',
          color: T.white, 
          lineHeight: 1.1,
          marginBottom: 16
        }}>
          Privacy Policy
        </h1>
        <div style={{ 
          display: 'inline-block',
          padding: '6px 12px',
          background: T.accentD,
          border: `1px solid ${T.accentG}`,
          borderRadius: 8,
          color: T.accent, 
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: '0.05em'
        }}>
          Last Updated: April 22, 2026
        </div>
      </div>

      {/* The Styled Policy Content */}
      <div className="fadeUp" style={{
        color: T.dim,
        fontSize: 16,
        lineHeight: 1.8,
        fontWeight: 300,
        animationDelay: '0.15s'
      }}>
        {/* Scoped CSS for the legal content */}
        <style>{`
          .legal-content h2 { 
            color: ${T.white}; 
            font-family: 'Barlow Condensed'; 
            font-size: 28px; 
            margin-top: 56px; 
            margin-bottom: 20px; 
            font-weight: 700; 
            letter-spacing: 0.02em; 
            border-bottom: 1px solid ${T.border};
            padding-bottom: 12px;
          }
          .legal-content h3 { 
            color: ${T.white}; 
            font-size: 20px; 
            margin-top: 32px; 
            margin-bottom: 12px; 
            font-weight: 600; 
          }
          .legal-content h4 {
            color: #D0D0D8;
            font-size: 16px;
            margin-top: 24px;
            margin-bottom: 8px;
          }
          .legal-content p { margin-bottom: 24px; }
          .legal-content ul { margin-left: 24px; margin-bottom: 24px; }
          .legal-content li { margin-bottom: 10px; padding-left: 8px; }
          .legal-content li::marker { color: ${T.accent}; }
          .legal-content a { color: ${T.accent}; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
          .legal-content a:hover { border-bottom-color: ${T.accent}; }
          .legal-content strong { color: #D0D0D8; font-weight: 600; }
          
          /* Table Styles for the US Privacy Section */
          .legal-table-wrapper { overflow-x: auto; margin-bottom: 24px; border: 1px solid ${T.border}; border-radius: 12px; }
          .legal-content table { width: 100%; border-collapse: collapse; text-align: left; min-width: 600px; }
          .legal-content th, .legal-content td { padding: 16px; border-bottom: 1px solid ${T.border}; vertical-align: top; }
          .legal-content th { color: ${T.white}; font-weight: 600; font-family: 'Barlow Condensed'; background: ${T.surf2}; font-size: 18px; letter-spacing: 0.05em; }
          .legal-content tr:last-child td { border-bottom: none; }
          .badge-yes { color: #50C878; font-family: 'Barlow Condensed'; font-weight: 700; letter-spacing: 0.05em;}
          .badge-no { color: #FF4D4D; font-family: 'Barlow Condensed'; font-weight: 700; letter-spacing: 0.05em;}
        `}</style>
        
        <div className="legal-content">
          <p>
            This Privacy Notice for Pedalr (doing business as Pedalr) (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
          </p>
          <ul>
            <li>Visit our website at getpedalr.vercel.app or any website of ours that links to this Privacy Notice</li>
            <li>Download and use our mobile application (Pedalr), or any other application of ours that links to this Privacy Notice</li>
            <li>Use our services. Pedalr is a premium, gamified social GPS tracking application designed for cyclists and fitness enthusiasts. It combines high-accuracy ride tracking with competitive gaming elements, allowing users to earn experience points (XP), climb a structured rank ladder, and unlock digital achievements based on their distance and elevation. The platform emphasizes community engagement through a social activity feed, allowing riders to share their progress and highlight standout performances. Built with a focus on high-end aesthetics and data-rich displays.</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:vdevansh3@gmail.com">vdevansh3@gmail.com</a>.
          </p>

          <h2>SUMMARY OF KEY POINTS</h2>
          <p>
            <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
          </p>
          <p>
            <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
          </p>
          <p>
            <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
          </p>
          <p>
            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
          </p>
          <p>
            <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.
          </p>
          <p>
            <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>
          <p>
            <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
          </p>
          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us at <a href="mailto:vdevansh3@gmail.com">vdevansh3@gmail.com</a>. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h2>TABLE OF CONTENTS</h2>
          <ol style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
            <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>GRIEVANCE REDRESSAL (INDIA)</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>

          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>Personal information you disclose to us</h3>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul>
            <li>Names</li>
            <li>Email addresses</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Contact or authentication data</li>
          </ul>
          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases. All payment data is handled and stored by Google Play Billing. You may find their privacy notice link(s) here: <a href="https://payments.google.com/legaldocument?family=0.privacynotice" target="_blank" rel="noreferrer">Google Privacy Notice</a>.</p>
          <p>All in-app purchases and financial transactions are processed securely by Google Play Billing. Pedalr does not directly collect, process, or store sensitive financial data such as full credit card numbers, CVV codes, or bank account details. We receive only non-sensitive transaction metadata from Google (such as transaction IDs, timestamps, and product identifiers) solely to verify your purchase and grant access to premium features.</p>
          <p><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details. If you choose to register in this way, we will collect certain profile information about you from the social media provider.</p>
          <p><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
          <ul>
            <li><strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services.</li>
            <li><strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device&apos;s storage, location services, and other features.</li>
            <li><strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, IP address, and information about the features of our application(s) you accessed.</li>
          </ul>

          <h3>Information automatically collected</h3>
          <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information. The information we collect includes:</p>
          <ul>
            <li><strong>Log and Usage Data.</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect.</li>
            <li><strong>Device Data.</strong> Information about your computer, phone, tablet, or other device you use to access the Services.</li>
            <li><strong>Location Data.</strong> Information about your device&apos;s location, which can be either precise or imprecise.</li>
          </ul>
          <p><strong>Google API:</strong> Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
          <ul>
            <li>To facilitate account creation and authentication and otherwise manage user accounts.</li>
            <li>To deliver and facilitate delivery of services to the user.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To enable user-to-user communications.</li>
            <li>To request feedback.</li>
            <li>To protect our Services.</li>
            <li>To identify usage trends.</li>
            <li>To save or protect an individual&apos;s vital interest.</li>
          </ul>

          <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason.</p>
          <p><strong>If you are located in the EU or UK:</strong> We may rely on the following legal bases: Consent, Performance of a Contract, Legitimate Interests, Legal Obligations, and Vital Interests.</p>
          <p><strong>If you are located in Canada:</strong> We may process your information if you have given us specific permission (express consent) or in situations where your permission can be inferred (implied consent). You can withdraw your consent at any time.</p>

          <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.</p>
          <p><strong>Vendors, Consultants, and Other Third-Party Service Providers:</strong> Cloud Computing Services, Data Analytics Services, User Account Registration & Authentication Services.</p>
          <p>We also may need to share your personal information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
            <li><strong>When we use Google Maps Platform APIs.</strong> We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests.</li>
            <li><strong>Other Users.</strong> When you share personal information (for example, by posting comments to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users.</li>
          </ul>

          <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. We may share your information with Google Analytics to track and analyze the use of the Services.</p>

          <h2>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>

          <h2>7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p><strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.</p>
          <p>Our servers are located in India and the United States. If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>

          <h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
          <p>No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.</p>

          <h2>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>

          <h2>10. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>

          <h2>11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p><strong>In Short:</strong> Depending on your state of residence in the US or in some regions, you have rights that allow you greater access to and control over your personal information.</p>
          <p>If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.</p>

          <h2>12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate. We do not currently respond to DNT browser signals.</p>

          <h2>13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>The table below shows the categories of personal information we have collected in the past twelve (12) months.</p>

          <div className="legal-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers</td>
                  <td>Contact details, such as real name, alias, postal address, unique personal identifier, online identifier, IP address, email address, and account name</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>B. Personal information (CA Customer Records)</td>
                  <td>Name, contact information, education, employment, and financial information</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>C. Protected classification characteristics</td>
                  <td>Gender, age, date of birth, race and ethnicity, national origin</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>D. Commercial information</td>
                  <td>Transaction information, purchase history, financial details</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>E. Biometric information</td>
                  <td>Fingerprints and voiceprints</td>
                  <td className="badge-no">NO</td>
                </tr>
                <tr>
                  <td>F. Internet or similar network activity</td>
                  <td>Browsing history, search history, online behavior, interactions with our applications</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>G. Geolocation data</td>
                  <td>Device location</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>H. Audio, electronic, or similar information</td>
                  <td>Images and audio, video or call recordings</td>
                  <td className="badge-no">NO</td>
                </tr>
                <tr>
                  <td>I. Professional or employment information</td>
                  <td>Business contact details or job title</td>
                  <td className="badge-no">NO</td>
                </tr>
                <tr>
                  <td>J. Education Information</td>
                  <td>Student records and directory information</td>
                  <td className="badge-no">NO</td>
                </tr>
                <tr>
                  <td>K. Inferences drawn from collected personal information</td>
                  <td>Inferences drawn to create a profile or summary about an individual&apos;s preferences and characteristics</td>
                  <td className="badge-yes">YES</td>
                </tr>
                <tr>
                  <td>L. Sensitive personal Information</td>
                  <td></td>
                  <td className="badge-no">NO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>14. GRIEVANCE REDRESSAL (INDIA)</h2>
          <p>
            In accordance with the Digital Personal Data Protection Act (DPDP Act) 2023 and the Information Technology Rules, users in India may address any grievances or specialized requests regarding their personal data to our designated Grievance Officer.
          </p>
          <ul>
            <li><strong>Grievance Officer:</strong> Devansh Verma</li>
            <li><strong>Contact Email:</strong> <a href="mailto:vdevansh3@gmail.com">vdevansh3@gmail.com</a></li>
            <li><strong>Response Timeline:</strong> We are dedicated to acknowledging receipt of your grievance and will provide a final response or resolution <strong>within fifteen (15) days</strong> from receipt, as required by the DPDP Act 2023.</li>
          </ul>
          <p>If you are not satisfied with our response, you have the right to escalate your complaint to the Data Protection Board of India.</p>

          <h2>15. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

          <h2>16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>If you have questions or comments about this notice, you may email us at <a href="mailto:vdevansh3@gmail.com">vdevansh3@gmail.com</a> or contact us by post at:</p>
          <address style={{ fontStyle: 'normal', color: '#D0D0D8', lineHeight: 1.6 }}>
            <strong>Pedalr</strong><br />
            Sector 15A<br />
            Faridabad, Haryana 121007<br />
            India
          </address>

          <h2>17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. To request to review, update, or delete your personal information, please email us at <a href="mailto:vdevansh3@gmail.com">vdevansh3@gmail.com</a>.</p>
          
          <p style={{ marginTop: '64px', fontSize: '14px', color: T.muted }}>
            This Privacy Policy was created using Termly&apos;s Privacy Policy Generator.
          </p>

        </div>
      </div>
    </section>
  );
}