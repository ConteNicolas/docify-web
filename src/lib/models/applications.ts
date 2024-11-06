
export enum ApplicationType {
    Personal = 1,
    Organization = 2
}

export enum ApplicationAccessLevel {
    Public = 1,
    Private = 2
}

export const ApplicationAccessLevelList: Array<{ value: ApplicationAccessLevel, label: string }> = [
    { value: ApplicationAccessLevel.Public, label: 'Public' },
    { value: ApplicationAccessLevel.Private, label: 'Private' }
]

export interface IGetAllApplicationsByOwnerResponse {
    id: string;
    name: string;
    accessLevel: ApplicationAccessLevel;
    accessLevelDescription: string;
    type: ApplicationType;
    lastPublicationDate: string | undefined;
}

export interface IGetAllApplicationsByOwnerRequest {
    name?: string;
    tag?: string;
    accessLevel?: ApplicationAccessLevel;
    pageNumber: number;
    pageSize: number;
}


export interface ICreateApplicationRequest {
    name: string;
    description: string;
    userId: string;
    accessLevel: ApplicationAccessLevel
    tags: string[];
    applicationType: ApplicationType
    organizationId?: string;
}