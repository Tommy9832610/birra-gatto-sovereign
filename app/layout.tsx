import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PREDATOR SOVEREIGN v23.1',
  description: 'Advanced Crypto Intelligence & Secure Vault',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="bg-black">
      <body className={`${inter.className} antialiased bg-black text-white selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}