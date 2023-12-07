'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import VerificationCodeForm from './VerificationCodeForm';
import { pushVerificationCode } from '@/api/auth';
import { StyledLoginForm } from '@/styles/StyledLoginForm';
import { useSetRecoilState } from 'recoil';
import { loadingState } from '@/store/loadingState';

export default function SignInForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitVerificationCode, setIsSubmitVerificationCode] = useState(false);
  const setloadingState = useSetRecoilState(loadingState);

  const onChangePhoneNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value.replace(/\D/g, ''); // 숫자 이외의 문자 제거
    if (!/^[0-9]*$/.test(changedValue)) {
      return;
    }
    if (changedValue.length > 11) {
      return;
    }

    let formattedValue = '';
    if (changedValue.length > 3) {
      formattedValue = changedValue.slice(0, 3) + ' ' + changedValue.slice(3);
    }
    if (changedValue.length > 7) {
      formattedValue = formattedValue.slice(0, 8) + ' ' + formattedValue.slice(8);
    }
    setPhoneNumber(formattedValue || changedValue);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setloadingState(true);
    const res = await pushVerificationCode('01090011211');
    setloadingState(false);
    if (res) {
      setIsSubmitVerificationCode(true);
    }
  };

  return (
    <StyledLoginForm>
      {!isSubmitVerificationCode && (
        <>
          <p className="title">
            안녕하세요! <br /> 휴대폰 번호로 로그인해주세요.
          </p>
          <p className="description">휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요.</p>
        </>
      )}

      <form onSubmit={onSubmit}>
        <input
          className="phoneNumberInput"
          type="text"
          placeholder="휴대폰 번호 (- 없이 숫자만 입력)"
          value={phoneNumber}
          onChange={onChangePhoneNumberInput}
        />
        <button type="submit" className="phoneNumberSubmitButton" disabled={phoneNumber.length < 9}>
          인증문자 받기
        </button>
      </form>
      {isSubmitVerificationCode && <VerificationCodeForm />}
    </StyledLoginForm>
  );
}
