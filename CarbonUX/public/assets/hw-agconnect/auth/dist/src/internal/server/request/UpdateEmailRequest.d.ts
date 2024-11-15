import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class UpdateEmailRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private newEmail;
    private newVerifyCode;
    private lang;
    setNewVerifyCode(newVerifyCode: string): void;
    setNewEmail(newEmail: string): void;
    setLang(lang: string): void;
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
