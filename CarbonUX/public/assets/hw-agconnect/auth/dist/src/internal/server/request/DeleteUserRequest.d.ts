import { BaseRequest } from "./BaseRequest";
import { RequestConstructor } from "@hw-agconnect/instance";
export declare class DeleteUserRequest extends BaseRequest implements RequestConstructor {
    private URL;
    getBody(): any;
    getHeader(): any;
    getUrl(): string;
}
