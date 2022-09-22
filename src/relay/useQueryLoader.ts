import { OperationType } from 'relay-runtime';
import {
  GraphQLTaggedNode,
  PreloadableConcreteRequest,
  PreloadedQuery,
  useQueryLoader as useRelayQueryLoader,
  UseQueryLoaderLoadQueryOptions,
} from 'react-relay';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useQueryLoader<TQuery extends OperationType>(
  preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
  variables: TQuery['variables'],
  loadQueryOptions?: UseQueryLoaderLoadQueryOptions,
  initialQueryReference?: PreloadedQuery<TQuery> | null
) {
  const router = useRouter();

  const [queryRef, loadQuery, disposeQuery] = useRelayQueryLoader(
    preloadableRequest,
    initialQueryReference
  );

  useEffect(() => {
    // checking for router.isReady ensures that router.query (the object containing the params in the path) is not empty
    if (router.isReady) {
      loadQuery(variables, loadQueryOptions);
    }

    return () => {
      disposeQuery();
    };
  }, [router.isReady]);

  return { queryRef, loadQuery };
}
