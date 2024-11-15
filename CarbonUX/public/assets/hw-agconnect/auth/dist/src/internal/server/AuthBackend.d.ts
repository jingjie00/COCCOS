import { RequestConstructor } from "@hw-agconnect/instance";
import { AGCInstance } from "@hw-agconnect/instance-types";
import { BaseResponse } from "@hw-agconnect/instance";
export declare enum MethodType {
    POST = 0,
    GET = 1,
    PUT = 2
}
export declare class AuthBackend {
    private static readonly CLIENT_TOKEN_EXPIRED;
    private static readonly ACCESS_TOKEN_EXPIRED;
    private instance;
    private storedUserManager;
    constructor(instance?: AGCInstance);
    private getClientToken;
    /**
     * post请求，T为返回值泛型，可以返回任意response
     * @param request 请求对象，以对象方式传递的请求参数信息，需进行解析后调用网络接口
     * @param responseClass 网络请求返回对象。
     */
    post(request: RequestConstructor, responseClass: BaseResponse): Promise<any>;
    get(request: RequestConstructor, responseClass: BaseResponse): Promise<any>;
    put(request: RequestConstructor, responseClass: BaseResponse): Promise<any>;
    private sendRequest;
    private doNetworkOption;
    private checkIsTokenError;
}
