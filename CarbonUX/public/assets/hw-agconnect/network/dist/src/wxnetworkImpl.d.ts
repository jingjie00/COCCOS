import { NetworkApi } from "./networkApi";
import { AGCInstance } from "@hw-agconnect/instance-types";
import { AGCNetworkService, Method } from "@hw-agconnect/network-types";
export declare class WXNetworkImpl extends NetworkApi {
    private instance;
    constructor(instance: AGCInstance);
    sendRequest(methodType: Method, url: string, requestParam?: any, requestHeaders?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
}
