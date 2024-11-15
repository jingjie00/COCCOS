import { BaseResponse } from "@hw-agconnect/instance";
export declare class UserLinkResponse extends BaseResponse {
    private providerUserInfo;
    constructor();
    getProviderUserInfo(): any | undefined;
    setProviderUserInfo(providerUserInfo: any): void;
    constructResponse(response: any): void;
}
