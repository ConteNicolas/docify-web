import type { ICreateApplicationRequest, IGetAllApplicationsByOwnerRequest, IGetAllApplicationsByOwnerResponse } from "$lib/models/applications";
import type { IPaginationList } from "$lib/models/pagination";
import type { AxiosError, AxiosResponse } from "axios";
import { ServiceBase } from "./service-base";
import type { ApiErrorResponse } from "$lib/models/api-error-response";
import { convertObjectToQueryString } from "$lib/utils";



export class ApplicationService extends ServiceBase {
    constructor() {
        super(true);
    }

    async getAllApplicationsByOwner(request: IGetAllApplicationsByOwnerRequest) : Promise<IPaginationList<IGetAllApplicationsByOwnerResponse> | ApiErrorResponse> {
        try {
            const queryString = convertObjectToQueryString(request);
            const response: AxiosResponse = await this.api.get('applications/owns' + '?' + queryString);
            return response?.data;
        } catch (err: unknown) {
            const error = (err as AxiosError).response?.data || { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred' };
            console.log("Error auth service, ", error);
            return error as ApiErrorResponse;
        }
    }

    async createApplication(request: ICreateApplicationRequest) : Promise<string | ApiErrorResponse> { 
        try {
            const response: AxiosResponse = await this.api.post('applications', request);
            return response?.data;
        } catch (err: unknown) {
            const error = (err as AxiosError).response?.data || { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred' };
            console.log("Error auth service, ", error);
            return error as ApiErrorResponse;
        }
    }
}

const applicationService = new ApplicationService();

export default applicationService;