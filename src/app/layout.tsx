import type { Metadata } from 'next';
import './globals.css';
import { Toaster }
from "@/components/ui/toaster";
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export const metadata: Metadata = {
  title: 'ResolveAI - Your Path to Recovery',
  description: 'AI-Powered Addiction Recovery Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
