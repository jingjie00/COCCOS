import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class UserLinkRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private provider;
    private token;
    private extraData;
    private useJwt;
    setUseJwt(useJwt: number): void;
    setProvider(provider: number): void;
    setToken(token: string): void;
    getExtraData(): string;
    setExtraData(extraData: string): void;
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
