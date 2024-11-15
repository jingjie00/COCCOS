import { RequestConstructor } from "@hw-agconnect/instance";
import { AuthBaseRequest } from "./AuthBaseRequest";
export declare class RefreshTokenRequest extends AuthBaseRequest implements RequestConstructor {
    private URL;
    refreshToken: string;
    useJwt: number;
    constructor(refreshToken: string, useJwt: number);
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
