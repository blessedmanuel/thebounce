import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import React from "react";

const Pricing = () => {
  const telegramBotUrl = "https://t.me/theunbouncebot";

  const plans = [
    {
      name: "Starter",
      price: "7",
      period: "month",
      description: "Perfect for small projects and testing",
      emails: "5,000",
      features: [
        "5,000 email validations/month",
        "Real-time API access",
        "Basic analytics",
        "Email support",
        "99.5% uptime SLA"
      ],
      badge: null,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "13",
      period: "month", 
      description: "Ideal for growing businesses",
      emails: "10,000",
      features: [
        "10,000 email validations/month",
        "Real-time API access",
        "Advanced analytics",
        "Bulk processing",
        "Priority support",
        "99.9% uptime SLA",
        "Custom webhooks"
      ],
      badge: "Most Popular",
      buttonVariant: "glow" as const
    },
    {
      name: "Business",
      price: "29",
      period: "month",
      description: "For established businesses",
      emails: "25,000",
      features: [
        "25,000 email validations/month",
        "Real-time API access",
        "Advanced analytics",
        "Bulk processing",
        "Priority support",
        "99.9% uptime SLA",
        "Custom webhooks",
        "Team collaboration"
      ],
      badge: null,
      buttonVariant: "outline" as const
    },
    {
      name: "Enterprise",
      price: "100",
      period: "month",
      description: "For large organizations",
      emails: "100,000",
      features: [
        "100,000 email validations/month",
        "Real-time API access",
        "Enterprise analytics",
        "Bulk processing",
        "24/7 phone support",
        "99.99% uptime SLA",
        "Custom integrations",
        "Dedicated account manager",
        "Custom rate limits"
      ],
      badge: "Enterprise",
      buttonVariant: "electric" as const
    }
  ];


  return (
    <section className="py-20 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features 
            with no hidden fees or long-term commitments.
            <span className="block mt-2 text-electric font-semibold">
              💰 Money back if not satisfied - 30-day guarantee
            </span>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan, index) => (
              <div key={`${plan.name}-${index}`} className="min-h-[550px]">
                <Card 
                  className={`h-full p-4 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 relative flex flex-col ${
                    plan.badge === "Most Popular" ? "ring-2 ring-primary/50 scale-105" : 
                    plan.badge === "Enterprise" ? "ring-2 ring-electric/50 scale-105" : ""
                  } glow-on-hover shadow-card hover:shadow-glow group`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute ${
                      plan.badge === "Enterprise" 
                        ? "-top-2 left-1/2 transform -translate-x-1/2" 
                        : "-top-2 left-1/2 transform -translate-x-1/2"
                    }`}>
                      <Badge 
                        className={`${
                          plan.badge === "Most Popular" 
                            ? "bg-gradient-primary text-primary-foreground" 
                            : plan.badge === "Enterprise"
                            ? "bg-electric text-background"
                            : "bg-primary/20 text-primary border-primary/30"
                        } px-2 py-1 text-xs`}
                      >
                        {plan.badge === "Most Popular" && <Star className="w-2 h-2 mr-1" />}
                        {plan.badge === "Enterprise" && <Star className="w-2 h-2 mr-1" />}
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-4 flex-shrink-0">
                    <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground text-xs">/{plan.period}</span>
                    </div>
                    <p className="text-xs text-electric mt-1 font-medium">{plan.emails} emails included</p>
                  </div>

                  {/* Features - Flexible height */}
                  <div className="flex-1 mb-4">
                    <ul className="space-y-1.5">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="flex-shrink-0">
                    <Button 
                      variant={plan.buttonVariant}
                      className="w-full font-semibold group-hover:scale-105 transition-transform duration-200 text-sm"
                      size="sm"
                      onClick={() => window.open(telegramBotUrl, '_blank')}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need more than 100,000 emails per month?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-primary"
              onClick={() => window.open(telegramBotUrl, '_blank')}
            >
              Contact us for custom pricing
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;