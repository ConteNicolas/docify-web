export class LoadingSpinnerStore {
    public isLoading: boolean = $state(false);

    constructor() {

    }

    public setLoading(value: boolean) {
        this.isLoading = value;
    }
}

export const loadingSpinnerStoreFactory= {
    create: () => new LoadingSpinnerStore()
}