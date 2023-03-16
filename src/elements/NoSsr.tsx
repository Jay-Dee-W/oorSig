import dynamic from 'next/dynamic';
import React from 'react';

interface NoSsrProps {
  children: React.ReactNode;
}

const NoSsrComp: React.FC<NoSsrProps> = props => <>{props.children}</>;

export const NoSsr = dynamic(() => Promise.resolve(NoSsrComp), {
  ssr: false,
});
