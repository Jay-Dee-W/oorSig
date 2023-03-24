import { useState } from 'react';
import { fetchQuery, graphql } from 'react-relay';
import { useRouter } from 'next/router';

import { environment } from '@relay/environment';
import { useAuthQuery as useAuthQueryType } from '@relay/__generated__/useAuthQuery.graphql';
import { useLocalStorage } from '@utils/useLocalStorage';

const useAuthQuery = graphql`
  query useAuthQuery {
    viewer {
      name
    }
  }
`;

export const useAuth = () => {
  const router = useRouter();
  const { auth_error } = router.query;
  const { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } =
    useLocalStorage();
  const [authError, setAuthError] = useState<string | null>(auth_error ?? null);
  const [loggingOut, setLoggingOut] = useState(false);
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  const emailLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const result = await fetch(
        `https://api.github.com/graphql`,
        {
          method: 'POST',
          headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email,
              password,
            },
          }),
        }
      );
console.log("result:", result)

      if (!result.ok) {
        throw 'Something went wrong. Please try again.';
      }

      const data = await result.json();

      if (data.error) {
        throw data.error;
      }

      setInLocalStorage('user_token', data.token);

      const queryRes = await getClientUsers();

      if (!queryRes) {
        throw 'Something went wrong. Please check your internet connection.';
      } else if (!queryRes.viewer) {
        throw 'Something went wrong. Please login again.';
      } else if (!queryRes.viewer.name) {
        throw 'You do not have access. Please contact support.';
      }

      router.push(`/home`);
    } catch (err: any) {
      if (
        err instanceof Error ||
        (typeof err === 'object' && 'message' in err)
      ) {
        setAuthError(err.message);
      } else if (typeof err === 'string') {
        setAuthError(err);
      } else {
        setAuthError(JSON.stringify(err));
      }
    }
  };

  const googleAuth = async () => {
    router.push('/api/google');
  };

  const logout = async () => {
    setLoggingOut(true);
    try {
      const token = getFromLocalStorage('user_token');
      const reuslt = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/log_out`,
        {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!reuslt.ok) {
        throw 'Something went wrong. Please try again.';
      }

      const data = await reuslt.json();

      if (data.error) {
        throw data.error;
      }

      if (data.logout.success) {
        removeFromLocalStorage('user_token');
        removeFromLocalStorage('relay_records');

        router.push('/');
      }
    } catch {}
    setLoggingOut(false);
  };

  return { emailLogin, googleAuth, logout, authError, loggingOut };
};

export async function getClientUsers() {
  return fetchQuery<useAuthQueryType>(
    environment,
    useAuthQuery,
    {}
  ).toPromise();
}
 