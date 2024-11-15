import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class SignInAnonymousRequest extends AuthBaseRequest implements RequestConstructor {
    private URL;
    private provider;
    private token;
    private extraData;
    private useJwt;
    constructor(provider: number, token: string, extraData: string, useJwt: number);
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
