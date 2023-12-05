'use client';

import Image from 'next/image';
import { StyledLogoLoading } from '@/styles/StyledLogoLoading';

export default function LogoLoading() {
  return (
    <StyledLogoLoading>
      <Image src="/images/dolbwa_logo.png" alt="로고" width={120} height={120} />
    </StyledLogoLoading>
  );
}
