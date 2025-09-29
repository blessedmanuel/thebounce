"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "../globals.css"

const ApiDocs = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/auth/register",
      title: "Register User",
      description: "Create a new user account for API access",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "email": "user@example.com",
        "password": "your_password"
      },
      response: {
        "id": 1,
        "email": "user@example.com",
        "created_at": "2024-01-15T10:30:00Z",
        "is_active": true
      }
    },
    {
      method: "POST",
      path: "/auth/login",
      title: "Login User",
      description: "Authenticate user and get access token",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "email": "user@example.com",
        "password": "your_password"
      },
      response: {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "token_type": "bearer"
      }
    },
    {
      method: "POST",
      path: "/validation/order",
      title: "Create Validation Order",
      description: "Upload a file containing email addresses for bulk validation",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
      },
      body: {
        "filename": "emails.txt",
        "file_content": "dXNlckBleGFtcGxlLmNvbQp0ZXN0QGV4YW1wbGUuY29t...",
        "workers": 10
      },
      response: {
        "job_id": "7dbf0d69-80ec-4b54-95c0-de0156d1981b",
        "status": "pending",
        "message": "Validation order created successfully"
      }
    },
    {
      method: "GET",
      path: "/validation/status/{job_id}",
      title: "Get Job Status",
      description: "Check the status of a validation job and get progress information",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
      },
      response: {
        "job_id": "7dbf0d69-80ec-4b54-95c0-de0156d1981b",
        "status": "completed",
        "created_at": "2024-01-15T10:30:00Z",
        "completed_at": "2024-01-15T10:35:00Z",
        "file_url": "/api/download/7dbf0d69-80ec-4b54-95c0-de0156d1981b",
        "error_message": null,
        "progress_percentage": 100
      }
    },
    {
      method: "GET",
      path: "/validation/jobs",
      title: "List User Jobs",
      description: "Get all validation jobs for the authenticated user",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
      },
      response: [
        {
          "job_id": "7dbf0d69-80ec-4b54-95c0-de0156d1981b",
          "status": "completed",
          "created_at": "2024-01-15T10:30:00Z",
          "completed_at": "2024-01-15T10:35:00Z",
          "file_url": "/api/download/7dbf0d69-80ec-4b54-95c0-de0156d1981b",
          "error_message": null,
          "progress_percentage": 100
        }
      ]
    },
    {
      method: "GET",
      path: "/api/download/{job_id}",
      title: "Download Result File",
      description: "Download the validation results file for a completed job",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
      },
      response: "Binary file download (ZIP format)"
    },
    {
      method: "POST",
      path: "/validation/cancel/{job_id}",
      title: "Cancel Job",
      description: "Cancel a running or pending validation job",
      headers: {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
      },
      response: {
        "job_id": "7dbf0d69-80ec-4b54-95c0-de0156d1981b",
        "status": "cancelled",
        "message": "Validation job cancelled successfully"
      }
    },
    {
      method: "GET",
      path: "/health",
      title: "Health Check",
      description: "Check the API service health status",
      headers: {
        "Content-Type": "application/json"
      },
      response: {
        "status": "healthy",
        "service": "server1-master",
        "timestamp": "2024-01-15T10:30:00Z",
        "version": "2.0.0"
      }
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "POST": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "PUT": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "DELETE": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-electric-blue to-accent bg-clip-text text-transparent mb-4">
              API Documentation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Integrate our email validation service into your applications with our RESTful API. 
              Get started with these endpoints and validate emails at scale.
            </p>
          </div>

          {/* Base URL */}
          <Card className="p-6 mb-8 bg-card/50 border-border/50">
            <h2 className="text-xl font-semibold mb-3">Base URL</h2>
            <code className="bg-muted/30 px-3 py-2 rounded text-primary font-mono">
              http://localhost:8001
            </code>
            <p className="text-sm text-muted-foreground mt-2">
              For production, replace with your deployed VM1 server URL
            </p>
          </Card>

          {/* Authentication */}
          <Card className="p-6 mb-8 bg-card/50 border-border/50">
            <h2 className="text-xl font-semibold mb-3">Authentication</h2>
            <p className="text-muted-foreground mb-3">
              All API requests require authentication using your API key in the Authorization header:
            </p>
            <code className="bg-muted/30 px-3 py-2 rounded text-primary font-mono block">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </Card>

          {/* Endpoints */}
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${getMethodColor(endpoint.method)} font-mono`}>
                    {endpoint.method}
                  </Badge>
                  <code className="text-primary font-mono bg-muted/30 px-3 py-1 rounded">
                    {endpoint.path}
                  </code>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{endpoint.title}</h3>
                <p className="text-muted-foreground mb-6">{endpoint.description}</p>

                {/* Headers */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Headers</h4>
                  <div className="bg-muted/20 p-4 rounded border">
                    <pre className="text-sm text-muted-foreground">
                      {Object.entries(endpoint.headers).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </pre>
                  </div>
                </div>

                {/* Request Body (for POST requests) */}
                {endpoint.body && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Request Body</h4>
                    <div className="bg-muted/20 p-4 rounded border">
                      <pre className="text-sm text-muted-foreground">
                        {JSON.stringify(endpoint.body, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Response */}
                <div>
                  <h4 className="font-semibold mb-3">Response</h4>
                  <div className="bg-muted/20 p-4 rounded border">
                    <pre className="text-sm text-muted-foreground">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Rate Limiting */}
          <Card className="p-6 mt-8 bg-card/50 border-border/50">
            <h2 className="text-xl font-semibold mb-3">Rate Limiting</h2>
            <p className="text-muted-foreground mb-3">
              API requests are rate limited based on your plan:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Starter:</strong> 100 requests per minute</li>
              <li><strong>Professional:</strong> 1,000 requests per minute</li>
              <li><strong>Enterprise:</strong> Custom limits</li>
            </ul>
          </Card>

          {/* Error Codes */}
          <Card className="p-6 mt-8 bg-card/50 border-border/50">
            <h2 className="text-xl font-semibold mb-3">Error Codes</h2>
            <div className="space-y-2 text-muted-foreground">
              <div><code className="bg-muted/30 px-2 py-1 rounded">400</code> - Bad Request</div>
              <div><code className="bg-muted/30 px-2 py-1 rounded">401</code> - Unauthorized</div>
              <div><code className="bg-muted/30 px-2 py-1 rounded">429</code> - Rate Limited</div>
              <div><code className="bg-muted/30 px-2 py-1 rounded">500</code> - Internal Server Error</div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocs;