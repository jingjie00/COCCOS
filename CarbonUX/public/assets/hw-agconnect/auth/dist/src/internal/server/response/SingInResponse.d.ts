import { BaseResponse } from "@hw-agconnect/instance";
import { TokenInfo } from '../entity/TokenInfo';
import { UserInfo } from '../entity/UserInfo';
export declare class SignInResponse extends BaseResponse {
    private accessToken;
    private refreshToken;
    private userInfo;
    private providers;
    constructResponse(response: any): void;
    getAccessToken(): TokenInfo;
    setAccessToken(accessToken: TokenInfo): void;
    getRefreshToken(): TokenInfo;
    setRefreshToken(refreshToken: TokenInfo): void;
    getUserInfo(): UserInfo;
    getProviders(): Array<{
        [key: string]: string;
    }>;
    private userInfoToMap;
}
