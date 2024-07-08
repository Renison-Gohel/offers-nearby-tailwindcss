import * as React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import FixedBottomNavigation from '@/components/BottomNavigation';
import ResponsiveAppBar from '@/components/AppBar';

const font = IBM_Plex_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveAppBar/>
        {props.children}
        <FixedBottomNavigation/>
      </body>
    </html>
  );
}
