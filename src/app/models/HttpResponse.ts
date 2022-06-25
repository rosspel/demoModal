
export interface HttpResponse<T> {
    status: string;
    data: T;
    date: Date;
    error?: string;
}