import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@xstyled/emotion';

interface ExtendedTheme {
  breakpoints: {
    [key: string]: number;
  };
}
const useMobileView = () => {
  const theme = useTheme() as ExtendedTheme;
  const [isMobileView, setIsMobileView] = useState(false);

  const checkMobileView = useCallback(() => {
    setIsMobileView(window.innerWidth <= (theme.breakpoints?.['lg'] ?? 0));
  }, [theme.breakpoints]);

  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, [checkMobileView]);

  return isMobileView;
};

export default useMobileView;
