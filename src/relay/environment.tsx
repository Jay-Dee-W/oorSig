import React from 'react';
import { Environment, Store, RecordSource } from 'relay-runtime';
import { RelayEnvironmentProvider as RelayRelayEnvironmentProvider } from 'react-relay';
import 'regenerator-runtime/runtime'; // required for react-relay-network-modern
import {
  RelayNetworkLayer,
  cacheMiddleware,
  urlMiddleware,
  authMiddleware,
} from 'react-relay-network-modern';

export const LOCAL_STORAGE_USER_TOKEN_KEY =
  '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';
export const LOCAL_STORAGE_RELAY_RECORDS_KEY = 'relay_records';

export const environment = new Environment({
  network: new RelayNetworkLayer([
    cacheMiddleware(),
    urlMiddleware({
      url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      headers: {
        accept: 'application/json',
      },
    }),
    authMiddleware({
      // this middleware automatically adds 'Bearer ' at the start of the Authorization header
      token: () =>
        // window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY) ?? '',
        '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',
    }),
    next => async req => {
      const res = await next(req);
      setTimeout(() => {
        const records = environment.getStore().getSource();
        localStorage.setItem(
          LOCAL_STORAGE_RELAY_RECORDS_KEY,
          JSON.stringify(records)
        );
      }, 10);
      return res;
    },
  ]),
  store: new Store(getInitialRecords()),
});

function getInitialRecords(): RecordSource {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_RELAY_RECORDS_KEY);
    if (!raw) return new RecordSource();
    return new RecordSource(JSON.parse(raw));
  } catch {
    return new RecordSource();
  }
}

export interface RelayEnvironmentProviderProps {
  children: React.ReactNode;
}

export const RelayEnvironmentProvider = (
  props: RelayEnvironmentProviderProps
) => {
  return (
    <RelayRelayEnvironmentProvider environment={environment}>
      {props.children}
    </RelayRelayEnvironmentProvider>
  );
};
