import { BaseRequest } from "./BaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class SignOutRequest extends BaseRequest implements RequestConstructor {
    private URL;
    private readonly bodyAccessToken;
    private readonly refreshToken;
    constructor(bodyAccessToken: string, refreshToken: string);
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
