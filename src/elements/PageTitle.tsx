import Head from 'next/head';
import React from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const URL = process.env.NEXTAUTH_URL;
  return (
    <Head>
      <meta property="og:url" content={URL} />
      <meta
        name="description"
        content="Unlock the power of oorSig by Gitstart – your all-in-one solution for accessing and visualizing all your Github metrics. Simplify your workflow by seamlessly exporting data for in-depth analysis, and supercharge your productivity like never before."
      />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content={`${title} | OORSIG`} />
      <meta
        property="og:description"
        content="Unlock the power of oorSig by Gitstart – your all-in-one solution for accessing and visualizing all your Github metrics. Simplify your workflow by seamlessly exporting data for in-depth analysis, and supercharge your productivity like never before."
      />
      <meta property="og:image" content={`${URL}/oorsigIcon.png`} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OORSIG App" />
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="robots" content="index, follow" />
      <title>{title} | OORSIG</title>
    </Head>
  );
};
