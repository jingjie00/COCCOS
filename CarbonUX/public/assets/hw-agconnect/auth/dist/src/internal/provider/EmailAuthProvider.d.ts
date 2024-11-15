import { AGConnectAuthCredential, VerifyCodeResult } from "@hw-agconnect/auth-types";
export declare class EmailAuthProvider {
    /**
     * 通过邮箱和密码获取凭证
     * 如果创建用户时设置了密码，可以采用邮箱和密码登录
     *
     * @param email 邮箱
     * @param password 密码
     * @return Email凭证
     */
    static credentialWithPassword(email: string, password: string): AGConnectAuthCredential;
    /**
     * 通过邮箱和验证码获取凭证
     * 如果创建账户的时候没有设置过密码，则只能通过此接口进行登录，此时的password字段不赋值
     *
     * @param email 邮箱
     * @param password 密码
     * @param verifyCode 验证码 Link用户的时候必填
     * @return Email凭证
     */
    static credentialWithVerifyCode(email: string, password: string, verifyCode: string): AGConnectAuthCredential;
    /**
     * 申请邮箱验证码
     *
     * @param email 邮箱
     * @param settings 验证码参数
     * @return 申请验证码异步任务
     */
    static requestVerifyCode(email: string, action: number, lang: string, sendInterval: number): Promise<VerifyCodeResult>;
}
