import storeManager from "$lib/store-manager";

export function useStore<T>(key: string | Symbol): T {
    return storeManager.getStore<T>(key);
}