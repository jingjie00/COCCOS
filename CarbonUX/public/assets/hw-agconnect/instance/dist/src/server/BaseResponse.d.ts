import { ConnectRet } from "./ConnectRet";
export declare class BaseResponse {
    ret: ConnectRet;
    constructor();
    isSuccess(): boolean;
    getRet(): ConnectRet;
    setRet(value: ConnectRet): void;
    constructResponse(response: any): void;
}
