import { useEffect, useRef, DependencyList } from 'react';

const useEffectAfterMount = (effect: () => void, dependencies: DependencyList): void => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      effect();
    } else {
      hasMounted.current = true;
    }
  }, dependencies);
};

export default useEffectAfterMount;
