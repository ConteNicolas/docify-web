import type { ApiErrorResponse } from "$lib/models/api-error-response";
import type { ICreateApplicationRequest, IGetAllApplicationsByOwnerRequest } from "$lib/models/applications";
import applicationService from "$lib/services/application-service";
import { isApiErrorResponse } from "$lib/utils";


export function useApplication() {
    async function getAllApplicationsByOwner(filters: IGetAllApplicationsByOwnerRequest) {
        return await applicationService.getAllApplicationsByOwner(filters);
    }

    async function createApplication(request: ICreateApplicationRequest) {
        const response = applicationService.createApplication(request);

        if (isApiErrorResponse(response)) {
            return response as ApiErrorResponse;
        }

        return response;
    }


    return { getAllApplicationsByOwner, createApplication }
}