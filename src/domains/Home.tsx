import { StatusBadge } from '@oorsig/atoms';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      <div style={{display:"inline-flex", gap:5}}>
	<StatusBadge  size='xl' />
	<StatusBadge  size='md' />
	<StatusBadge  size='xs' />
	<StatusBadge  size='lg' />
	<StatusBadge  size='sm' />
</div>
    </div>
  );
};
