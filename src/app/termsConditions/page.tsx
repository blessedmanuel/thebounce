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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using our email validation service, you accept and agree to be bound by the terms
              and provision of this agreement. Our service comes with a money-back guarantee &mdash; if you&apos;re not
              satisfied, we&apos;ll refund your payment within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              2. Use License
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to use our email validation service for commercial and personal use with the following restrictions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You may not use the service for spam or malicious activities</li>
              <li>You may not attempt to reverse engineer our validation algorithms</li>
              <li>You may not exceed your plan&apos;s rate limits or usage quotas</li>
              <li>You may not share your API credentials with unauthorized parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              3. Service Availability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to maintain 99.9% uptime for our service. However, we cannot guarantee uninterrupted service
              due to maintenance, updates, or unforeseen circumstances. We provide SLA guarantees as outlined in your plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              4. Payment and Refunds
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All payments are processed securely through our payment partners. We offer a 30-day money-back guarantee
              for all plans. If you&apos;re not completely satisfied with our service, contact us for a full refund within
              30 days of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              5. Data Usage and Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Email addresses submitted for validation are processed according to our Privacy Policy. We do not store
              or use your email data for any purpose other than validation and service improvement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              6. Account Termination
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate accounts that violate our terms of service or engage in abusive behavior.
              Users may cancel their subscription at any time through their account dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages
              arising from the use or inability to use our service, except as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              8. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us through our Telegram bot or
              email us at legal@emailvalidator.com.
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
