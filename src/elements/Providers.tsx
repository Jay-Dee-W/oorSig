import { ErrorBoundary } from '@elements/ErrorBoundary';
import { NoSsr } from '@elements/NoSsr';
import { RelayEnvironmentProvider } from '@relay/environment';
import { StyledProvider } from '@elements/StyledProviders';

// Providers + any other wrapper
export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledProvider>
      <ErrorBoundary>
        <RelayEnvironmentProvider>
          <NoSsr>{children}</NoSsr>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </StyledProvider>
  );
};
