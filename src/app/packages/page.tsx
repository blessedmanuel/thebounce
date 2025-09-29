"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  CheckCircle, 
  Star, 
  Zap,
  Shield,
  Users,
  CreditCard,
  RefreshCw,
  Home
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { apiClient, PackageResponse, PurchaseRequest, SubscriptionResponse } from '@/lib/api';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PackagesPage() {
  const [packages, setPackages] = useState<PackageResponse[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<SubscriptionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);
  
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      window.location.href = '/auth/login';
      return;
    }
    
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, authLoading]);

  const fetchData = async () => {
    try {
      const [packagesData, subscriptionData] = await Promise.all([
        apiClient.getPackages(),
        apiClient.getCurrentSubscription().catch(() => null) // Handle no subscription case
      ]);
      setPackages(packagesData);
      setCurrentSubscription(subscriptionData);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('Failed to fetch packages: ' + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePurchase = async (packageId: string) => {
    setPurchasing(packageId);
    try {
      const purchaseRequest: PurchaseRequest = {
        package_id: packageId,
        payment_method: 'stripe'
      };

      const result = await apiClient.purchasePackage(purchaseRequest);
      toast.success(`Successfully purchased ${result.package.name}!`);
      await fetchData();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('Purchase failed: ' + errorMessage);
    } finally {
      setPurchasing(null);
    }
  };

  const getPackageIcon = (packageId: string) => {
    switch (packageId) {
      case 'starter':
        return <Zap className="w-6 h-6" />;
      case 'professional':
        return <Star className="w-6 h-6" />;
      case 'enterprise':
        return <Shield className="w-6 h-6" />;
      case 'unlimited':
        return <Users className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  const getPackageColor = (packageId: string) => {
    switch (packageId) {
      case 'starter':
        return 'from-blue-500 to-cyan-500';
      case 'professional':
        return 'from-purple-500 to-pink-500';
      case 'enterprise':
        return 'from-orange-500 to-red-500';
      case 'unlimited':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatEmailLimit = (limit: number) => {
    if (limit >= 1000000) {
      return 'Unlimited';
    } else if (limit >= 1000) {
      return `${(limit / 1000).toFixed(0)}K`;
    }
    return limit.toString();
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading packages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-border hover:bg-card"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Package</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect plan for your email validation needs. 
              All packages include 30-day access and can be purchased using your wallet balance.
            </p>
          </div>

          {/* Current Subscription */}
          {currentSubscription && (
            <Card className="p-6 mb-8 bg-gradient-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-semibold">Current Subscription</h2>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{currentSubscription.package.name}</h3>
                  <p className="text-muted-foreground">
                    {formatEmailLimit(currentSubscription.package.email_limit)} emails • 
                    {currentSubscription.days_remaining} days remaining
                  </p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Active
                </Badge>
              </div>
            </Card>
          )}

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 ${
                  pkg.id === 'professional' ? 'ring-2 ring-primary/50 scale-105' : ''
                }`}
              >
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getPackageColor(pkg.id)} mb-4`}>
                    {getPackageIcon(pkg.id)}
                  </div>
                  
                  {pkg.id === 'professional' && (
                    <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-1">
                    ${pkg.price_dollars.toFixed(0)}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    per {pkg.duration_days} days
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">
                      {formatEmailLimit(pkg.email_limit)} email validations
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">
                      {pkg.duration_days} days access
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">
                      Real-time validation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">
                      API access included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">
                      Email support
                    </span>
                  </div>
                </div>

                {/* Purchase Button */}
                <Button
                  onClick={() => handlePurchase(pkg.id)}
                  disabled={purchasing === pkg.id}
                  className={`w-full ${
                    pkg.id === 'professional'
                      ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground'
                      : 'bg-background/50 hover:bg-background border-border'
                  }`}
                >
                  {purchasing === pkg.id ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Purchase Package
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-card border-border">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All packages include the same high-quality email validation service. 
                Choose based on your expected email volume. You can always upgrade or 
                purchase additional packages as your needs grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-border hover:bg-card">
                  View API Documentation
                </Button>
                <Button variant="outline" className="border-border hover:bg-card">
                  Contact Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
