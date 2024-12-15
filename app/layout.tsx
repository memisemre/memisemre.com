import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'memisemre.com',
  description: 'Front-End & WordPress Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
