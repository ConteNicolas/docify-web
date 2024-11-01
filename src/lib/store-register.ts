import { AUTH_KEY, LOADING_SPINNER_KEY } from "./store-keys";
import storeManager from "./store-manager";
import { authStoreFactory } from "./stores/auth-store.svelte";
import { loadingSpinnerStoreFactory } from "./stores/loading-spinner-store.svelte";

export function registerAllStores() {
    storeManager.registerStore(AUTH_KEY, authStoreFactory);
    storeManager.registerStore(LOADING_SPINNER_KEY, loadingSpinnerStoreFactory);
}