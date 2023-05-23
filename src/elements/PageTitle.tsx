import Head from 'next/head';
import React from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Head>
      <link rel="icon" href="/oorsigIcon.png" type="image/x-icon" />
      <title>{title} | OORSIG</title>
    </Head>
  );
};
