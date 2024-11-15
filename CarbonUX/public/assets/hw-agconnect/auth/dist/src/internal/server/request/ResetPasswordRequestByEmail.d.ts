import { BaseRequest } from "./BaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class ResetPwdRequestByEmail extends BaseRequest implements RequestConstructor {
    private URL;
    private readonly email;
    private readonly newPassword;
    private readonly verifyCode;
    constructor(email: string, newPassword: string, verifyCode: string);
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
