import { ErrorBoundary } from '@elements/ErrorBoundary';
import { NoSsr } from '@elements/NoSsr';
import { RelayEnvironmentProvider } from '@relay/environment';
import { StyledProvider } from '@elements/StyledProviders';
import { AuthGateway } from './AuthGateway';

// Providers + any other wrapper
export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledProvider>
      <ErrorBoundary>
        <RelayEnvironmentProvider>
          <NoSsr>
            <AuthGateway>{children}</AuthGateway>
          </NoSsr>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </StyledProvider>
  );
};
