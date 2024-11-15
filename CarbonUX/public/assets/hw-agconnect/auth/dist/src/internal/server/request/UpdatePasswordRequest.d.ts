import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class UpdatePasswordRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private verifyCode;
    private newPassword;
    private provider;
    getProvider(): number;
    setProvider(provider: number): void;
    setNewPassword(newPassword: string): void;
    setNewverifyCode(verifyCode: string): void;
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
