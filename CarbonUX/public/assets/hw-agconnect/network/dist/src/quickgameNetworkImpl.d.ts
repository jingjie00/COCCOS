import { AGCNetworkService, Method } from "@hw-agconnect/network-types";
import { NetworkApi } from "./networkApi";
export declare class quickgameNetworkImpl extends NetworkApi {
    sendRequest(methodType: Method, url: string, requestParam?: any, requestHeaders?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
}
