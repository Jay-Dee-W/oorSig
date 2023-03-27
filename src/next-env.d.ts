/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare namespace NodeJS {
  interface ProcessEnv {
    // NextJS env variables
    readonly NODE_ENV: 'development' | 'production' | 'test';

    // Custom env variables
    readonly NEXT_PUBLIC_GRAPHQL_URL: string; // this is the line you want
    readonly BACKEND_URL: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_REDIRECT_URI: string;
  }
}

declare module 'querystring' {
  interface ParsedUrlQuery {
    auth_error?: string;
    ticketCodePrefix: string;
    ticketCode: string;
  }
}
