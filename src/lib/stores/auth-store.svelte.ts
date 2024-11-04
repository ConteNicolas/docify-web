import { browser } from "$app/environment";
import type { ApiErrorResponse } from "$lib/models/api-error-response";
import type { ISignInRequest, ISignUpRequest } from "$lib/models/authentication";
import type { ICurrentUser } from "$lib/models/user";
import authenticationService from "$lib/services/auth-service";
import userService from "$lib/services/user-service";
import { isApiErrorResponse } from "$lib/utils";

export class AuthStore {
    public isAuthenticated: boolean = $state(false);
    public currentUser: ICurrentUser | null = $state(null);

    constructor() {
        this.isAuthenticated = browser && localStorage.getItem("token") !== null;
    }

    public async signIn(request: ISignInRequest): Promise<string | ApiErrorResponse> {
        var response = await authenticationService.signIn(request);

        if (isApiErrorResponse(response)) {
            this.isAuthenticated = false;
            return response as ApiErrorResponse;
        }

        this.isAuthenticated = true;

        let token = response as string;

        localStorage.setItem("token", token);

        return token;
    }

    public async signUp(request: ISignUpRequest): Promise<string | ApiErrorResponse>  {
        var response = await authenticationService.signUp(request);

        if (isApiErrorResponse(response)) {
            return response as ApiErrorResponse;
        }

        return response as string;
    }

    public async signOut(onSignout: () => Promise<void>): Promise<void> {
        localStorage.removeItem("token");
        this.isAuthenticated = false;

        await onSignout();
    }

    public async setCurrentUser() {
        if (this?.isAuthenticated && this.currentUser) {
            return;
        }

        const response = await userService.getMe();

        if (isApiErrorResponse(response)) {
            return response as ApiErrorResponse;
        }

        this.currentUser = response;

        console.log("Current user 👤 ", this.currentUser);
    }
}

export const authStoreFactory= {
    create: () => new AuthStore()
}