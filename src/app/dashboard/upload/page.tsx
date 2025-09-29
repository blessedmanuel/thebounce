"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Upload, 
  FileText, 
  ArrowLeft, 
  CheckCircle,
  AlertCircle,
  X,
  Home
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/lib/api';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [workers, setWorkers] = useState(10);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/auth/login');
    return null;
  }

  const handleFileSelect = (file: File) => {
    // Validate file type
    const allowedTypes = ['text/plain', 'text/csv', 'application/csv'];
    if (!allowedTypes.includes(file.type) && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
      setError('Please select a valid file (TXT or CSV)');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    setError('');
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    setError('');

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Content = (reader.result as string).split(',')[1];
          
          await apiClient.createValidationOrder({
            filename: selectedFile.name,
            file_content: base64Content,
            workers: workers
          });

          toast.success('Validation job created successfully!');
          router.push('/dashboard');
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to create validation job';
          setError(errorMessage);
          toast.error(errorMessage);
        } finally {
          setIsUploading(false);
        }
      };
      
      reader.readAsDataURL(selectedFile);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to process file';
      setError(errorMessage);
      toast.error(errorMessage);
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
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
          <h1 className="text-3xl font-bold mt-4">Upload Email List</h1>
          <p className="text-muted-foreground mt-2">
            Upload a TXT or CSV file containing email addresses for validation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="p-8 bg-gradient-card border-border">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload Area */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Select File</Label>
              
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-primary bg-primary/5'
                    : selectedFile
                    ? 'border-green-500 bg-green-500/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.csv"
                  onChange={handleFileInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                      <div className="text-left">
                        <p className="font-semibold text-green-400">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        onClick={removeFile}
                        size="sm"
                        variant="outline"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-semibold mb-2">
                        Drop your file here or click to browse
                      </p>
                      <p className="text-muted-foreground">
                        Supports TXT and CSV files up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Workers Configuration */}
            <div className="space-y-4">
              <Label htmlFor="workers" className="text-lg font-semibold">
                Processing Workers
              </Label>
              <div className="max-w-xs">
                <Input
                  id="workers"
                  type="number"
                  min="1"
                  max="50"
                  value={workers}
                  onChange={(e) => setWorkers(parseInt(e.target.value) || 10)}
                  className="bg-background/50 border-input focus:border-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Number of parallel workers (1-50). More workers = faster processing.
                </p>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <Alert className="border-red-500/20 bg-red-500/10">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <AlertDescription className="text-red-400">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* File Format Info */}
            <div className="bg-muted/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Supported File Formats
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>TXT:</strong> One email address per line</p>
                <p><strong>CSV:</strong> Email addresses in the first column</p>
                <p><strong>Max file size:</strong> 10MB</p>
                <p><strong>Max emails per file:</strong> 1,000,000</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!selectedFile || isUploading}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Job...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Start Validation
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
