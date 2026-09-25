export type TJsonRes<T> = {
    success: boolean;
    message: string;
    data: T;
}

export type TResponse <T> = {
    status: number;
    jsonRes: TJsonRes<T>;
}