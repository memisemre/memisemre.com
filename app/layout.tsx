import type { Metadata } from 'next';
import './globals.scss';
import MouseFollower from './components/MouseFollower';

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
      <body>
        <MouseFollower />
        <main>{children}</main>
      </body>
    </html>
  );
}
