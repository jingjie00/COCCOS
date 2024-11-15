import { BaseRequest } from "./BaseRequest";
import '@hw-agconnect/instance';
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class ClientAuthRequest extends BaseRequest {
    private REQUEST_URL;
    private useJwt;
    constructor(instance: AGCInstance);
    getBody(): any;
    getUrl(): string;
    setUseJwt(useJwt: number): void;
    getUseJwt(): number;
}
