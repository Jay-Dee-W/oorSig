import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const withAuth = (WrappedComponent: React.ComponentType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    if (!session) {
      router.replace('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
