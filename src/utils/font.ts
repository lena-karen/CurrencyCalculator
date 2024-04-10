import { Source_Sans_3 } from 'next/font/google';

export const font_source_sans = Source_Sans_3({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-source-sans',
  weight: ['400', '700'],
  // fallback: ['Georgia', 'Times New Roman', 'Times', 'serif'],
});

export const source_sans = font_source_sans.variable;
