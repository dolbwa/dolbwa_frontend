'use client';

import { loadingState } from '@/store/loadingState';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { StyledSpinnerLoading } from '@/styles/StyledSpinnerLoading';

export default function SpinnerLoading() {
  const isLoading = useRecoilValue(loadingState);

  if (isLoading) {
    return (
      <StyledSpinnerLoading>
        <p>잠시만 기다려 주세요.</p>
        <Image src="/images/spinner.gif" width={50} height={50} alt="로딩중" />
      </StyledSpinnerLoading>
    );
  }

  return <></>;
}
