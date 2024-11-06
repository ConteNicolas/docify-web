import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ApiErrorResponse } from "./models/api-error-response";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const isApiErrorResponse = (data: unknown): data is ApiErrorResponse => {
    return typeof data === 'object' && data !== null && 'code' in (data as ApiErrorResponse) && 'message' in (data as ApiErrorResponse);
}

export function convertObjectToQueryString(obj: any) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

export function getAvatarName(firstName: string | undefined, lastName: string | undefined) {
    if (!firstName || !lastName) {
        return 'N/A';
    }

    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}