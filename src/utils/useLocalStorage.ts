import {
  LOCAL_STORAGE_RELAY_RECORDS_KEY,
  LOCAL_STORAGE_USER_TOKEN_KEY,
} from '@oorsig/relay/environment';
  
type LocalStorageKey =
  | typeof LOCAL_STORAGE_RELAY_RECORDS_KEY
  | typeof LOCAL_STORAGE_USER_TOKEN_KEY;
  
export const useLocalStorage = () => {
  const getFromLocalStorage = (key: LocalStorageKey) => {
    if (typeof window === 'undefined') return null;
  
    const value = localStorage.getItem(key);
    return value;
  };
  
  const setInLocalStorage = (key: LocalStorageKey, value: string) => {
    if (typeof window === 'undefined') return false;
  
    localStorage.setItem(key, value);
    return true;
  };
  
  const removeFromLocalStorage = (key: LocalStorageKey) => {
    if (typeof window === 'undefined') return false;
  
    localStorage.removeItem(key);
    return true;
  };
  
  return { getFromLocalStorage, setInLocalStorage, removeFromLocalStorage };
};
