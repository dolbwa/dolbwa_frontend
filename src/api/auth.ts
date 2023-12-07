import fetchInterceptor from '@/hooks/fetchInterceptor';
import { toast } from 'react-toastify';

export const pushVerificationCode = async (phoneNumber: string): Promise<boolean> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      toPhoneNumber: process.env.NEXT_PUBLIC_TO_PHONE_NUMBER,
      accountSid: process.env.NEXT_PUBLIC_ACCOUNT_SID,
      authToken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
      fromPhoneNumber: process.env.NEXT_PUBLIC_FRON_PHONE_NUMBER,
    }),
    cache: 'no-store',
  };

  const res = await fetchInterceptor('/send-sms', options);

  if (!res.success) {
    toast.error('인증코드 전송이 실패하였습니다.', {
      autoClose: 4000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return false;
  }

  toast.success('인증코드가 전송되었습니다.', {
    autoClose: 4000,
    theme: 'dark',
    position: toast.POSITION.BOTTOM_CENTER,
  });
  return true;
};
