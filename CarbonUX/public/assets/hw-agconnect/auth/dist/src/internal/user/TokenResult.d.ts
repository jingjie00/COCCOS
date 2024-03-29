import { TokenResult } from '@hw-agconnect/auth-types';
export declare class TokenResultImpl implements TokenResult {
    token: string;
    expirePeriod: number;
    constructor(token: string, expirePeriod: number);
    /**
     * 获取用户的Access Token
     *
     * @return AT
     */
    getToken(): string;
    /**
     * 获取Token的有效期
     *
     * @return 有效期 单位：秒
     */
    getExpirePeriod(): number;
}
