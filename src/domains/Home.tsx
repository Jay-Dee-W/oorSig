import React from 'react';
import { signOut } from 'next-auth/react'; 

export const Home: React.FC = () => {

  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
  
  
};
