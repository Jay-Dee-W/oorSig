import { x } from '@xstyled/emotion';
import React from 'react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ReactErrorBoundary>
  );
};

const FallbackComponent: React.FC<FallbackProps> = ({ error }) => {
  return (
    <x.div
      minH={64}
      h="full"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {error.message}
    </x.div>
  );
};
