import { RelayEnvironmentProvider } from '../relay/environment';
// import { AuthGateway } from '../elements/AuthGateway';
import { ErrorBoundary } from '../elements/ErrorBoundary';
import { NoSsr } from '../elements/NoSsr';
import { StyledProvider } from '../elements/StyledProviders';

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
