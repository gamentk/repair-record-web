export interface IResponse<T = {}> {
    message: string;
    isSuccess: boolean;
    result?: T
}