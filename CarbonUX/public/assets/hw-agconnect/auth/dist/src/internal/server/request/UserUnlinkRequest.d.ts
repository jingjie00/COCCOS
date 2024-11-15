import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class UserUnlinkRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private provider;
    getProvider(): number;
    setProvider(provider: number): void;
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
