import { AGCError, ErrorCode, ConnectRet } from "@hw-agconnect/instance";
export declare class AGCAuthException extends AGCError {
    static constructExcpFromRet(ret: ConnectRet): AGCAuthException;
    constructor(errorCode: ErrorCode, e?: any);
}
