"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              1. Ownership
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fitsii LLC owns and operates the Voidbounce service and the Voidmail Manager product. These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of Voidbounce and Voidmail Manager (together, the &quot;Service&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              2. Purpose of Voidmail Manager
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Voidmail Manager streamlines email hygiene and collaboration for corporate users, developers, and individuals. The Service automates inbox organization, rules/filters, selective forwarding, templated outreach, and attachment/document sharing that the user explicitly chooses. Use of the Service is intended to reduce manual effort, errors, and time-to-response.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              3. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Service you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              4. Google Scopes & How They Are Used
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Where you elect to connect your Google account, Voidmail Manager will request only the permissions it needs to perform the actions you authorize. Requested scopes and their use:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>gmail.settings.basic / gmail.settings.sharing</strong> — Create or update filters and forwarding settings at your request (for example: labeling, archiving, forwarding to a designated address).
              </li>
              <li>
                <strong>gmail.modify (or gmail.readonly where possible)</strong> — Read message metadata and only the specific messages required to apply or test a rule; add/remove labels; move messages. Read-only access is requested for previews; modify is requested only after you confirm changes.
              </li>
              <li>
                <strong>gmail.send</strong> — Send replies or templated follow-ups as you (never as a third party) and only to recipients you specify.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You may revoke these permissions at any time through your Google account settings; revocation may limit or disable parts of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              5. User Data, Storage, and Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Email addresses and message metadata processed for validation, filtering, or forwarding are handled in accordance with our Privacy Policy. We process only the data necessary to provide the features you request. We do not sell your email data. Where applicable, data retention and processing follow your explicit instructions and consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              6. Use Restrictions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use the Service for unlawful, abusive, or spam activities. Additional restrictions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Do not attempt to reverse engineer the Service or its algorithms.</li>
              <li>Do not exceed rate limits or usage quotas applicable to your plan.</li>
              <li>Do not share API credentials or account access with unauthorized parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              7. Payments, Subscriptions & Refunds
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Paid features, subscriptions, and billing are governed by the terms presented at purchase. We offer a 30-day money-back guarantee where stated; refund eligibility is subject to our billing terms and fraud prevention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              8. Termination & Suspension
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fitsii LLC may suspend or terminate accounts that violate these Terms or engage in abusive activity. Users may cancel subscriptions per the account settings; termination does not automatically delete user data unless requested in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              9. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service is provided &quot;as is.&quot; To the maximum extent permitted by law, Fitsii LLC and its affiliates are not liable for incidental, consequential, or special damages arising from use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              10. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these Terms from time to time. Material changes will be communicated by posting an updated date and, where appropriate, notifications within the Service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              11. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws applicable to Fitsii LLC, without regard to conflict-of-law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              12. Contact & Support
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, support, or data requests contact us at support@fitsii.com or admin@voidbounce.com.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="glow" size="lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
