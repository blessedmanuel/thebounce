"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect email addresses that you submit for validation through our service. We also collect basic usage analytics
              to improve our service quality and performance monitoring data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your submitted email addresses are used solely for validation purposes. We:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Validate email addresses for deliverability and format</li>
              <li>Provide you with validation results and analytics</li>
              <li>Improve our validation algorithms and service quality</li>
              <li>Process payments and manage your subscription</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest.
              We do not store validated email addresses longer than necessary for service provision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a 30-day money-back guarantee. If you&apos;re not satisfied with our service for any reason,
              contact us within 30 days of your purchase for a full refund, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Validated email addresses are not permanently stored. Usage analytics and account information
              are retained for as long as your account is active or as needed to provide services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services for payment processing and analytics. These services have their own
              privacy policies and we ensure they meet our data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our Telegram bot
              or email us at privacy@emailvalidator.com.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="glow" size="lg">
              Start Validating Emails
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
