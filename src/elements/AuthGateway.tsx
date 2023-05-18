import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';


export const AuthGateway: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (router.asPath !== '/') {
      setAuthLoading(false);
      return;
    }
    if (!session) {
      setAuthLoading(false);
      return;
    }
    if (session?.user?.name) {
      router.replace(`/home`);
    }
    setAuthLoading(false);
  }, [router, session]);

  if (authLoading) {
    return <p>loading</p>;
  }

  return <>{children}</>;
};
