// app/layout.tsx
import "./globals.css";
import "./index.css";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";

import { Metadata } from 'next';
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: 'TheUnbounce',
  description: 'TheUnbounce helps you validate and verify email addresses instantly, ensuring better deliverability, fewer bounces, and improved sender reputation.',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
          <AuthProvider>
            <TooltipProvider>
              {children}
            </TooltipProvider>
            <ToastContainer autoClose={2000} />
          </AuthProvider>
      </body>
    </html>
  );
}
