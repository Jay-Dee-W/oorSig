import { useEffect, useState } from 'react';
import { ViewSpinner } from '@amani/elements/ViewSpinner';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@amani/utils/useLocalStorage';
import { getClientUsers } from '@amani/utils/useAuth';
import { useCookies } from '@amani/utils/useCookies';

export const AuthGateway: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { getFromLocalStorage, setInLocalStorage } = useLocalStorage();
  const { getCookie, removeCookie } = useCookies();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // if not on the Auth page, then we let ErrorBoundary handle it
    if (router.asPath !== '/') {
      setAuthLoading(false);
      return;
    }

    const userTokenFromCookies = getCookie('user_token');
    if (userTokenFromCookies) removeCookie('user_token');

    const userToken = getFromLocalStorage('user_token') || userTokenFromCookies;
    if (!userToken || userToken === 'undedfined') {
      setAuthLoading(false);
      return;
    }
    setInLocalStorage('user_token', userToken);

    getClientUsers().then(data => {
      if (data?.viewer?.name) {
        router.replace(`/home`);
      }
      setAuthLoading(false);
    });
  }, []);

  if (authLoading) {
    return <ViewSpinner />;
  }

  return <>{children}</>;
};