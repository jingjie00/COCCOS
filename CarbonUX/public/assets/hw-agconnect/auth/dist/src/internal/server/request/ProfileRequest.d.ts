import { AuthBaseRequest } from "./AuthBaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class ProfileReq extends AuthBaseRequest implements RequestConstructor {
    private readonly URL;
    private displayName;
    private photoUrl;
    setDisplayName(displayName: string): void;
    setPhotoUrl(photoUrl: string): void;
    getUrl(): string;
    getHeader(): any;
    getBody(): any;
}
