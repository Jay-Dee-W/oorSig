import { RelayEnvironmentProvider } from '@oorsig/relay/environment';
// import { AuthGateway } from '@oorsig/elements/AuthGateway';
import { ErrorBoundary } from '@oorsig/elements/ErrorBoundary';
import { NoSsr } from '@oorsig/elements/NoSsr';
import { StyledProvider } from '@oorsig/elements/StyledProviders';

// Providers + any other wrapper
export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledProvider>
      <ErrorBoundary>
        <RelayEnvironmentProvider>
          <NoSsr>
            {children}
          </NoSsr>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </StyledProvider>
  );
};
