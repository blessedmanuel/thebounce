"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Mail, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Loader2,
  Copy,
  RefreshCw,
  Home
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'react-toastify';

interface ValidationResult {
  email: string;
  valid: boolean;
  reason: string;
  disposable: boolean;
  role_based: boolean;
  free_provider: boolean;
  mx_record: boolean;
  smtp_check: boolean;
}

export default function ValidatePage() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = async (emailToValidate: string) => {
    if (!emailToValidate.trim()) {
      setError('Please enter an email address');
      return;
    }

    setIsValidating(true);
    setError('');
    setResult(null);

    try {
      // Simulate API call - replace with actual validation endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock validation result - replace with actual API call
      const mockResult: ValidationResult = {
        email: emailToValidate,
        valid: Math.random() > 0.3, // 70% chance of being valid
        reason: Math.random() > 0.3 ? 'valid' : 'invalid_domain',
        disposable: Math.random() > 0.8,
        role_based: Math.random() > 0.9,
        free_provider: Math.random() > 0.6,
        mx_record: Math.random() > 0.2,
        smtp_check: Math.random() > 0.3
      };
      
      setResult(mockResult);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Validation failed';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const getStatusColor = (valid: boolean) => {
    return valid 
      ? 'bg-green-500/20 text-green-400 border-green-500/30'
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  const getStatusIcon = (valid: boolean) => {
    return valid ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
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
              Single Email <span className="gradient-text">Validation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Validate individual email addresses instantly with our real-time verification service
            </p>
          </div>

          {/* Validation Form */}
          <Card className="p-8 mb-8 bg-gradient-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg font-semibold">
                  Email Address
                </label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address to validate"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-background/50 border-input focus:border-primary"
                      disabled={isValidating}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isValidating || !email.trim()}
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8"
                  >
                    {isValidating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Validate
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>

            {error && (
              <Alert className="mt-6 border-red-500/20 bg-red-500/10">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <AlertDescription className="text-red-400">
                  {error}
                </AlertDescription>
              </Alert>
            )}
          </Card>

          {/* Results */}
          {result && (
            <Card className="p-8 bg-gradient-card border-border">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">Validation Result</h2>
                    <Badge className={getStatusColor(result.valid)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(result.valid)}
                        {result.valid ? 'Valid' : 'Invalid'}
                      </span>
                    </Badge>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(result.email)}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-card"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </Button>
                </div>

                {/* Email */}
                <div className="p-4 bg-background/30 rounded-lg">
                  <p className="font-mono text-lg break-all">{result.email}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Validation Details</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">Overall Status</span>
                        <Badge className={getStatusColor(result.valid)}>
                          {result.valid ? 'Valid' : 'Invalid'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">Reason</span>
                        <span className="text-sm text-muted-foreground capitalize">
                          {result.reason.replace('_', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">MX Record</span>
                        <Badge className={result.mx_record ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                          {result.mx_record ? 'Found' : 'Not Found'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">SMTP Check</span>
                        <Badge className={result.smtp_check ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                          {result.smtp_check ? 'Passed' : 'Failed'}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Email Characteristics</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">Disposable Email</span>
                        <Badge className={result.disposable ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}>
                          {result.disposable ? 'Yes' : 'No'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">Role-based Email</span>
                        <Badge className={result.role_based ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}>
                          {result.role_based ? 'Yes' : 'No'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                        <span className="text-sm">Free Provider</span>
                        <Badge className={result.free_provider ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'}>
                          {result.free_provider ? 'Yes' : 'No'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => validateEmail(result.email)}
                    variant="outline"
                    className="border-border hover:bg-card"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Validate Again
                  </Button>
                  
                  <Button
                    onClick={() => {
                      setResult(null);
                      setEmail('');
                    }}
                    variant="outline"
                    className="border-border hover:bg-card"
                  >
                    Clear Results
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-border text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Real-time Validation</h3>
              <p className="text-sm text-muted-foreground">
                Get instant results with sub-second response times
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border text-center">
              <AlertCircle className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Detailed Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive checks including MX records and SMTP validation
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">99.9% Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade validation with industry-leading accuracy
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
