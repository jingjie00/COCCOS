import { EmailUser } from '@hw-agconnect/auth-types';
export declare class EmailUserImpl implements EmailUser {
    email: string;
    password: string;
    verifyCode: string;
    constructor(email: string, password: string, verifyCode: string);
    /**
     * 校验邮箱用户是否有效
     *
     * @param needVerifyPassword 是否校验用户的密码
     * @return 校验后的返回码
     */
    verifyEmailUser(needVerifyPassword: boolean): void;
}
