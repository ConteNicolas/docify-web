


export interface ICurrentUser {
    id: string; 
    firstName: string; 
    lastName: string;
    email: string;
} 


export interface IGetMeResponse extends ICurrentUser {}