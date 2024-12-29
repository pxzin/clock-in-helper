import type { StorageAdapter } from './StorageAdapter';
import { ChromeStorageAdapter } from './ChromeStorageAdapter';
import { LocalStorageAdapter } from './LocalStorageAdapter';

export const createStorageAdapter = (): StorageAdapter => {
  if (typeof chrome !== 'undefined' && chrome.storage) {
    return new ChromeStorageAdapter();
  } else {
    return new LocalStorageAdapter();
  }
};
