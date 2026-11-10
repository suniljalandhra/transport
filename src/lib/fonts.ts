import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

// Inter is the brand heading/header typeface (kept from the original site).
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const bankGothic = localFont({
  src: '../fonts/BANKGOTHIC_MEDIUM_BT.ttf',
  variable: '--font-bankgothic',
  display: 'swap',
});
