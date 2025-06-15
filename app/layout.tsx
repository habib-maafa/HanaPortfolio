import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alexandra Thompson - Law Student Portfolio',
  description: 'Professional portfolio of Alexandra Thompson, law student and legal professional with experience in corporate law, public defense, and legal aid.',
  keywords: 'law student, legal professional, portfolio, Columbia Law School, legal experience',
  authors: [{ name: 'Alexandra Thompson' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}