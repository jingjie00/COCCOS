import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class RegisterUserRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private phone;
    private email;
    private password;
    private verifyCode;
    private provider;
    private useJwt;
    constructor(email: string, phone: string, password: string, verifyCode: string, useJwt: number);
    setUseJwt(useJwt: number): void;
    setProvider(provider: number): void;
    setPhone(phone: string): void;
    setEmail(email: string): void;
    setVerifyCode(verifyCode: string): void;
    setPassword(password: string): void;
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
