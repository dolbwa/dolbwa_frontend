'use client';

import { FormEvent, useState } from 'react';
import { StyledVerificationCodeForm } from '@/styles/StyledVerificationCodeForm';

export default function VerificationCodeForm() {
  const [verificationCode, setVerificationCode] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <StyledVerificationCodeForm onSubmit={onSubmit}>
      <input
        className="verificationCodeInput"
        autoFocus
        type="text"
        placeholder="인증번호 입력"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <p className="description">어떠한 경우에도 타인에게 공유하지 마세요!</p>
      <button disabled={verificationCode.length === 0} className="verificationCodeSubmitButton" type="submit">
        인증번호 확인
      </button>
    </StyledVerificationCodeForm>
  );
}
