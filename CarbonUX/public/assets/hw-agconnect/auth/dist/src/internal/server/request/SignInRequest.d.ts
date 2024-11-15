import { AuthBaseRequest } from './AuthBaseRequest';
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class SignInRequest extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private provider;
    private token;
    private extraData;
    private autoCreateUser;
    private useJwt;
    setUseJwt(useJwt: number): void;
    getExtraData(): string;
    setExtraData(extraData: string): void;
    setAutoCreateUser(autoCreateUser: number): void;
    setProvider(provider: number): void;
    setToken(token: string): void;
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
