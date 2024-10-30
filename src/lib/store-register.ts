import { AUTH_KEY } from "./store-keys";
import storeManager from "./store-manager";
import { authStoreFactory } from "./stores/auth-store.svelte";

export function registerAllStores() {
    storeManager.registerStore(AUTH_KEY, authStoreFactory);
}