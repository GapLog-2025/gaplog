// 예시 hook 코드 입니다.

import { useEffect } from "react";

export const useScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
