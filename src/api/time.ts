/* ----------------------------- 예시 --------------------------- */
export const getTime = async (location: string): Promise<any> => {
  const res = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=Asia/${location}`, {
    next: {
      tags: ['time'],
    },
    // 기본적으로 { cache: 'force-cache' }이 default로 설정되어 있음 (SSG)
    // 옵션으로 cache: 'no-store'으로 설정할 수 있음 (SSR일 때) (현재 이 옵션 추가해야 함)
  });

  if (!res.ok) {
    throw new Error('시간 정보를 가져올 수 없습니다.');
  }

  return res.json();
};
