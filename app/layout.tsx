import './globals.css';
import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import Layout from '@/app/components/layout';

import { ReactNode } from 'react';
import DataProvider from './_lib/DataContext';

const libreBaskerville = Libre_Baskerville({
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Galleria slideshow site',
  description: 'Galleria slideshow site',
  applicationName: 'Galleria slideshow site',
} as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body className={`${libreBaskerville.variable} mx-auto w-full max-w-[90em] overflow-x-clip bg-[#FFFFFF]`}>
        <DataProvider>
          <Layout>{children}</Layout>
        </DataProvider>
      </body>
    </html>
  );
}
