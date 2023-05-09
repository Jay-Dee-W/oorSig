import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export const AuthGateway: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const {data:session} = useSession()
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // if not on the Auth page, then we let ErrorBoundary handle it
    if (router.asPath !== '/') {
      setAuthLoading(false);
      return;
    }
    if (!useSession) {
      setAuthLoading(true);
      return;
    }
      if (session?.user?.name) {
        router.replace(`/home`);
      }
      setAuthLoading(false)
  }, [router, session?.user?.name]);

  if (authLoading) {
    return <p>loading</p>;
  }

  return <>{children}</>;
};