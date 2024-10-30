import { getContext, hasContext, setContext } from "svelte";


interface IStoreFactory {
    create: () => any;
}

class StorageManager {
    private registry: Map<string | Symbol, any> = new Map();

    registerStore(key: string | Symbol, factory: IStoreFactory) {
        if (this.registry.has(key)) {
            console.warn(`Store with key ${key} already exists`);
            return;
        }

        const instance = factory.create();
        this.registry.set(key, instance);
        setContext(key, instance);
    }

    getStore<T>(key: string | Symbol): T { 
        if (!this.registry.has(key) && !hasContext(key)) {
            throw new Error(`Store with key ${key} does not exist`);
        }

        return getContext<T>(key);
    }
}

const storeManager = new StorageManager();
export default storeManager;