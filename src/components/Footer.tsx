import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";

const Footer = () => {
  const telegramBotUrl = "https://t.me/VoidBouncebot";

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">VoidBounce</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional email validation service for developers and businesses. 
              Reduce bounce rates and improve email deliverability with our real-time API.
            </p>
            <Button 
              variant="glow" 
              onClick={() => window.open(telegramBotUrl, '_blank')}
              className="mb-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start on Telegram
            </Button>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#status" className="text-muted-foreground hover:text-primary transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  onClick={() => window.open(telegramBotUrl, '_blank')}
                >
                  Help Center
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  onClick={() => window.open(telegramBotUrl, '_blank')}
                >
                  Contact Support
                </Button>
              </li>
              <li><a href="/privacyPolicy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/termsConditions" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/refundPolicy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 VoidBounce. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open(telegramBotUrl, '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;