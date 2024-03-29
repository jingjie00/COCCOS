import { BaseResponse } from "@hw-agconnect/instance";
import { TokenInfo } from "../entity/TokenInfo";
export declare class SignInAnonymousResponse extends BaseResponse {
    private accessToken;
    private refreshToken;
    private uid;
    /**
     * 构造方法，给定一些默认值，需要改变时，通过set方法设置
     */
    constructor();
    constructResponse(response: any): void;
    getUid(): string;
    getAccessToken(): TokenInfo;
    getRefreshToken(): TokenInfo;
}
