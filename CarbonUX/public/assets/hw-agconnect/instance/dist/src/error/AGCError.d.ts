export interface ErrorCode {
    code: number;
    message: string;
}
export declare class AGCError extends Error {
    private static readonly COLON;
    private static readonly COMMA;
    private static readonly DASH;
    code: number;
    message: string;
    msg: string;
    constructor(errorCode: ErrorCode, e?: any, moduleName?: string);
}
