import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class VerifyCodeRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private phone;
    private email;
    private action;
    private lang;
    private sendInterval;
    setPhone(phone: string): void;
    setEmail(email: string): void;
    setAction(action: number): void;
    setLang(lang: string): void;
    setSendInterval(sendInterval: number): void;
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
