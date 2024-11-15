import { AGConnectAuthCredential } from '@hw-agconnect/auth-types';
export declare class AlipayAuthProvider {
    /**
     * 登录凭证构造器
     *
     * @param authCode 由alipay授权后获得的auth_code
     * @param autoCreateUser 是否创建账户（默认创建）
     * @return 用于登录的凭证
     */
    static credentialWithToken(authCode: string, autoCreateUser?: boolean): AGConnectAuthCredential;
}
