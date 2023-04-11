import { GitHub } from '@oorsig/assets/images/icons';
import { Button } from '@oorsig/atoms';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub />} loading={true} >primary</Button>
      </div>
    </div>
  );
};
