import { atom } from 'recoil';

interface UserStateType {
  isAuth?: boolean;
}

export const userState = atom<UserStateType>({
  key: 'userState',
  default: {
    // 인증 성공시 isAuth값 넣어줘야 함  // isAuth: false,
  },
});
