import type { Metadata } from 'next';
import '98.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Windows 95 styled portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
