import { useSession, signIn } from 'next-auth/react';

export const AuthGateway: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    signIn();
    return null;
  }

  return <>{children}</>;
};
