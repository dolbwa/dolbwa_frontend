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
    const isAuthRequired = authRequiredPaths.some((path) => pathname.startsWith(path));
    if (isAuthRequired) {
      router.push('/signIn');
      // toast.error('로그인을 해주세요.', {
      //   autoClose: 4000,
      //   theme: 'dark',
      //   position: toast.POSITION.BOTTOM_CENTER,
      // });
    }
  };

  const redirectToHome = () => {
    const isAuthNotRequired = authNotRequiredPaths.some((path) => pathname.startsWith(path));
    if (isAuthNotRequired) {
      router.push('/');
    }
  };

  useEffectAfterMount(() => {
    user.isAuth ? redirectToHome() : redirectToLogin();
  }, [user]);

  return <>{children}</>;
}
