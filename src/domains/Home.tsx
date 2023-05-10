import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export const Home: React.FC = () => {

  const {data:session} = useSession()

  if (session) {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      
      <button onClick={() => signOut() }>Sign Out</button>
    </div>
  );
  }
  return (
    <div className="App">
    <h1>GITSTART HOME PAGE</h1>
    
    <button onClick={() => signIn() }>Sign In</button>
  </div>
);
  
};
