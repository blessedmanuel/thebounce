'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const RefundPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Money-Back</span> Guarantee
          </h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re so confident in our service that we offer a no-questions-asked refund policy
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">30-Day Window</h3>
            <p className="text-muted-foreground">
              Full refund available within 30 days of purchase, no questions asked
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card text-center">
            <Shield className="w-12 h-12 text-electric mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
            <p className="text-muted-foreground">
              If you&apos;re not satisfied for any reason, we&apos;ll refund your entire payment
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card text-center">
            <CheckCircle className="w-12 h-12 text-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Process</h3>
            <p className="text-muted-foreground">
              Refunds are processed within 2-3 business days back to your original payment method
            </p>
          </Card>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment to You</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in the quality of our email validation service. That&apos;s why we offer a comprehensive 
              30-day money-back guarantee. If our service doesn&apos;t meet your expectations or needs for any reason, 
              we&apos;ll provide a full refund - no questions asked, no hassle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Request a Refund</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">1</div>
                <p className="text-muted-foreground">Contact us through our Telegram bot or email within 30 days of purchase</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">2</div>
                <p className="text-muted-foreground">Provide your order number or account email address</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">3</div>
                <p className="text-muted-foreground">We&apos;ll process your refund within 2-3 business days</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What&apos;s Covered</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>All subscription plans (Starter, Professional, Enterprise)</li>
              <li>One-time purchases and credits</li>
              <li>Annual and monthly billing cycles</li>
              <li>Custom enterprise agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Refund Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once your refund request is approved, funds will be returned to your original payment method within:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Credit/Debit Cards: 3-5 business days</li>
              <li>PayPal: 1-2 business days</li>
              <li>Bank Transfers: 5-7 business days</li>
              <li>Cryptocurrency: 1-3 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Why We Offer This Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re confident that our email validation service provides exceptional value and accuracy. Our 99.9% 
              validation accuracy rate and enterprise-grade infrastructure speak for themselves. We offer this 
              guarantee because we know you&apos;ll love using our service, but if for any reason you don&apos;t, 
              we want you to feel completely secure in trying us out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact for Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              To request a refund or if you have any questions about our refund policy:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Telegram: Contact our support bot for immediate assistance</li>
              <li>Email: refunds@emailvalidator.com</li>
              <li>Response time: Within 24 hours on business days</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-card rounded-lg border border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Try Risk-Free?</h3>
          <p className="text-muted-foreground mb-6">
            Start validating emails today with complete confidence. 30-day money-back guarantee included.
          </p>
          <Link href="/" passHref>
            <Button variant="glow" size="lg" asChild>
              <span>Start Free Trial</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
