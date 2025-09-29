import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  CheckCircle, 
  Users,
  Clock,
  Database,
  Code
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Validation",
      description: "Instant email verification with sub-second response times. Validate emails as users type for the best user experience.",
      highlight: "< 100ms response"
    },
    {
      icon: Shield,
      title: "99.9% Accuracy",
      description: "Advanced algorithms check syntax, domain validity, MX records, and mailbox existence for maximum accuracy.",
      highlight: "Enterprise grade"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Get comprehensive insights into your email quality with detailed reports and analytics dashboard.",
      highlight: "Full reporting"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Validate emails from any country or domain. Our global infrastructure ensures reliable service worldwide.",
      highlight: "200+ countries"
    },
    {
      icon: CheckCircle,
      title: "Bulk Processing",
      description: "Upload and validate thousands of emails at once. Perfect for cleaning large email lists efficiently.",
      highlight: "1M+ emails/hour"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share validation results with your team. Multiple user access with role-based permissions.",
      highlight: "Multi-user access"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous service monitoring with 99.9% uptime guarantee. Real-time status updates and alerts.",
      highlight: "Always online"
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "All data is encrypted and stored securely. GDPR compliant with automatic data retention policies.",
      highlight: "GDPR compliant"
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Simple REST API with SDKs for popular languages. Get started in minutes with comprehensive documentation.",
      highlight: "5-min setup"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why choose <span className="gradient-text">TheUnbounce</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Our email validation service 
            offers the reliability and accuracy your applications need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group glow-on-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#33bbff1a] rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <span className="text-xs bg-[#0ff3] text-electric px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;