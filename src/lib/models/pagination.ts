


export interface IPaginationList<T> {
    items: T[];
    pageNumber: number;
    totalCount: number;
    totalPages: number;
}