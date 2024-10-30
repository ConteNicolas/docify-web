import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ApiErrorResponse } from "./models/api-error-response";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const isApiErrorResponse = (data: unknown): data is ApiErrorResponse => {
    return typeof data === 'object' && data !== null && 'code' in (data as ApiErrorResponse) && 'message' in (data as ApiErrorResponse);
}