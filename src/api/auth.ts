import { toast } from 'react-toastify';

export const pushVerificationCode = async (phoneNumber: string): Promise<any> => {
  try {
    const res = await fetch('https://dolbwa.duckdns.org/api/send-sms/1111', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone_number: phoneNumber }),
      cache: 'no-store',
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
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
    return data;
  } catch (error) {
    toast.error('인증코드 전송이 실패하였습니다.', {
      autoClose: 4000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return false;
  }
};
