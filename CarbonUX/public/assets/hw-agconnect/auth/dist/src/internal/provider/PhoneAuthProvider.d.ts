import { AGConnectAuthCredential, VerifyCodeResult } from '@hw-agconnect/auth-types';
export declare class PhoneAuthProvider {
    /**
     * 通过手机号和密码获取凭证
     * 如果创建用户时设置了密码，可以采用手机号和密码登录
     *
     * @param countryCode 国际码
     * @param phoneNumber 手机号
     * @param password 密码
     * @return Phone凭证
     */
    static credentialWithPassword(countryCode: string, phoneNumber: string, password: string): AGConnectAuthCredential;
    /**
     * 通过手机号和验证码获取凭证
     * 如果创建账户的时候没有设置过密码，则只能通过此接口进行登录，此时的password字段不赋值
     *
     * @param countryCode 国家码
     * @param phoneNumber 手机号
     * @param password 密码
     * @param verifyCode 验证码 Link用户的时候必填
     * @return Phone凭证
     */
    static credentialWithVerifyCode(countryCode: string, phoneNumber: string, password: string, verifyCode: string): AGConnectAuthCredential;
    /**
     * 申请手机验证码
     *
     * @param countryCode 国家码
     * @param phoneNumber 手机号
     * @param settings 验证码参数
     * @return 申请验证码异步任务
     */
    static requestVerifyCode(countryCode: string, phoneNumber: string, action: number, lang: string, sendInterval: number): Promise<VerifyCodeResult>;
}
