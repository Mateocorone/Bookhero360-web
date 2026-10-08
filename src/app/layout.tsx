import HideOnApp from '@/components/shared/HideOnApp';
import ScrollProgress from '@/components/shared/ScrollProgress';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { AppContextProvider } from '@/context/AppContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${interTight.variable} bg-white antialiased`}>
        <AppContextProvider>
          <Suspense>
            <SmoothScrollProvider>
              <ScrollProgress />
              <HideOnApp>
                <Navbar />
              </HideOnApp>
              {children}
              <HideOnApp>
                <Footer />
              </HideOnApp>
            </SmoothScrollProvider>
          </Suspense>
        </AppContextProvider>
      </body>
    </html>
  );
}
