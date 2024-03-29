import { AGCNetworkService, Method } from "@hw-agconnect/network-types";
import CancelTokenStatic = AGCNetworkService.CancelTokenStatic;
export declare abstract class NetworkApi implements AGCNetworkService.AGCNetwork {
    post(url: string, param: any, headers?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
    get(url: string, param?: any, headers?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
    delete(url: string, param?: any, headers?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
    put(url: string, param?: any, headers?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
    CancelToken: CancelTokenStatic;
    protected checkParam(url: string): boolean;
    abstract sendRequest(methodType: Method, url: string, requestParam?: any, requestHeaders?: any, config?: AGCNetworkService.AGCRequestConfig): Promise<AGCNetworkService.AGCResponse<any>>;
}
