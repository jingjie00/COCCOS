import { Method, AxiosAdapter } from "axios";
import { AGCNetworkService } from "@hw-agconnect/network-types";
import { NetworkApi } from "./networkApi";
import CancelTokenStatic = AGCNetworkService.CancelTokenStatic;
export declare class NetworkImpl extends NetworkApi {
    CancelToken: CancelTokenStatic;
    constructor(adapter?: AxiosAdapter);
    getAxiosIns(): import("axios").AxiosStatic;
    sendRequest(methodType: Method, url: string, requestParam?: any, requestHeaders?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
}
