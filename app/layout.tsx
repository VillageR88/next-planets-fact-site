import './globals.css';
import type { Metadata } from 'next';
import { Antonio, League_Spartan } from 'next/font/google';
import Image from 'next/image';
import backgroundImage from '@/public/assets/starter-code/assets/background-stars.svg';
import { ReactNode } from 'react';
import DataProvider from './_lib/DataContext';
import Navbar from './home/navbar';

const antonio = Antonio({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-antonio',
  subsets: ['latin'],
});

const leagueSpartan = League_Spartan({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-league-spartan',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Planets fact site',
  description: 'Planets fact site',
  applicationName: 'Planets fact site',
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
      <body
        className={`${antonio.variable} ${leagueSpartan.variable} mx-auto w-full max-w-[90em] overflow-x-clip bg-[#070724]`}
      >
        <Image className="absolute -z-10 object-cover" fill src={backgroundImage as string} alt="background image" />
        <>
          <Navbar />
          <DataProvider>{children}</DataProvider>
        </>
      </body>
    </html>
  );
}
