import { BaseRequest } from "./BaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class ResetPwdRequestByPhone extends BaseRequest implements RequestConstructor {
    private URL;
    private readonly countryCode;
    private readonly phoneNumber;
    private readonly newPassword;
    private readonly verifyCode;
    constructor(countryCode: string, phoneNumber: string, newPassword: string, verifyCode: string);
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
