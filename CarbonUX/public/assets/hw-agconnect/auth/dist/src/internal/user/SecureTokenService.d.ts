/**
 * 提供token刷新服务
 *
 *
 */
import { TokenInfo } from '../server/entity/TokenInfo';
import { Token } from "@hw-agconnect/baseservice-types";
export declare class SecureTokenService {
    private readonly TIME_EARLY;
    accessToken: string;
    accessTokenValidPeriod: number;
    refreshToken: string;
    validTime: number;
    instanceName: string;
    constructeSecureTokenService(accessToken: TokenInfo, refreshToken: TokenInfo): void;
    getAccessToken(): string;
    getRefreshToken(): string;
    private isValidAccessToken;
    private remainToRefreshTime;
    fetchAccessToken(isForceRefresh: boolean): Promise<Token>;
}
