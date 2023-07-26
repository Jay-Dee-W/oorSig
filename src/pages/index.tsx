import type { NextPage } from 'next';
import { LandingPage } from '@domains/LandingPage';
import { Page } from '@oorsig/atoms';

const AuthPage: NextPage = () => {
  return (
    <>
      <Page title="Home">
        <LandingPage />
      </Page>
    </>
  );
};

export default AuthPage;
