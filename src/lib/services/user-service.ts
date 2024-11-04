import type { ApiErrorResponse } from "$lib/models/api-error-response";
import type { IGetMeResponse } from "$lib/models/user";
import type { AxiosError, AxiosResponse } from "axios";
import { ServiceBase } from "./service-base";


export class UserService extends ServiceBase {
    constructor() {
        super(true);
    }

    async getMe(): Promise<IGetMeResponse | ApiErrorResponse> {
        try {
            const response: AxiosResponse = await this.api.get<IGetMeResponse>('users/me');
            return response?.data;
        } catch (err: unknown) {
            const error = (err as AxiosError).response?.data || { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred' };
            return error as ApiErrorResponse;
        }
    }
}

const userService = new UserService();

export default userService;