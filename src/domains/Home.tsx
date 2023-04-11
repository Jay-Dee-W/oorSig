import React from 'react';

import { Button } from '@oorsig/atoms';
import { GitHub} from '@oorsig/assets/images/icons';

export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>

      <div style={{margin:" 10px 50px"}}>
        <Button icon={<GitHub/>} >primary</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='secondary'>secondary</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='success'>success</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='danger'>danger</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='light'>light</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub />} disabled={true} >disabled</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub />} loading={true} >primary</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='light' loading={true}>light</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button>NoIcon</Button>
      </div>
      <div style={{ margin: " 10px 50px" }}>
        <Button icon={<GitHub/>} w='352px' >Login with Github</Button>
      </div>
      <div style={{ margin: " 10px 50px" }}>
        <Button icon={<GitHub/>} w='194px' >primary</Button>
      </div>
      <div style={{ margin: " 10px 50px" }}>
        <Button icon={<GitHub/>} size='xl' >primary</Button>
      </div>
      <div style={{ margin: " 10px 50px" }}>
        <Button icon={<GitHub/>} borderRadius='none' >primary</Button>
      </div>
      <div style={{margin:"10px 50px"}}>
        <Button icon={<GitHub/>} variant='light' >light</Button>
      </div>
    </div>
  );
};
