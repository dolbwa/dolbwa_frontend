import { toast } from 'react-toastify';

const fetchInterceptor = async (apiUrl: string, options: any) => {
  // 요청 전
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiUrl}`, defaultOptions);

    // 요청 후 실패
    if (!res.ok) {
      throw new Error();
    }

    // 요청 후 성공
    const data = await res.json();
    return data;
  } catch (error) {
    // 요청 후 실패
    toast.error('오류가 발생했습니다.', {
      autoClose: 4000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return false;
  }
};

export default fetchInterceptor;
