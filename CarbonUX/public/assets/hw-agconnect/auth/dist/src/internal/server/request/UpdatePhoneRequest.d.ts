import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class UpdatePhoneRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private readonly countryCode;
    private readonly newPhone;
    private readonly newVerifyCode;
    private readonly lang;
    constructor(countryCode: string, newPhone: string, newVerifyCode: string, lang: string);
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
