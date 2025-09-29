/**
 * API integration layer for VM1 server endpoints
 */

import { config } from './config';

const API_BASE_URL = config.api.baseUrl;

export interface User {
  id: number;
  account_type: 'web' | 'telegram';
  email?: string;
  tg_id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  is_active: boolean;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface ValidationOrder {
  filename: string;
  file_content: string; // Base64 encoded
  workers?: number;
}

export interface ValidationOrderResponse {
  job_id: string;
  status: string;
  message: string;
}

export enum JobStatus {
  pending = "pending",
  processing = "processing", 
  completed = "completed",
  failed = "failed",
  cancelled = "cancelled"
}

export interface JobStatusResponse {
  job_id: string;
  status: JobStatus;
  created_at: string;
  completed_at?: string;
  file_url?: string;
  error_message?: string;
  progress_percentage: number;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Authentication methods
  async register(accountType: 'web' | 'telegram', data: {
    email?: string;
    password?: string;
    tg_id?: number;
    username?: string;
    first_name?: string;
    last_name?: string;
  }): Promise<User> {
    const payload = {
      account_type: accountType,
      ...data
    };
    
    return this.request<User>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async login(accountType: 'web' | 'telegram', data: {
    email?: string;
    password?: string;
    tg_id?: number;
  }): Promise<AuthResponse> {
    const payload = {
      account_type: accountType,
      ...data
    };
    
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    
    this.token = response.access_token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', response.access_token);
    }
    
    return response;
  }

  logout(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Validation methods
  async createValidationOrder(order: ValidationOrder): Promise<ValidationOrderResponse> {
    return this.request<ValidationOrderResponse>('/validation/order', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  async getJobStatus(jobId: string): Promise<JobStatusResponse> {
    return this.request<JobStatusResponse>(`/validation/status/${jobId}`);
  }

  async getUserJobs(): Promise<JobStatusResponse[]> {
    return this.request<JobStatusResponse[]>('/validation/jobs');
  }

  async cancelJob(jobId: string): Promise<{ job_id: string; status: string; message: string }> {
    return this.request(`/validation/cancel/${jobId}`, {
      method: 'POST',
    });
  }

  async downloadResult(jobId: string): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/api/download/${jobId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Download failed: ${response.status}`);
    }

    return response.blob();
  }

  // System methods
  async healthCheck(): Promise<{ status: string; service: string; timestamp: string; version: string }> {
    return this.request('/health');
  }

  // Wallet methods
  async getWalletBalance(): Promise<WalletResponse> {
    return this.request<WalletResponse>('/wallet/balance');
  }

  async rechargeWallet(rechargeRequest: RechargeRequest): Promise<RechargeResponse> {
    return this.request<RechargeResponse>('/wallet/recharge', {
      method: 'POST',
      body: JSON.stringify(rechargeRequest),
    });
  }

  async getWalletTransactions(): Promise<TransactionResponse[]> {
    return this.request<TransactionResponse[]>('/wallet/transactions');
  }

  // Package methods
  async getPackages(): Promise<PackageResponse[]> {
    return this.request<PackageResponse[]>('/packages');
  }

  async purchasePackage(purchaseRequest: PurchaseRequest): Promise<PurchaseResponse> {
    return this.request<PurchaseResponse>('/packages/purchase', {
      method: 'POST',
      body: JSON.stringify(purchaseRequest),
    });
  }

  async getCurrentSubscription(): Promise<SubscriptionResponse> {
    return this.request<SubscriptionResponse>('/subscriptions/current');
  }

  // Utility methods
  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }
}

// Wallet and Package interfaces
export interface WalletResponse {
  user_id: number;
  balance_cents: number;
  balance_dollars: number;
  created_at: string;
  updated_at: string;
}

export interface TransactionResponse {
  id: string;
  type: string;
  amount_cents: number;
  amount_dollars: number;
  description: string;
  status: string;
  created_at: string;
  metadata?: string;
}

export interface RechargeRequest {
  amount_dollars: number;
  payment_method?: string;
}

export interface RechargeResponse {
  transaction_id: string;
  amount_cents: number;
  amount_dollars: number;
  payment_url?: string;
  status: string;
}

export interface PurchaseRequest {
  package_id: string;
  payment_method?: string;
}

export interface PurchaseResponse {
  transaction_id: string;
  subscription_id: string;
  package: PackageResponse;
  status: string;
  payment_url?: string;
}

export interface PackageResponse {
  id: string;
  name: string;
  description: string;
  price_dollars: number;
  email_limit: number;
  duration_days: number;
  is_active: boolean;
}

export interface SubscriptionResponse {
  id: string;
  package: PackageResponse;
  started_at: string;
  expires_at: string;
  is_active: boolean;
  days_remaining: number;
}

export const apiClient = new ApiClient(API_BASE_URL);
