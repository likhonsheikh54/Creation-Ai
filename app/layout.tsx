import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = localFont({
  src: '../assets/fonts/MonaspaceNeon-Regular.woff2',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Creation AI Platform',
  description: 'Next-generation AI-powered development platform',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}