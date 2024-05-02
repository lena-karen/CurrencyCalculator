import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';
import clsx from 'clsx';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(roboto.className, 'flex flex-col justify-between min-h-screen')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
