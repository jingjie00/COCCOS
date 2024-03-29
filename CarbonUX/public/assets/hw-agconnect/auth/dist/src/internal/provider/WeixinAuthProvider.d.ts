import { AGConnectAuthCredential } from '@hw-agconnect/auth-types';
export declare class WeixinAuthProvider {
    /**
     * 登录凭证构造器
     *
     * @param token 由WeiXin SDK授权后获得的token
     * @param openId 由WeiXin SDK授权后获得的openId
     * @param autoCreateUser 是否创建账户
     * @return 用于登录的凭证
     */
    static credentialWithToken(token: string, openId: string, autoCreateUser?: boolean): AGConnectAuthCredential;
}
