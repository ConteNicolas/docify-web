import type { ApiErrorResponse } from "$lib/models/api-error-response";
import type { ISignInRequest, ISignUpRequest } from "$lib/models/authentication";
import type { AxiosError, AxiosResponse } from "axios";
import { ServiceBase } from "./service-base";

export class AuthenticationService extends ServiceBase {
    constructor() {
        super(false);
    }

    async signIn(request: ISignInRequest): Promise<string | ApiErrorResponse> {
        try {
            const response: AxiosResponse = await this.api.post<string>('users/sign-in', request);
            return response?.data;
        } catch (err: unknown) {
            console.log(err);
            const error = (err as AxiosError).response?.data || { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred' };
            console.log("Error auth service, ", error);
            return error as ApiErrorResponse;
        }
    }

    async signUp(request: ISignUpRequest): Promise<string | ApiErrorResponse> {
        try {
            const response: AxiosResponse = await this.api.post<string>('users/sign-up', request);
            return response?.data;
        } catch (err: unknown) {
            const error = (err as AxiosError).response?.data || { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred' };
            return error as ApiErrorResponse;
        }
    }
}

const authenticationService = new AuthenticationService();

export default authenticationService;