import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Home: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const clickSignOut = async () => {
    await signOut();
    router.replace('/');
  };
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      {session && <button onClick={() => clickSignOut()}>Sign Out</button>}
    </div>
  );
};
