/**
 * Application configuration
 */

export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001',
  },
  app: {
    name: 'TheUnbounce',
    description: 'Professional Email Validation Service',
    version: '2.0.0',
  },
  features: {
    singleValidation: true,
    bulkValidation: true,
    apiAccess: true,
    realTimeValidation: true,
  },
} as const;
