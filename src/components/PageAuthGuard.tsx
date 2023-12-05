'use client';

import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import { userState } from '@/store/userState';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

export default function PageAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useRecoilValue(userState);
  const authRequiredPaths = ['/'];
  const authNotRequiredPaths = ['/signIn'];

  const redirectToLogin = () => {
    authRequiredPaths.forEach((authRequiredPath) => {
      if (pathname.startsWith(authRequiredPath)) {
        router.push('/signIn');
      }
    });
  };

  const redirectToHome = () => {
    authNotRequiredPaths.forEach((authNotRequiredPath) => {
      if (pathname.startsWith(authNotRequiredPath)) {
        router.push('/');
      }
    });
  };

  useEffectAfterMount(() => {
    if (router && pathname) {
      user.isAuth ? redirectToHome() : redirectToLogin();
    }
  }, [router, pathname, user.isAuth]);

  return <>{children}</>;
}
