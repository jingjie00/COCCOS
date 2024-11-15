import { AGConnectAuthCredential } from "@hw-agconnect/auth-types";
export declare class SelfBuildAuthProvider {
    /**
     * 登录凭证构造器
     *
     * @param token 由Server SDK授权后,获得的token
     * @param autoCreateUser 是否创建账户
     * @return 用于登录的凭证
     */
    static credentialWithToken(token: string, autoCreateUser?: boolean): AGConnectAuthCredential;
}
