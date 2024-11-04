


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
    description: string;
    tag: string[];
    accessLevel: ApplicationAccessLevel;
    accessLevelDescription: string;
}

export interface IGetAllApplicationsByOwnerRequest {
    name?: string;
    tag?: string;
    accessLevel?: ApplicationAccessLevel;
    pageNumber: number;
    pageSize: number;
}


