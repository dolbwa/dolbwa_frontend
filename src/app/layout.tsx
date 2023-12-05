import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RecoilRootProvider from '@/components/RecoilRootProvider';
import SpinnerLoading from '@/components/SpinnerLoading';
import PageAuthGuard from '@/components/PageAuthGuard';
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dolbwa',
  description: '반려견 돌봄 서비스입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilRootProvider>
          <PageAuthGuard>
            <StyledComponentsRegistry>
              {children}
              <SpinnerLoading />
              <ToastContainer />
            </StyledComponentsRegistry>
          </PageAuthGuard>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
