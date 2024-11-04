import type { IGetAllApplicationsByOwnerRequest } from "$lib/models/applications";
import applicationService from "$lib/services/application-service";


export function useApplication() {
    async function getAllApplicationsByOwner(filters: IGetAllApplicationsByOwnerRequest) {
        return await applicationService.getAllApplicationsByOwner(filters);
    }


    return { getAllApplicationsByOwner }
}