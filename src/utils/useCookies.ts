import { get, set, remove } from 'es-cookie';

import { LOCAL_STORAGE_USER_TOKEN_KEY } from '@oorsig/relay/environment';

type CookieKeys = typeof LOCAL_STORAGE_USER_TOKEN_KEY;

export const useCookies = () => {
  const getCookie = (key: CookieKeys) => {
    if (typeof window === 'undefined') return null;

    const value = get(key);
    return value;
  };

  const setCookie = (key: CookieKeys, value: string) => {
    if (typeof window === 'undefined') return false;

    set(key, value);
    return true;
  };

  const removeCookie = (key: CookieKeys) => {
    if (typeof window === 'undefined') return false;

    remove(key);
    return true;
  };

  return {
    getCookie,
    setCookie,
    removeCookie,
  };
};
