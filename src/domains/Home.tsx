import React from 'react';
import { Input } from '@oorsig/atoms';
import { SearchIcon } from '@oorsig/assets/images/icons';
export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      <Input icon={<SearchIcon />} />
    </div>
  );
};
