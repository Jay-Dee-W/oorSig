import Head from 'next/head';
import React from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const URL = 'http://localhost:3000';
  return (
    <Head>
      <meta property="og:url" content={URL} />
      <meta name="description" content="Welcome to my Next.js app!" />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="OORSIG - Home" />
      <meta property="og:description" content="Welcome to OORSIG app!" />
      <meta property="og:image" content={`${URL}/oorsigIcon.png`} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OORSIG App" />
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/oorsigIcon.png" type="image/x-icon" />
      <meta name="robots" content="index, follow" />
      <title>{title} | OORSIG</title>
    </Head>
  );
};
